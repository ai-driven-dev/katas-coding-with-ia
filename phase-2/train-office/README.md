
# Train Office Kata

## Overview

The Train Office Kata is a full-stack, AI-assisted coding challenge that builds upon all the concepts learned in Phase 1. This kata focuses on adding a train reservation feature to an existing backend and frontend system.

## Objective

Your task is to implement a train reservation feature that allows users to book seats on various train routes. This will involve working with both the backend and frontend components of the application.

## Characteristics of a train reservation

A train reservation typically includes the following characteristics:

1. Passenger Information: Name, contact details, and any special requirements.
2. Train Details: Train number, route, and departure/arrival times.
3. Seat Selection: Specific seat or seat type (e.g., window, aisle, first class).
4. Date of Travel: The date for which the reservation is made.
5. Booking Reference: A unique identifier for the reservation will be returned
6. Payment Information: Cost of the ticket and payment method used.
7. Class of Travel: Economy, business, or first class.
8. Number of Passengers: For group bookings or families traveling together.
9. Meal Preferences: If applicable for long-distance trains.
10. Cancellation/Refund Policy: Terms for modifying or canceling the reservation.

Feel free to use only a part of those characteristics in your exercice.

If it is your first attempt you can start with :

### Put Train Reservation

1. Number of Passengers
2. Train

### If it succeed return

1. Booking Reference
2. Seats selection

### If it failed return

1. An error message wtih the reason

### Rules about Reservation

1. Max 70% of the entire train
2. All seats for one reservation in the same coach
3. Ideally Max 70% of each coach

### Examples of Reservation Rules

1. Max 70% of the entire train:
   - Example: If a train has 100 seats, the maximum number of seats that can be reserved is 70.

2. All seats for one reservation in the same coach:
   - Example: If a family of 4 makes a reservation, all 4 seats must be allocated in the same coach.

3. Ideally Max 70% of each coach:
   - Example: If a coach has 50 seats, ideally no more than 35 seats should be reserved in that coach. But if it is the only choice this coach is choosen.

## Key Concepts

This kata will reinforce and expand upon the following concepts:

1. Backend Development:
   - API design and implementation
   - Database management
   - Business logic for seat availability and booking

2. Frontend Development:
   - User interface design for reservation system
   - State management
   - API integration

3. Full-Stack Integration:
   - Connecting frontend and backend systems
   - Data flow between client and server

4. Testing:
   - Unit testing for backend logic
   - Integration testing for API endpoints
   - Frontend component testing

5. AI Assistance:
   - Leveraging AI tools for code generation and problem-solving
   - Understanding and adapting AI-generated code

## Tasks

1. Analyze the existing codebase to understand the current architecture.
2. Design and implement backend API endpoints for train reservations.
3. Create database schemas and models for storing reservation data.
4. Develop frontend components for displaying available trains and handling reservations.
5. Implement form validation and error handling on both frontend and backend.
6. Create unit and integration tests for new features.
7. Document the new API endpoints and any changes to existing ones.

## Getting Started

1. Clone the existing repository.
2. Set up the development environment as per the project requirements.
3. Review the current codebase and identify areas where the new feature will be integrated.
4. Start implementing the train reservation feature, utilizing AI assistance when needed.

## Evaluation Criteria

- Functionality: Does the reservation system work as expected?
- Code Quality: Is the code well-structured, readable, and maintainable?
- Testing: Are there comprehensive tests for the new features?
- Integration: How well does the new feature integrate with the existing system?
- AI Utilization: Effective use of AI tools for development and problem-solving.

Good luck, and happy coding!
