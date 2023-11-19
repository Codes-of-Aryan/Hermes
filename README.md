markdown
Copy
# Project Cathy

Project Cathy is an event and customer request handler service powered by Generative A.I. It extends Cathay Pacific's premium customer service to intermodal travel and optimizes customer touchpoints beyond the airport. This repository contains the Django backend and two frontend applications: the customer frontend for the Cathay Pacific app and the business portal for third-party companies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and configure the Django project and frontends, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-cathy.git
Set up the Django project:
bash
Copy
cd project-cathy/backend
# Set up virtual environment (optional but recommended)
python3 -m venv env
source env/bin/activate
# Install dependencies
pip install -r requirements.txt
# Run migrations
python manage.py migrate
# Start the Django development server
python manage.py runserver
```

Set up the customer frontend:
bash
Copy
cd ../customer-frontend
# Install dependencies
npm install
# Start the development server
npm start
```

Set up the business portal frontend:
bash
Copy
cd ../business-portal-frontend
# Install dependencies
npm install
# Start the development server
npm start
```
Now you can access the customer frontend at http://localhost:3000 and the business portal frontend at http://localhost:4000.
