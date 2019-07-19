export class Booking {
    id: number;
    numPeople: number;
    startDate: string;
    endDate: string;
    id_listing: number;
    id_consumer: number;

    constructor(numPeople, startDate, endDate, id_listing, id_consumer) {
        this.id;
        this.numPeople = numPeople;
        this.startDate = startDate;
        this.endDate = endDate;
        this.id_listing = id_listing;
        this.id_consumer = id_consumer;
    }
}