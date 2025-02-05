import { Component } from '@angular/core';
import { StatisticsComponent } from "../../components/statistics/statistics.component";

@Component({
  selector: 'app-home',
  imports: [StatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
