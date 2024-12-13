import {Item} from "./Items";
export class BackstagePasses extends Item{
    public update() {
        this.downSellIn();
        this.upQuality();

        if(this.sellIn <= 0){
            this.quality = 0;
            return
        }

        if(this.sellIn <= 10){
            this.upQuality();
        }
        if(this.sellIn <= 5){
            this.upQuality();
        }

    }
}
