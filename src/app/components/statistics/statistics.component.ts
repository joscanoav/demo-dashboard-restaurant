import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
  imports: [ChartModule] // Importa el módulo de gráficos
})
export class StatisticsComponent implements OnInit {
  salesData: any[] = [];
  topDishes: any[] = [];

  constructor(private dataService: DataService) {}
  chartData: any;
  dishesChartData: any;
  ngOnInit() {
    this.dataService.getSales().subscribe(data => {
      this.salesData = data.sales;
      this.topDishes = data.topDishes;

      this.chartData = {
        labels: this.salesData.map(s => s.month),
        datasets: [
          {
            label: 'Ventas por mes',
            data: this.salesData.map(s => s.total),
            backgroundColor: '#42A5F5'
          }
        ]
      };

      this.dishesChartData = {
        labels: this.topDishes.map(d => d.name),
        datasets: [
          {
            data: this.topDishes.map(d => d.orders),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      };
    });
}
}


