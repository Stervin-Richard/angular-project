import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  @Input() names? : any;
  @Output() service = new EventEmitter();

  value(num:number){
    this.service.emit(num)
  }
 

}
