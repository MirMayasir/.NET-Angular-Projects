export interface FlightsAvailable{
    bookingId:number;
    flightFrom : string;
    flightTo :string;
    departureDate : Date;
    returnDate : Date;
    flightClass : string;
    price: number;
}