# FocusForge Database Integrity Challenge

This repository contains a **broken database schema** used in the FocusForge productivity application.

The current database allows **invalid data to enter the system** because it does not enforce proper constraints.

Your task is to analyze the schema and **implement database-level validation** to protect data integrity.

---

## Database Entities

The application manages:

- Users
- Projects
- Tasks

However, the database currently allows:

- Missing task titles
- Duplicate user emails
- Invalid priority values
- Tasks referencing non-existent projects

---

## Your Goal

Fix the database by implementing proper constraints such as:

- NOT NULL
- UNIQUE
- CHECK
- FOREIGN KEY

---

## How to Start

Run the schema file:

schema.sql


Insert valid data:


sample_data.sql


Then run:


invalid_data.sql


Observe the issues.

Your task is to **modify the schema** so the invalid inserts fail.

---

## Submission

Submit screenshots showing:

1. Invalid data being inserted
2. Constraints added
3. Database rejecting invalid data

Also update:


Observations.md


Explain what problems you discovered and how you fixed them.