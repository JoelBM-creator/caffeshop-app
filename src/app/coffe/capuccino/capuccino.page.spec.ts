import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapuccinoPage } from './capuccino.page';

describe('CapuccinoPage', () => {
  let component: CapuccinoPage;
  let fixture: ComponentFixture<CapuccinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapuccinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapuccinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
