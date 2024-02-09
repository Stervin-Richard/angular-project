import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NewComponent,CarouselComponent],
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
  childService(message:number){
    this.newservice= this.serviceMenu[message-1].Name
  }
  images = [
    {
      imageSrc: 'https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_2311.jpg',
      imageAlt: 'image1',
    },
    {
      imageSrc: 'https:\/\/images.dog.ceo\/breeds\/entlebucher\/n02108000_1172.jpg',
      imageAlt: 'image2',
    },
    {
      imageSrc: 'https:\/\/images.dog.ceo\/breeds\/cotondetulear\/100_2013.jpg',
      imageAlt: 'image3',
    },
    {
      imageSrc: 'https:\/\/images.dog.ceo\/breeds\/terrier-russell\/iguet1.jpg',
      imageAlt: 'image4',
    },
  ]
}
