export interface Bookings{
    bookingId
    customerName:string;
    flightFrom:string;
    flightTo:string;
    departureDate:Date;
    arrivalDate:Date;
    flightClass:string;
    createdAt:Date;
    price: number
}