import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepolistComponent } from './repolist.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiService } from '../services/api.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';

describe('RepolistComponent', () => {
  let component: RepolistComponent;
  let fixture: ComponentFixture<RepolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepolistComponent,PaginationComponent],
      imports: [HttpClientModule,FormsModule], 
      providers: [ApiService], 
    });
    fixture = TestBed.createComponent(RepolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
