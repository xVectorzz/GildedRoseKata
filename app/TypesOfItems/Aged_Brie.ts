import {Item} from "./Items";

export class Aged_Brie extends Item{
  public update() {
    this.downSellIn();
    this.upQuality();
  }
}
