import { Component, Input } from '@angular/core';
import { GitHubUser } from '../models/GitHubUser';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  @Input() searchedUser: GitHubUser | undefined;


}
