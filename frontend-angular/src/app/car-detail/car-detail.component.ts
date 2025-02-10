import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QrCodeComponent } from 'ng-qrcode';
import { Car } from '../../interface/car';
import { CarsService } from '../services/cars.service';
import { EditFormComponent } from '../components/edit-form/edit-form.component';
import { DeleteConfirmationComponent } from '../components/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-car-detail',
  imports: [QrCodeComponent, EditFormComponent, DeleteConfirmationComponent],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  carId!: string;
  paramSub!: Subscription;
  qrCodeUrl!: string;
  carDetail: Car;
  editForm: boolean = false;
  deleteDialog: boolean = false;

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

  toggleEditForm(state: boolean) {
    this.editForm = state;
  }

  toggleDeleteDialog(state: boolean) {
    this.deleteDialog = state;
  }

  refreshListing() {
    this.editForm = false;
    this.deleteDialog = false;
    this.getOneCar();
  }

  // api call handler
  getOneCar() {
    this.carService.getOneCar(parseInt(this.carId)).subscribe((res: any) => {
      this.carDetail = res[0];
      console.log('Car detail with id ', this.carId, ':', this.carDetail);
    });
  }
}
