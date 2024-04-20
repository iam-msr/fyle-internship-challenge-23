import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileLoaderComponent } from './user-profile-loader.component';
import { NgxSkeletonLoaderComponent, NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('UserProfileLoaderComponent', () => {
  let component: UserProfileLoaderComponent;
  let fixture: ComponentFixture<UserProfileLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileLoaderComponent, NgxSkeletonLoaderComponent],
      imports: [NgxSkeletonLoaderModule]
    });
    fixture = TestBed.createComponent(UserProfileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
