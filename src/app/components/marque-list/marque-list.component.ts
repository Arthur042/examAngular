import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  motos : Moto[] = [];
  currentMarque ?: string;
  isLoading = true;
  constructor(private activatedRoute : ActivatedRoute, private motoService : MotoService) { }

  ngOnInit(): void {
    let marque = this.activatedRoute.snapshot.paramMap.get('marque');
    if (marque) {
      this.motoService.getByMarque(marque).subscribe((data: any) => {
        if(marque){
          this.currentMarque = marque;
          this.motos = data;
        }
        this.isLoading = false;
      });
    }
  }

}
