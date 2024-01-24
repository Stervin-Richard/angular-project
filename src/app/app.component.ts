import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
 

  serviceMenu =[
    {
      "id":1,
      "Name":"All Services"
    },
    {
      "id":2,
      "Name":"Constructions"
    },
    {
      "id":3,
      "Name":"Renovations"
    },
    {
      "id":4,
      "Name":"Big Projects"
    },
    {
      "id":5,
      "Name":"Consulting"
    },
    {
      "id":6,
      "Name":"Architecture"
    },
    {
      "id":7,
      "Name":"Concrete Transport"
    }
  ]
  newservice='All Services'
  childService(message:string){
    this.newservice= message
  }
}
