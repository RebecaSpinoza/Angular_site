import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPromocaoComponent } from './item-promocao.component';

describe('ItemPromocaoComponent', () => {
  let component: ItemPromocaoComponent;
  let fixture: ComponentFixture<ItemPromocaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPromocaoComponent]
    });
    fixture = TestBed.createComponent(ItemPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
