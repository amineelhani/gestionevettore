import { Component } from '@angular/core';
import { Contatto } from './contatto.model';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: [ './contatto.component.css' ]
})
export class ContattoComponent  {
  contatto: Contatto = new Contatto('Amine','Elhani','a@gmail.com','3894477736',5);

}
