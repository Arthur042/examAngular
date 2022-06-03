import {
  Component,
  OnInit
} from '@angular/core';
import {
  Moto
} from 'src/app/models/moto';
import {
  MotoService
} from 'src/app/services/moto.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  isLoading = true;
  motoTypes: string[] = [];
  constructor(private motoService: MotoService) {}

  ngOnInit(): void {
    this.motoService.GetAll().subscribe((data: any) => {
      data['hydra:member'].forEach((element: Moto) => {
        if (element.type && this.motoTypes.indexOf(element.type) == -1) {
          this.motoTypes.push(element.type);
        }
      })
      this.isLoading = false;
    });
  }

}
