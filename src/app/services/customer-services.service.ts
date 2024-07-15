import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, Transaction } from '../interface/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  constructor(private _httpclient:HttpClient) { }


  getAllCustomer():Observable<any>{
    return this._httpclient.get<Customer>("https://api-indol-kappa.vercel.app/customers");
  }
  getAllTransAction():Observable<any>{
    return this._httpclient.get<Transaction>("https://api-indol-kappa.vercel.app/transactions");

  }

  getAllTransActionById(customerId:number):Observable<any>{
    return this._httpclient.get<any>(`http://localhost:3000/transactions?customer_id=${customerId}`)

  }
}
