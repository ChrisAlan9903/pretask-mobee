import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  url: string = 'https://pretask-mobee-backend.onrender.com';

  getCars() {
    return this.http.get(`${this.url}/cars`);
  }

  getOneCar(id: number) {
    return this.http.get(`${this.url}/cars/${id}`);
  }
  createOneCar(body: any) {
    return this.http.post(`${this.url}/cars`, body);
  }
  updateOneCar(id: number, body: any) {
    return this.http.put(`${this.url}/cars/${id}`, body);
  }
  deleteOneCar(id: number) {
    return this.http.delete(`${this.url}/cars/${id}`);
  }
}
