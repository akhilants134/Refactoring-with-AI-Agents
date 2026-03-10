# When Clean Design Gets Complex — Database Normalization Challenge

Welcome Developer 👋

In this challenge, you will act as a **database engineer** fixing a poorly designed schema.

The current database works, but it violates several **normalization rules**, which leads to:

- duplicated data
- inconsistent updates
- complex maintenance
- scalability problems

Your mission is to **analyze the schema, normalize it to 3NF, and test queries on the improved structure.**

---

# The Problem

The current database stores product information for an e-commerce system.

However, the schema has several issues:

• Some fields contain **multiple values in a single column**  
• Some attributes **depend on other non-key attributes**  
• Some tables **mix unrelated information**

This violates **database normalization principles**.

Your job is to redesign the schema so that it follows **Third Normal Form (3NF)**.

---

# Learning Goals

By completing this challenge, you will learn how to:

- identify normalization problems
- break composite fields into proper tables
- create correct relationships between entities
- test queries after schema changes
- understand trade-offs between normalization and query complexity

---

# Repository Guide
schema/
broken_schema.sql

queries/
product_queries.sql

docs/
problem-context.md


---

# Where You Will Work

### 1️⃣ Schema Fixing

File:


schema/broken_schema.sql


This file contains the **broken database design**.

Your tasks:

- identify repeating fields
- separate dependent attributes
- create new tables where needed
- define primary and foreign keys

You may either:

- modify this file directly  
or  
- create a new file named:


normalized_schema.sql


---

### 2️⃣ Query Testing

File:


queries/product_queries.sql


These queries simulate **real product queries**.

After normalization:

- some queries may break
- some queries may require **JOINs**

Update the queries so they work with your normalized schema.

---

# How To Approach This Challenge

Step 1  
Read the schema carefully.

Step 2  
Identify violations of normalization such as:

- multi-valued attributes
- repeated groups
- attributes depending on other attributes

Step 3  
Break complex fields into **separate tables**.

Step 4  
Create proper **relationships using foreign keys**.

Step 5  
Run the queries again and update them if necessary.

Step 6  
Reflect on the trade-offs:

Did normalization make queries more complex?

---

# Expected Output

You should produce:

### 1️⃣ A normalized schema

Either:


schema/normalized_schema.sql


or an updated version of the original schema.

### 2️⃣ Working Queries

Update:


queries/product_queries.sql


So they work with your new schema.

### 3️⃣ Screenshots

Take screenshots showing:

- normalized tables
- working queries

---

# Tips

Start simple.

Look for columns that contain things like:


"Electronics, Mobile, Gadgets"


Those should usually be **separate rows in another table**.

Also check for things like:


supplier_name
supplier_phone
supplier_email


These likely belong in a **Supplier table**.

---

# Evaluation

Your work will be evaluated based on:

- correct normalization
- correct query updates
- understanding of design trade-offs

---

Good luck! 🚀