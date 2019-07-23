export class Listing {
    id: number;
    homeType: string;
    address: string;
    maxNumPeople: number;
    title: string;
    summary: string;
    pricePerNight: number;
    id_provider: number;

    constructor(homeType, address, maxNumPeople, title, summary, pricePerNight, id_provider) {
        this.id;
        this.homeType = homeType;
        this.address = address;
        this.maxNumPeople = maxNumPeople;
        this.title = title;
        this.summary = summary;
        this.pricePerNight = pricePerNight;
        this.id_provider = id_provider;
    }
}