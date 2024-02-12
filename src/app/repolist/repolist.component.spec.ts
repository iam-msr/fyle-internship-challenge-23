import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepolistComponent } from './repolist.component';

describe('RepolistComponent', () => {
  let component: RepolistComponent;
  let fixture: ComponentFixture<RepolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepolistComponent]
    });
    fixture = TestBed.createComponent(RepolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
