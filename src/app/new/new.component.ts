import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  @Input() name ='';

}
