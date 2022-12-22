import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpMock: any;

  let mockQuery: any = {
    key : 1, 
    title : "test"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(ApiServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query', ()=>{
    let inputTest = "frog"



    service.GetQuery("test").subscribe(res => {
      expect((res as any).title).toEqual("test");
    });


    const req = httpMock.expectOne('http://openlibrary.org/search.json?'+ 'q=test' + '&limit=5');

    expect(req.request.method).toEqual('GET');

    req.flush(mockQuery);

    httpMock.verify();

  })


});
