import { AfterViewInit, Component, Input, OnInit, NgZone} from '@angular/core';
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
export class CarouselComponent implements OnInit, AfterViewInit{
  @Input() images: carouselImages[]=[]
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  constructor(private _zone: NgZone){}

  selectedIndex = 0;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    this._zone.runOutsideAngular(()=>{

      this.autoSlideImages()
    });

    


    
    

  }

  autoSlideImages(): void{
    setInterval(() => {
      if( this.autoSlide ){
        this._zone.run(()=>{

          this.onNextClick();

        });
      }
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
