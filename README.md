# Project Cathy

Project Cathy is an event and customer request handler service powered by Generative A.I. It extends Cathay Pacific's premium customer service to intermodal travel and optimizes customer touchpoints beyond the airport. This repository contains the Django backend and two frontend applications: the customer frontend for the Cathay Pacific app and the business portal for third-party companies.


## Project Scope 
For more details, please refer to the sys_design.pdf file in the repository.

The project includes the following implemented aspects:

- Business Portal: This is a frontend application designed for third-party companies to interact with the system.
- Client Frontend (Cathay App): This is the customer-facing frontend application for the Cathay Pacific app, where customers can make requests and interact with the system.
- Django Backend: The Django backend handles API calls and serves as the central processing unit for the system.
- GCP Vertex AI Tuned Model and API Calling: The project utilizes Google Cloud Platform's Vertex AI service for machine learning model training and inference. The tuned model is used for generating responses based on customer requests.


## Installation

### Clone the repository:

   git clone https://github.com/Codes-of-Aryan/Hermes.git

### Set Up GCP

Create a new GCP project or use an existing one. Make sure you have the necessary permissions to create and manage resources within the project.

Set up authentication:

Generate a service account key file in JSON format from the GCP Console.
Save the JSON key file as service-account-key.json and place it in the root directory of the project.
Set the GCP project ID:

Open the backendCathy/settings.py file.
Replace the placeholder <YOUR_PROJECT_ID> with your actual GCP project ID.

- Create an isolated Python environment
- Install the Vertex AI SDK package
pip install --upgrade google-cloud-aiplatform
- Initialize the Vertex AI SDK

Please note that the GCP setup steps provided here are a high-level overview, and it is recommended to refer to the official GCP documentation for detailed instructions on setting up a project, enabling required APIs, and managing authentication and authorization.

To install and configure the Django project and frontends, follow these steps:



## Set up the Django project:
cd backendCathy

### Set up virtual environment (optional but recommended)

python3 -m venv env
source env/bin/activate

### Run migrations

python manage.py migrate
### Start the Django development server

python manage.py runserver

## Set up the customer frontend:

cd ../Cathy
### Install dependencies

npm install

### Start the development server
npm start


## Set up the business portal frontend:

cd ../business-portal
### Install dependencies
npm install
### Start the development server
npm start

Now you can access the customer frontend at http://localhost:5173 and the business portal frontend at http://localhost:3000.
Django backend is hosted at http://localhost:8000. views.py calls genai.py to generate the response
