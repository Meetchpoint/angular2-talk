import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTalkComponent } from './angular-talk.component';

describe('AngularTalkComponent', () => {
  let component: AngularTalkComponent;
  let fixture: ComponentFixture<AngularTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
