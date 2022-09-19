import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptorslistComponent } from './suscriptorslist.component';

describe('SuscriptorslistComponent', () => {
  let component: SuscriptorslistComponent;
  let fixture: ComponentFixture<SuscriptorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptorslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscriptorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
