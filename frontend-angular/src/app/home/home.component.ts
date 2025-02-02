import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListingHeaderComponent } from '../components/listing-header/listing-header.component';
import { ListingItemComponent } from '../components/listing-item/listing-item.component';
import { SearchComponent } from '../components/search/search.component';

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
export class HomeComponent {}
