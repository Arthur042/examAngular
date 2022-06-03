import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  moto = new Moto();
  displayedColumns: string[] = ['caracteristique', 'value'];
  dataSource : any = [];
  isLoading = true;

  constructor(private activatedRoute : ActivatedRoute, private motoService : MotoService) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.motoService.getById(id).subscribe((data: any) => {
      this.moto = data;
      this.dataSource = [
        {caracteristique: 'Prix', value: this.moto.prix},
        {caracteristique: 'Marque', value: this.moto.marque},
        {caracteristique: 'Catégorie', value: this.moto.type},
        {caracteristique: 'Cylindrée', value: this.moto.cylindree},
        {caracteristique: 'Année du modèle', value: this.moto.annee},
        {caracteristique: 'Kilomètres', value: this.moto.kilometres}
      ]
      this.isLoading = false;
    })
  }

}