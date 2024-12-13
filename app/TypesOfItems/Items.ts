export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public update(): void{
        this.downQuality();
        this.downSellIn();
    }
    public upQuality(): void{
        if(this.quality == 50){
            return
        }
        this.quality++;

        if(this.sellIn < 0){
            this.quality++;
        }

    }
    public downQuality(): void{

        if (this.quality ==0){
            return
        }
        this.quality--;

        if(this.sellIn < 0){
            this.quality--;
        }

    }
    public downSellIn(): void{
        this.sellIn--;
    }
}
