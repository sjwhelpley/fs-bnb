export class Listing {
    name: string;
    location: string;
    price: number;
    imgUrl: string;

    constructor(name:string, location:string, price:number, imgUrl:string) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}