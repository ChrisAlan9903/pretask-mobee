import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListingHeaderComponent } from '../components/listing-header/listing-header.component';
import { ListingItemComponent } from '../components/listing-item/listing-item.component';
import { SearchComponent } from '../components/search/search.component';
import { CarsService } from '../services/cars.service';
import { Car } from '../../interface/car';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    ListingHeaderComponent,
    ListingItemComponent,
    SearchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private carsService: CarsService) {}
  cars: Car[];

  ngOnInit(): void {
    this.getCars();
  }

  // api call handler
  getCars() {
    this.carsService.getCars().subscribe((res: any) => {
      this.cars = res;
      console.log('cars from api: ', this.cars);
    });
  }
}
