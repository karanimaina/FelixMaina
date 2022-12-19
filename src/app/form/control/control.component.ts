import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Input() control:FormControl = new  FormControl()

  @Input() type  = "text"
  @Input() placeholder = ''
  @Input() format = ''
}
