// src/app/repo-list/repo-list.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GithubRepository, GithubUser } from '../github.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})
export class RepolistComponent implements OnChanges {
  @Input() username = '';
  @Input() currentPage = 1;
  @Input() perPageOptions = [10, 30, 50, 70, 100];
  @Input() perPage = 10;

  repos: GithubRepository[] = [];
  isLoading = false;
  totalRepos: number = 0;
  user: GithubUser | null = null;

  constructor(private ApiService: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['username'] || changes['perPage']) {
      this.currentPage = 1; // Reset to the first page when the username changes
      this.searchReposAndUserDetails();
    } else {
      this.searchReposAndUserDetails();
    }
  }

  searchReposAndUserDetails() {
    this.isLoading = true;

    this.ApiService.getUser(this.username)
      .subscribe(
        (userData: any) => {
          this.user = userData;
          this.totalRepos = userData.public_repos;
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );

    this.ApiService.getRepos(this.username, this.currentPage, this.perPage)
      .subscribe(
        (data: any) => {
          this.repos = data;
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching repositories:', error);
          this.isLoading = false;
        }
      );
  }
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.searchReposAndUserDetails();
  }
  onPerPageChange(newPerPage: number) {
    this.perPage = newPerPage;
    this.searchReposAndUserDetails();
  }
}
