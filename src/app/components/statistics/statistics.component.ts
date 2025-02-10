import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
  imports: [ChartModule, CardModule]
})
export class StatisticsComponent implements OnInit {
  salesData: any[] = [];
  topDishes: any[] = [];
  ordersData: any[] = [];

  chartData: any;
  dishesChartData: any;
  ordersChartData: any;
  chartOptions: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSales().subscribe(data => {
      this.salesData = data.sales;
      this.topDishes = data.topDishes;
      this.ordersData = data.orders;

      this.chartData = {
        labels: this.salesData.map(s => s.month),
        datasets: [
          {
            label: 'Ventas por mes',
            data: this.salesData.map(s => s.total),
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EC407A']
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

      const orderStatuses = ['Completed', 'Pending', 'Cancelled'];
      const orderCounts = orderStatuses.map(status =>
        this.ordersData.filter(order => order.status === status).length
      );

      this.ordersChartData = {
        labels: orderStatuses,
        datasets: [
          {
            data: orderCounts,
            backgroundColor: ['#4CAF50', '#FF9800', '#F44336']
          }
        ]
      };

      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: { label: string; raw: number }) => {
                return ` ${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {
              font: {
                size: 14
              }
            }
          },
          x: {
            ticks: {
              font: {
                size: 14
              }
            }
          }
        }
      };
    });
  }
}


