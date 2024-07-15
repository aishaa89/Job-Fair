import { Component, Input } from '@angular/core';
import {Chart, ChartDataset, ChartOptions, ChartType} from 'chart.js/auto';
// import { Label } from 'ng2-charts';
import { CustomersComponent } from '../customers/customers.component';
import { Transaction } from 'src/app/interface/customer';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() transactions: Transaction[] = [];

  public lineChartData: ChartDataset[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.updateChartData();
  }

  ngOnChanges(): void {
    this.updateChartData();
  }

  private updateChartData() {
    const labels = this.transactions.map(transaction => transaction.date);
    const data = this.transactions.map(transaction => transaction.amount);

    this.lineChartLabels = labels;
    this.lineChartData = [
      {
        data,
        label: 'Transaction Amount',
        fill: false,
        borderColor: 'blue',
        borderWidth: 1,
      },
    ];
  }
    
 
  
}
