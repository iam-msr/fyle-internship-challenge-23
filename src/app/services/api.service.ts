import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepository } from '../github.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private apiUrl = 'https://api.github.com';
  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepos(githubUsername: string, page: number=1, perPage: number=10) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${perPage}`);
  }
  
}
