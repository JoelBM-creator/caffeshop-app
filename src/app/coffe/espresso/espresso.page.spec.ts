import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspressoPage } from './espresso.page';

describe('EspressoPage', () => {
  let component: EspressoPage;
  let fixture: ComponentFixture<EspressoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspressoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspressoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
