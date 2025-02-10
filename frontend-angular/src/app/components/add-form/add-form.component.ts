import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../../interface/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss',
})
export class AddFormComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  @Output() closeAddForm = new EventEmitter<void>();
  @Output() refreshListing = new EventEmitter<void>();

  submitted: boolean = false;

  formData: Car = {
    brand: '',
    model: '',
    variant: '',
    transmission: '',
    manufacture_year: 2022,
    // userId: null,
  };

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formData);
    this.submitted = true;
    this.createCar();
  }

  onClose() {
    this.closeAddForm.emit();
  }

  // API call handlers

  createCar() {
    this.carsService.createOneCar(this.formData).subscribe((res: any) => {
      alert('Car addedd successfully !');
      this.refreshListing.emit();
    });
  }
}
