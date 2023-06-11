# Para-Clothing
This project consists of creating a functional online store

## Group 35

Daniel Afonso Borges dos Santos nUSP 12608581

## 1 Requirements
The system must have 2 types of users: Clients, Event Administrators (Sellers).

Event Administrators are responsible for registering events and managing events created by them.

Customers are users who access the system to buy event tickets.

Each event admin record includes, at least: name, id, phone, email and password.

Each customer's record includes, at least: name, id, phone, email and password.

Event records include, at least: name, id, photo, description, price, quantity (in stock), location, date.

Selling Event Tickets: Events are selected, their quantity chosen, and are included in a cart. Tickets are purchased using a credit card number (any number is accepted by the system). The quantity of ticket sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

Event Management: Event Administrators can create/update/read/delete (crud) new events. For example, they can change the quantity in stock.

Customers must be able to transfer ticket between accounts (Specific Functionality).

Each Ticket from an Event Purchase generates a custom QR Code containing the ticket information. This QR Code is used to validate the ticket. (Specific Functionality)

The system must provide accessibility requirements and provide good usability.

The system must be responsive.

## 2 Project Description
Para Clothing is a website for an online clothing store. Clients can login to use saved payment informations and admins can use the system to update stock and add new clothes.

## 2.1 Mockups
System mockups can be found on [Figma](https://www.figma.com/file/YBPxkVqP2wwhZdSkiORqki/Para-Clothing?type=design&t=gUSDNbVm6pWNIKPL-0)

## 2.2 Navigation Diagram
![image](https://user-images.githubusercontent.com/68250033/236710200-be3761ca-ec34-4316-a998-c028a6499881.png)

## 3 How to run the website locally
All dependencies needed are registered in package.json.
Assuming you have all dependencies installed, to run the react app locally, all you need to is open the cmd in the directory where you downloaded all the files a run the command npm start.

