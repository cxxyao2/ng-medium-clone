# MediumcloneAngular
THis Angular Project is with NgRx State Management

## Overview

This project is a robust and scalable web applications using Angular and NgRx for state management. It features a secure backend built with C# and SQL Server to handle data operations and user authentication.

## Key Features

- **NgRx for State Management:** Implemented NgRx to manage the application's state efficiently, providing a predictable and consistent state across components.
- **Secure Backend:** Developed a backend using C# with secure authentication and authorization mechanisms, ensuring data integrity and user privacy.
- **SQL Server Database:** Utilized SQL Server for reliable data storage and retrieval, supporting complex queries and data relationships.

## Project Structure

- **Frontend (Angular + NgRx):**
  - `@ngrx/store`: Used for managing application state.
  - `@ngrx/effects`: Managed side effects like API calls, ensuring clean and maintainable code.
  - `@ngrx/entity`: Simplified the management of entity collections.
  - `@ngrx/router-store`: Integrated NgRx with Angular's router for seamless navigation state management.

- **Backend (C# + SQL Server):**
  - **ASP.NET Core:** Developed a RESTful API with ASP.NET Core, following best practices for security and performance.
  - **Entity Framework Core:** Used for data access, providing a seamless interaction between the application and SQL Server.
  - **Authentication and Authorization:** Implemented secure login and user management using industry-standard practices.

## Getting Started

### Prerequisites

- **Node.js** and **npm**: To run the Angular application.
- **SQL Server**: To manage the database.
- **.NET Core SDK**: To build and run the C# backend.
