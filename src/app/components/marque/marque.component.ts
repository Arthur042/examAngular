import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  isLoading = true;
  motoMarque : string[] = [];

  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.GetAll().subscribe((data: any) => {
      data['hydra:member'].forEach((element: Moto) => {
        if (element.marque && this.motoMarque.indexOf(element.marque) == -1) {
          this.motoMarque.push(element.marque);
        }
      })
      this.isLoading = false;
    });
  }

}
