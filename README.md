Contact Search App
A React-based contact search app that allows users to filter contacts by multiple fields (First Name, Last Name, Date of Birth, Email, and Phone), display search results in a paginated table format, and view the selected contact’s details.

Features
Search Filters: Users can search by multiple fields:
First Name
Last Name
Date of Birth
Email Address
Phone Number
Search Results: Display search results in a structured table format.
Pagination: Handles large datasets by paginating the results.
Contact Selection: Allows selecting a contact from the results to view detailed information.
Installation
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/contact-search-app.git
Navigate to the project directory:

bash
Copy code
cd contact-search-app
Install the necessary dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Folder Structure
bash
Copy code
/contact-search-app
  /src
    /components
      SearchFilters.js        # Component for search input fields
      ContactsTable.js        # Component to display contacts in a table
      ContactDetails.js       # Component to display selected contact details
    App.js                    # Main App component
    contacts.json             # JSON file with contact data
    index.js                  # Entry point for React
  package.json                # Project dependencies
  README.md                   # Project description and instructions
Usage
Search for Contacts
Use the search filters (First Name, Last Name, Date of Birth, Email, Phone) to search for specific contacts.
Click Search to apply the filters and see the results displayed in the table.
View Contact Details
Click on any contact row in the table to view their detailed information, such as:
Name
Email
Phone
Address
Pagination
The search results are paginated. Use the pagination controls to navigate through different pages of contacts.
Contact Data Format
The app expects the following JSON data structure for contacts:

json
Copy code
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
Technologies Used
React
JavaScript (ES6+)
CSS
React Paginate (for pagination)
React Table (for table rendering)
License
This project is licensed under the MIT License - see the LICENSE file for details.