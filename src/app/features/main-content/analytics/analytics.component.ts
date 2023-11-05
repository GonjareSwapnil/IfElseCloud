import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  balanceChart: any = [];
  salesChart: any = [];
  productsChart: any = [];

  ngOnInit() {
    this.loadSalesAnalytics();
    this.loadBalanceAnalytics();
    this.loadTopProductsAnalytics()
  }

  loadBalanceAnalytics() {
    this.balanceChart = new Chart('balanceChartCanvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: 'hsl(230.32deg 65.96% 72.35%)',
            backgroundColor: 'hsl(230.32deg 65.96% 72.35%)',
          },
          {
            label: '# of Votes',
            data: [15, 9, 13, 15, 12, 8],
            borderWidth: 1,
            borderColor: 'hsl(231.43deg 74.47% 90.78%)',
            backgroundColor: 'hsl(231.43deg 74.47% 90.78%)',
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  loadSalesAnalytics() {
    this.salesChart = new Chart('salesChartCanvas', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: 'hsl(230.32deg 65.96% 72.35%)',
            backgroundColor: 'hsl(230.32deg 65.96% 72.35%)',
          },
          {
            label: '# of Votes',
            data: [2, 9, 13, 15, 12, 8],
            borderWidth: 1,
            borderColor: 'hsl(231.43deg 74.47% 90.78%)',
            backgroundColor: 'hsl(231.43deg 74.47% 90.78%)',
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  loadTopProductsAnalytics() {
    this.productsChart = new Chart('productChartCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 4, 9],
            borderWidth: 1,
            backgroundColor: [
              'hsl(230.67deg 55.56% 68.24%)',
              'hsl(230.77deg 80.25% 84.12%)',
              'hsl(231.2deg 78.95% 81.37%)',
              'hsl(232.38deg 69.23% 82.16%)',
              'hsl(230.67deg 65.22% 72.94%)'
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
