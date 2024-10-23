import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingflightComponent } from './connectingflight.component';

describe('ConnectingflightComponent', () => {
  let component: ConnectingflightComponent;
  let fixture: ComponentFixture<ConnectingflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectingflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectingflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
