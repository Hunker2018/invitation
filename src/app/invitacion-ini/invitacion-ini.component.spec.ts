import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionIniComponent } from './invitacion-ini.component';

describe('InvitacionIniComponent', () => {
  let component: InvitacionIniComponent;
  let fixture: ComponentFixture<InvitacionIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitacionIniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
