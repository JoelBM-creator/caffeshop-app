import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LattePage } from './latte.page';

describe('LattePage', () => {
  let component: LattePage;
  let fixture: ComponentFixture<LattePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LattePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LattePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
