import { TestBed } from '@angular/core/testing';
import { BirdDetailGuard } from './bird-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: BirdDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BirdDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
