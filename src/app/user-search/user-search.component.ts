import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {

  @Output() search = new EventEmitter<any>();

  username: string = '';

  onSubmit(): void {
    this.search.emit({
      username: this.username,
    });
  }
}
