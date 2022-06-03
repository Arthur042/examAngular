import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  motosNumber : number = 0;
  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.GetAll().subscribe((data: any) => {
      this.motosNumber = data['hydra:member'].length;
    })
  }

}
