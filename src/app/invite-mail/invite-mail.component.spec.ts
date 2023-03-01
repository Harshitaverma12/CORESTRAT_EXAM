import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMailComponent } from './invite-mail.component';

describe('InviteMailComponent', () => {
  let component: InviteMailComponent;
  let fixture: ComponentFixture<InviteMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
