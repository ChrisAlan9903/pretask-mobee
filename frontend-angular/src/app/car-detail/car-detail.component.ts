import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QrCodeComponent } from 'ng-qrcode';
import { Car } from '../../interface/car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-car-detail',
  imports: [QrCodeComponent],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  carId!: string;
  paramSub!: Subscription;
  qrCodeUrl!: string;
  carDetail: Car;

  constructor(private route: ActivatedRoute, private carService: CarsService) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((params) => {
      this.carId = params.get('carId')!;
      console.log('car ID: ', this.carId);
      this.getOneCar();
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  // api call handler
  getOneCar() {
    this.carService.getOneCar(parseInt(this.carId)).subscribe((res: any) => {
      this.carDetail = res[0];
      console.log('Car detail with id ', this.carId, ':', this.carDetail);
    });
  }
}
