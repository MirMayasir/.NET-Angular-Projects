create database HealthManagement;
use HealthManagement;

CREATE TABLE Appointments (
    appointment_id INT PRIMARY KEY IDENTITY(1,1),
    patient_name VARCHAR(100) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    reason TEXT NOT NULL
);
INSERT INTO Appointments (patient_name, appointment_date, appointment_time, reason)
VALUES ('John Doe', '2024-09-13', '10:30', 'Routine Checkup');

create table Users(

userName varchar(20),
password varchar(20)
)
ALTER TABLE Users
ALTER COLUMN userName VARCHAR(20) NOT NULL;

ALTER TABLE Users
ADD CONSTRAINT pk_userName PRIMARY KEY (userName);

INSERT INTO Users (userName, password)
VALUES ('mayasir', 'Mayasir@123');

CREATE TABLE profile (
    userName VARCHAR(20) PRIMARY KEY,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    address TEXT
);

INSERT INTO profile (userName, fullName, email, phone, address)
VALUES 
('johndoe', 'John Doe', 'john.doe@example.com', '123-456-7890', '123 Elm Street, Springfield'),
('janedoe', 'Jane Doe', 'jane.doe@example.com', '098-765-4321', '456 Oak Avenue, Springfield');

