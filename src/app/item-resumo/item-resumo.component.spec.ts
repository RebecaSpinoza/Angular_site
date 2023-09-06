import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResumoComponent } from './item-resumo.component';

describe('ItemResumoComponent', () => {
  let component: ItemResumoComponent;
  let fixture: ComponentFixture<ItemResumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemResumoComponent]
    });
    fixture = TestBed.createComponent(ItemResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
