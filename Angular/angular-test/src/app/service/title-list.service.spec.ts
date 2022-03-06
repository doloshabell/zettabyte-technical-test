import { TestBed } from '@angular/core/testing';

import { TitleListService } from './title-list.service';

describe('TitleListService', () => {
  let service: TitleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
