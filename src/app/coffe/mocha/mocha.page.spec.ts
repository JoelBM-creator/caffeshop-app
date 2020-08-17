import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MochaPage } from './mocha.page';

describe('MochaPage', () => {
  let component: MochaPage;
  let fixture: ComponentFixture<MochaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MochaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
