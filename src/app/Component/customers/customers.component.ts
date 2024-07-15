import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Customer, Transaction } from 'src/app/interface/customer';
import { CustomerServicesService } from 'src/app/services/customer-services.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  {
  constructor(private _customerSrvice:CustomerServicesService){}
   customersList:any[]=[];
    transactionList:Transaction[]=[];
    customersWithTransactions: any[] = [];
    filteredCustomers: any[] = [];
    filteredTransactions:any[]=[];
    filterTerm:string='';
    filterAmount: string = '';
    selectedCustomer: Customer | null = null;

  

  ngOnInit(): void {
    this.getCustomersWithTransactions();
  

  }

  getCustomersWithTransactions() {
    this._customerSrvice.getAllCustomer().subscribe({
               next:(response)=>{
               this.customersList= response;
               this._customerSrvice.getAllTransAction().subscribe(transactions => {
              this.transactionList = transactions;
        this.customersWithTransactions = this.customersList.map(customer => {
      return {
        ...customer,
        transactions: this.transactionList.filter(transaction => transaction.customer_id == customer.id)
      };
    });
  });
  }
}); 
    
  }
    
  filterCustomersByName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filterTerm = inputElement.value;
    if(!this.filterTerm){
        
        this.getCustomersWithTransactions();
    }else{
      this.filteredCustomers = this.customersWithTransactions.filter(customer =>
        customer.name.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }
    this.customersWithTransactions=this.filteredCustomers;
    
  }


  filterCustomersByamount() {
    const amount = parseFloat(this.filterAmount);
    if(!amount){
      this.getCustomersWithTransactions();
    }
    if (isNaN(amount)) {
      this.filteredCustomers = this.customersWithTransactions;
    } else {
      this.filteredCustomers = this.customersWithTransactions.filter(customer => {
        return customer.transactions?.some((transaction: Transaction) => transaction.amount >= amount) ?? false;
      });
      this.customersWithTransactions=this.filteredCustomers;
    }
    
  }
  onSelectCustomer(customerId: number) {
    this.selectedCustomer = this.customersWithTransactions.find(customer => customer.id == customerId) || null;
            
  }

  

  
}











 