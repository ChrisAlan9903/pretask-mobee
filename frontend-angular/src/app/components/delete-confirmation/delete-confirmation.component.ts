import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirmation',
  imports: [],
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.scss',
})
export class DeleteConfirmationComponent {
  @Input() carId: number;
  @Output() handleCloseDelete = new EventEmitter<void>();

  constructor(private carService: CarsService, private router: Router) {}

  onDelete() {
    console.log('Delete confirmed: ', this.carId);
    this.deleteCar();
  }

  onClose() {
    this.handleCloseDelete.emit();
  }

  // API call handlers

  deleteCar() {
    this.carService.deleteOneCar(this.carId).subscribe((res: any) => {
      alert('Delete successful.');
      this.router.navigate(['/']);
    });
  }
}
