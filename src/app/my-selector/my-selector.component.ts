import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-selector',
  templateUrl: 'my-selector.component.html'
})
export class MySelectorComponent {

  private _originalItems: any[];

  private _items: any[];

  @Input()
  public set items(value: any[]) {
    this._originalItems = value;
    this._items = value;
  }

  public get items(): any[] {
    return this._items;
  }

  @Output()
  public readonly itemSelected: EventEmitter<any> = new EventEmitter<any>();

  public isShown = false;

  public keyword: string;

  public handleKeywordChanged(keyword: string): void {

    if (!keyword || keyword.length < 1) {
      this._items = this._originalItems;
      return;
    }
    this._items = this._originalItems?.filter(x => (x as string).indexOf(keyword) !== -1);
  }

  public makeDropdownShown(): void {
    this.isShown = true;
  }

  public makeDropdownHidden(): void {
    setTimeout(() => {
      this.isShown = false;
    }, 1000);
  }

  public selectItem(item: any): void {
    this.itemSelected.emit(item);
  }

}
