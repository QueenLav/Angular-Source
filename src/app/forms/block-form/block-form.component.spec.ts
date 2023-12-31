import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFormComponent } from './block-form.component';

describe('BlockFormComponent', () => {
  let component: BlockFormComponent;
  let fixture: ComponentFixture<BlockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
