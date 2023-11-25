// src/app/user-input/user-input.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Output() search = new EventEmitter<string>();
  username: string = '';

  onSubmit() {
    this.search.emit(this.username);
  }
}
