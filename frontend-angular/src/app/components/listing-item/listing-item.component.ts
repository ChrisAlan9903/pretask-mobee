import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Car } from '../../../interface/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-item',
  imports: [MatIconModule],
  templateUrl: './listing-item.component.html',
  styleUrl: './listing-item.component.scss',
})
export class ListingItemComponent {
  constructor(private router: Router) {}
  @Input() carDetail: Car;

  handleNavigate(id?: number) {
    this.router.navigate(['/', id]);
  }
}
