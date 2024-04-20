import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { GitHubUser } from './models/GitHubUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //App title
  title = 'fyle-frontend-challenge';

  constructor( private apiService: ApiService ) {}
  
  ngOnInit() {}

  // Username property
  username: string = '';

  // State properties
  repos: any[] = [];
  totalRepoCount: number = 0;
  currentPage: number = 1; // Default page number 1
  itemsPerPage: number = 10; // Default items per page 10
  isValidUser: boolean = false;
  searchClicked: boolean = false;
  searchedUser: GitHubUser | undefined;

  //Loading state
  reposLoading: boolean = false;
  userLoading: boolean = false;

  // Dropdown options
  itemsPerPageOptions: number[] = [10, 30, 50, 70, 100];



  searchUser(result: any): void {
    this.username = result.username;

    if (this.username.length) {
      this.searchClicked = true;

      // Reset the values before making a new search
      this.repos = [];
      this.totalRepoCount = 0;
      this.currentPage = 1;
      this.isValidUser = false;
      this.searchedUser = undefined;

      // Call the respective methods to update the user details and repositories
      this.searchUserDetails();
      this.searchUserRepositories();
    } else {
      window.alert('enter valid name');
    }
  }

  searchUserDetails(): void {
    this.userLoading = true;
    this.apiService.getUser(this.username).subscribe({
      next: (user: any) => {

        // Updates user information on successful retrieval
        this.totalRepoCount = user?.public_repos || 0;
        this.searchedUser = user;
        this.isValidUser = true;
        this.userLoading = false;
      },
      error: (error) => {
        // Handles errors in user information retrieval
        this.isValidUser = false;
        this.userLoading = false;
  
        if (error.status === 404) {
          console.error('User not found:', error);
          this.handleError('User not found. Please enter a valid GitHub username.');
        } else {
          console.error('Error loading user details:', error);
          this.handleError('Error loading user details. Please try again.');
        }
      },
    });
  }

  searchUserRepositories(): void {
    this.reposLoading = true;
      // Data is not in the cache, make the API call
      this.apiService
        .getUserRepos(this.username, this.currentPage, this.itemsPerPage)
        .subscribe({
          next: (repos) => {
            // Updates repository information on successful retrieval
            this.repos = repos;
            this.reposLoading = false;
          },
          error: (error) => {
            // Handles errors in repository information retrieval
            this.repos = [];
            this.isValidUser = false;
            this.reposLoading = false;
            console.error('Error loading repositories:', error);
            this.handleError('Error loading repositories. Please try again.');
          },
        });
    
  }

  //Scroll to repositories
  private scrollToRepos(): void {
    document.getElementById('repolist')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Private method to handle errors by displaying an alert
  private handleError(errorMessage: string): void {
    console.log(errorMessage);
  }

  changePerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.searchUserRepositories();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.searchUserRepositories();
  }
}


