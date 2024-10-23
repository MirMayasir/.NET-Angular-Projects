create database FlightDatabase
use FlightDatabase
create table Contactus(
fullName varchar(20) primary key,
email varchar(10),
contact varchar(10),
message varchar(40)
)

ALTER TABLE Contactus
ALTER COLUMN email VARCHAR(320);

insert into Contactus (fullName, email, contact, message)
values ('mayasir', 'mayasir@gmail.com', '1223355', 'hello i need help')

select * from Contactus

ALTER TABLE Contactus
ALTER COLUMN contact VARCHAR(20);

CREATE TABLE CurrentFlights (
    FlightFrom VARCHAR(100) NOT NULL,
    FlightTo VARCHAR(100) NOT NULL,
    DepartureDate DATE NOT NULL,
    ReturnDate DATE NOT NULL,
    Traveller VARCHAR(100) NOT NULL,
    FlightClass VARCHAR(20) NOT NULL
);

ALTER TABLE CurrentFlights
ADD BookingID INT PRIMARY KEY IDENTITY(1,1);



select * from CurrentFlights

alter table CurrentFlights drop column Traveller

CREATE TABLE FlightBookings (
    id INT PRIMARY KEY,
    flightId VARCHAR(50) NOT NULL,
    customerName VARCHAR(100) NOT NULL,
    flightFrom VARCHAR(100) NOT NULL,
    flightTo VARCHAR(100) NOT NULL,
    departureDate DATE NOT NULL,
    arrivalDate DATE NOT NULL,
    flightClass VARCHAR(50),
    createdAt DATETIME DEFAULT GETDATE()
);
EXEC sp_rename 'FlightBookings.id', 'bookingId', 'COLUMN';

alter table CurrentFlights add customerName varchar(20) 

ALTER TABLE CurrentFlights
ADD price DECIMAL(10, 2) NOT NULL DEFAULT 0.00;
INSERT INTO CurrentFlights (FlightFrom, FlightTo, DepartureDate, ReturnDate, FlightClass, price)
VALUES 
('Delhi', 'Mumbai', '2024-10-01', '2024-10-05', 'Economy', 3500.00),
('Bengaluru', 'Hyderabad', '2024-11-10', '2024-11-20', 'Business', 5500.00),
('Chennai', 'Kolkata', '2024-09-15', '2024-09-25', 'Economy', 4500.00),
('Ahmedabad', 'Pune', '2024-12-01', '2024-12-10', 'Economy', 4000.00),
('Mumbai', 'Goa', '2024-11-01', '2024-11-10', 'Economy', 3200.00),
('Delhi', 'Chandigarh', '2024-10-20', '2024-10-25', 'Economy', 2500.00),
('Kolkata', 'Bhubaneswar', '2024-09-05', '2024-09-10', 'Business', 6200.00),
('Jaipur', 'Lucknow', '2024-11-15', '2024-11-22', 'Economy', 3700.00),
('Hyderabad', 'Vizag', '2024-12-05', '2024-12-12', 'Business', 4800.00),
('Pune', 'Delhi', '2024-10-10', '2024-10-18', 'Economy', 5300.00);


select * from CurrentFlights


ALTER TABLE FlightBookings ALTER COLUMN arrivalDate DATE NULL;


INSERT INTO FlightBookings 
(id,  customerName, flightFrom, flightTo, departureDate, arrivalDate, flightClass)
VALUES 
(2,  'Rahul Sharma', 'Delhi', 'Mumbai', '2024-09-15', '2024-09-20', 'Economy');

alter table FlightBookings drop column flightId
ALTER TABLE FlightBookings
ADD price DECIMAL(10, 2);

select * from FlightBookings

delete from FlightBookings
INSERT INTO FlightBookings 
(id,  customerName, flightFrom, flightTo, departureDate, arrivalDate, flightClass, price)
VALUES 
(2,  'Neha Gupta', 'Bengaluru', 'Chennai', '2024-10-10', '2024-10-12', 'Business', 8500.00);


alter table FlightBookings drop column createdAt

create table Users(
userName varchar(30) primary key,
password varchar(30)
)

insert into Users(userName, password) values('mayasir', 'Mayasir@123')
select * from Users
ALTER TABLE Users
ALTER COLUMN password NVARCHAR(64);
delete from Users
