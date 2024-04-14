# VMM (Vehicle Management System)

VMM is a CRUD application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Redux and React-Redux for state management, and Docker for containerization. It allows users to manage vehicle records by providing functionalities to view, add, edit, and delete vehicle data.

## Features
- Single-page application (SPA) architecture.
- Dashboard page displaying a list of vehicle data in a table format.
- Ability to add new vehicle records.
- Ability to edit existing vehicle records.
- Ability to delete vehicle records with confirmation dialog.

## Technologies Used
- Frontend:
  - React
  - React-Redux
  - Typescript
  - Material-UI (MUI)

- Backend:
  - Node.js
  - Express.js
  - MongoDB

- Docker

## Getting Started
To run VMM on your local machine, follow these steps:

1. Clone the repository:

2. Navigate to the root directory of the project:

3. Make sure you have Docker and Docker Compose installed on your system.

4. Run the following command to start the Docker containers:
```bash
    docker-compose up -d
```

5. After a few seconds, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage
- Upon accessing the application, you will be directed to the dashboard page.
- The dashboard displays a table of vehicle records.
- To add a new vehicle record, click on the "Add Vehicle" button and fill in the required information.
- To edit a vehicle record, click on the "Edit" icon corresponding to the desired vehicle record.
- To delete a vehicle record, click on the "Delete" icon corresponding to the desired vehicle record. A confirmation dialog will appear before deleting the record.