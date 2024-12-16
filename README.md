# Task Management App

A simple and minimalistic app that allows users to create, edit, delete, and mark tasks as completed.

## Install dependencies
`npx install or npm install or yarn`

## Run project
`yarn start`


## Features
- **Task Management:** Create, edit, delete, and mark tasks as completed.
- **Two Screens:**
  - **Task List:** Displays all tasks.
  - **Task Details:** Provides the ability to edit tasks.
- **Task Editing Restrictions:**
  - Tasks cannot be edited once marked as completed.
  - Completed tasks can only be deleted.

## Project Structure
- **Business Logic:** All task-related logic resides in the `useTasks` file.
- **Context and Persistence:** Logic for managing context and data persistence is implemented in the `Providers` file.

## Data Model
A task consists of the following fields:
- **id:** Unique identifier for the task.
- **userId:** Identifier for the user.
- **todo:** The task description.
- **completed:** Task completion status.

> **Note:** The project intended to use the [dummyJSON todos API](https://dummyjson.com/docs/todos), but integration was not completed due to time constraints.

## UI Components
To keep the render methods simple, several components were created:
- **Button Components:**
  - `Button`
  - `SaveButton`
  - `DeleteButton`
  - `CompleteButton`

These buttons may appear somewhat messy due to efforts to make the UI responsive. Since design isn't the primary focus, the interface was kept intentionally simple.

---

Thank you for checking out this project!


