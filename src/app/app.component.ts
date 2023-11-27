// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { GithubUser } from './github.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchedUsername: string = '';
  userInfo: GithubUser | null = null;
  title: string = 'fyle-frontend-challenge';
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    
    this.loadUserData('johnpapa');
  }

  onSearch(username: string) {
    this.loadUserData(username);
  }

  private loadUserData(username: string) {
    this.searchedUsername = username;
    this.apiService.getUser(username).subscribe((userData: any) => {
      this.userInfo = userData;


    });
  }
}
