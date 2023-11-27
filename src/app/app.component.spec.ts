import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UserInputComponent } from './user-input/user-input.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepolistComponent } from './repolist/repolist.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,UserInputComponent,UserDetailsComponent,RepolistComponent,PaginationComponent],
    imports: [HttpClientModule,FormsModule], 
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call onSearch method when search button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'onSearch');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(app.onSearch).toHaveBeenCalled();
  });
  
});

