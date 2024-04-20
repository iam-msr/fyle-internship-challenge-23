import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})
export class RepolistComponent {
  @Input() repos: any[] = [];
}
