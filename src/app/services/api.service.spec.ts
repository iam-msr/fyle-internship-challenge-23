import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data by username', () => {
    const mockUserData = {
      login: "johnpapa",
      id: 1202528,
      node_id: "MDQ6VXNlcjEyMDI1Mjg=",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/johnpapa",
      html_url: "https://github.com/johnpapa",
    };
    const username = 'johnpapa';

    service.getUser(username).subscribe((userData) => {
      expect(userData).toEqual(mockUserData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUserData);
  });

  it('should handle errors when fetching user data', () => {
    const username = 'nonexistentuser';

    service.getUser(username).subscribe(
      () => fail('Expected an error, but the request succeeded'),
      (error) => {
        expect(error.status).toEqual(404);
        expect(error.statusText).toEqual('Not Found');
      }
    );

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });


});
