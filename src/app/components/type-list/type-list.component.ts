import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  motos : Moto[] = []
  type ?: string;
  isLoading = true;

  constructor(private activatedRoute : ActivatedRoute, private motoService : MotoService) { }

  ngOnInit(): void {
    let currentType = this.activatedRoute.snapshot.paramMap.get('type');
    if (currentType) {
      this.motoService.getByType(currentType).subscribe((data: any) => {
        if(currentType){
          this.type = currentType;
          this.motos = data;
        }
        this.isLoading = false;
      });
    }
  }

}
