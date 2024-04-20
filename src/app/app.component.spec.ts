// app.component.spec.ts
import { ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserSearchComponent } from './user-search/user-search.component';
import { ApiService } from './services/api.service';
import { of } from 'rxjs';

  // Mock GitHubApiService
const githubServiceMock = {
  getUser: () => of({ public_repos: 3 } as any),
  getUserRepos: () => of([{ name: 'Repo 1' }, { name: 'Repo 2' }, { name: 'Repo 3'}] as any),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let githubService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        UserSearchComponent,
        NgxSkeletonLoaderComponent,
      ],
      imports: [HttpClientModule, FormsModule],
      providers: [{ provide: ApiService, useValue: githubServiceMock }],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('fyle-frontend-challenge');
  });

  it('should update user information on successful user search', fakeAsync(() => {
    spyOn(githubService, 'getUser').and.returnValue(
      of({ public_repos: 3 } as any)
    );
    component.searchUser({ username: 'test' });
    tick();
    expect(component.isValidUser).toBeTruthy();
    expect(component.totalRepoCount).toBe(3);
  }));

  it('should update repositories on successful repository search', fakeAsync(() => {
    spyOn(githubService, 'getUserRepos').and.returnValue(
      of([{ name: 'Repo 1' }, { name: 'Repo 2' }, {name: 'Repo 3'}] as any)
    );
    component.searchUser({ username: 'test' });
    tick();
    expect(component.repos.length).toBe(3);
  }));

});
