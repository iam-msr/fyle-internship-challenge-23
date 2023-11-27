import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GithubUser } from '../github.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnChanges {
  @Input() user: GithubUser | null = null;
  username: string;

  constructor() {
    this.username = '';
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
