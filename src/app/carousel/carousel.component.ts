import { Component, Input, OnInit} from '@angular/core';
import { NgClass,NgFor,NgIf } from '@angular/common';
interface carouselImages{
  imageSrc:string;
  imageAlt:string;
}


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass,NgFor,NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  @Input() images: carouselImages[]=[]
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectedImage(index: number){
    this.selectedIndex = index;
  }
  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex --;
    }
  }
  onNextClick(){
    if(this.selectedIndex === 3){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex ++;
    }
  }
}
