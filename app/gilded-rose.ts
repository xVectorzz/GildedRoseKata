import { Item } from "./TypesOfItems/Items";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }

    return this.items;
  }
}
