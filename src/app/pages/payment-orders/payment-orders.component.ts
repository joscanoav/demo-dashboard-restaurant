import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { TableModule } from 'primeng/table'; // ✅ Importar el módulo de la tabla
import { InputTextModule } from 'primeng/inputtext'; // ✅ Para el input de búsqueda
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-orders',
  standalone: true,
  imports: [CommonModule, TableModule, InputTextModule], // ✅ Agregar PrimeNG TableModule aquí
  templateUrl: './payment-orders.component.html',
  styleUrl: './payment-orders.component.css'
})
export class PaymentOrdersComponent implements OnInit {
  orders: any[] = [];
  filteredOrders: any[] = [];
  filterText: string = '';

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.getOrders().subscribe(data => {
      this.orders = data.orders;
      this.filteredOrders = this.orders;
    });
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredOrders = this.orders.filter(order =>
      Object.values(order).some(val =>
        (typeof val === 'string' || typeof val === 'number') &&
        val.toString().toLowerCase().includes(value)
      )
    );
  }
}


