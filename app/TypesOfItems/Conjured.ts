import {Item} from "./Items";

class Conjured extends Item{
    public update() {
        this.downSellIn();
        this.downQuality();
        this.downQuality();
    }
}
