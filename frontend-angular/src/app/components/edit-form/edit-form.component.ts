import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../../interface/car';

@Component({
  selector: 'app-edit-form',
  imports: [FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
})
export class EditFormComponent {
  constructor(private carsService: CarsService) {}

  @Input() existingCar: Car;
  @Output() closeEditForm = new EventEmitter<void>();
  @Output() refreshListing = new EventEmitter<void>();

  submitted: boolean = false;

  formData: Car = {};

  ngOnInit(): void {
    this.formData = {
      brand: this.existingCar.brand,
      model: this.existingCar.model,
      variant: this.existingCar.variant,
      transmission: this.existingCar.transmission,
      manufacture_year: this.existingCar.manufacture_year,
    };
  }

  onSubmit() {
    console.log(this.formData);
    this.submitted = true;
    this.updateCar();
  }

  onClose() {
    this.closeEditForm.emit();
  }

  // API call handlers

  updateCar() {
    this.carsService
      .updateOneCar(this.existingCar.id, this.formData)
      .subscribe((res: any) => {
        alert('Car updated successfully !');
        this.refreshListing.emit();
      });
  }
}
