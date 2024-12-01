# Contact Search App

A simple React app to search, filter, and display contacts in a paginated table format.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Search Filters](#search-filters)
- [Pagination](#pagination)
- [Technologies Used](#technologies-used)
- [License](#license)

## About

This React app allows you to search for contacts from a list, filter them by fields such as First Name, Last Name, Date of Birth, Email Address, and Phone Number. The results are displayed in a table format with pagination. Users can select a contact from the results to view their details.

## Installation

To get started with this app, you'll need to clone the repository and install the necessary dependencies.

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/contact-search-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd contact-search-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will now be running at `http://localhost:3000`.

## Usage

Once the app is running, you can interact with the following features:

### Search Filters

Use the available search fields (First Name, Last Name, Date of Birth, Email, Phone) to filter the contacts. When you click the **Search** button, the app will update the results based on the filters provided.

### Pagination

Search results are displayed in a paginated table. Use the pagination controls to navigate through the results when there are many contacts.

### View Contact Details

When you click on a row in the search results table, the app will display the selected contact's details, including:

- Name
- Email
- Phone
- Address (if available)

## Search Filters

The following filters are available to search contacts:

- **First Name**: Search by first name.
- **Last Name**: Search by last name.
- **Date of Birth**: Search by date of birth.
- **Email Address**: Search by email.
- **Phone Number**: Search by phone number.

### Example Contact Data

The contact data is structured as follows:

```json
[
  {
    "name": "Rajeev Sharma",
    "dob": "1986-02-12",
    "address": "1001 Noble St Ste 1",
    "city": "Fairbanks",
    "state": "AK",
    "zip": "99701",
    "email": "rajeevsharma@gmail.com",
    "phone": "2582528582"
  },
  {
    "name": "Eesha Sharma",
    "dob": "1995-07-04",
    "address": "4821 Ridge Top Cir",
    "city": "Anchorage",
    "state": "AK",
    "zip": "99508",
    "email": "eeshasharma@gmail.com",
    "phone": "2582528583"
  }
]
