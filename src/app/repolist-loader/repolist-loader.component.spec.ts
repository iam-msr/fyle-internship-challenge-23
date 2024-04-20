import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepolistLoaderComponent } from './repolist-loader.component';
import { NgxSkeletonLoaderComponent, NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('RepolistLoaderComponent', () => {
  let component: RepolistLoaderComponent;
  let fixture: ComponentFixture<RepolistLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepolistLoaderComponent, NgxSkeletonLoaderComponent],
      imports: [NgxSkeletonLoaderModule]
    });
    fixture = TestBed.createComponent(RepolistLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
