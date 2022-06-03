import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  motos : Moto[] = [];
  isLoading = true;

  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.GetAll().subscribe((data: any) => {
      data['hydra:member'].forEach((element: Moto) => {
        if (element.venteFlash) {
          this.motos.push(element);
        }
        });
        this.isLoading = false;
    });
  }
}
