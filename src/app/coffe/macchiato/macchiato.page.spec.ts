import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacchiatoPage } from './macchiato.page';

describe('MacchiatoPage', () => {
  let component: MacchiatoPage;
  let fixture: ComponentFixture<MacchiatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacchiatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacchiatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
