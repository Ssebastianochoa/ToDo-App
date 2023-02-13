import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Output() onAgregar: EventEmitter<any> = new EventEmitter();

  text: string = "";

  agregar() {
    this.onAgregar.emit(this.text)
  }
}
