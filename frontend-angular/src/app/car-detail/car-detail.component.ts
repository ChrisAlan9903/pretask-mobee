import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-detail',
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  carId!: string;
  paramSub!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((params) => {
      this.carId = params.get('carId')!;
      console.log('car ID: ', this.carId);
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }
}
