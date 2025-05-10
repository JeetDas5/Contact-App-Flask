# Contact Manager App

A simple contact management application built with **React** for the front-end and **Flask** for the back-end. This app allows users to create, update, and delete contacts, and it includes a modal for creating and editing contact information.

## Features

- **Create New Contact**: Add new contacts to your list.
- **Update Contact**: Edit existing contacts.
- **Delete Contact**: Remove contacts from the list.
- **Responsive Design**: Works seamlessly across devices.

## Technologies Used

### Front-End:

- **React.js**: A JavaScript library for building user interfaces.
- **CSS (Vanilla)**: Styling of components and layout.

### Back-End:

- **Flask**: A lightweight WSGI web application framework for Python.
- **Flask REST API**: For creating RESTful endpoints to interact with contact data.
- **JSON**: Data format used for communication between the front-end and back-end.

### Other Tools:

- **React Hot Toast**: For toast notifications upon successful or failed actions.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/JeetDas5/Contact-App-Flask
cd contact-app
```

### 2. Install Back-End Dependencies (Flask)

```bash
cd backend
pip install -r requirements.txt
```

### 3. Set Up Front-End Dependencies (React)

```bash
cd frontend
npm install
```

### 4. Running the App

#### Start Flask API Server (Backend):

```bash
cd backend
python main.py
```

This will start the Flask server on `http://127.0.0.1:5000/`.

#### Start React Development Server (Frontend):

```bash
cd frontend
npm run dev
```

This will run the React app on `http://localhost:5173/`.

The React app will be connected to the Flask API to manage contact data.

## Project Structure

```
/contact-app
    /frontend                       # React front-end
        /src
            /components             # React components
                /ContactForm.jsx    # Form for creating/editing contacts
                /ContactList.jsx    # List of contacts
            App.jsx                 # Main app component
            index.js                # Entry point for React app
    /backend                        # Flask back-end
        main.py                     # Flask app and routes
        models.py                   # Database models
        config.py                   # Configuration settings
        requirements.txt            # Flask dependencies
    README.md                       # Project documentation
```

## API Endpoints

### `GET /contacts`

- Fetch all contacts from the database.

### `POST /create-contact`

- Create a new contact.

### `PATCH /update-contact/{id}`

- Update an existing contact.

### `DELETE /delete-contact/{id}`

- Delete a contact by its `id`.

## Troubleshooting

- Ensure that both the **React app** and **Flask server** are running simultaneously.
- Check the browser's developer console for any errors or issues.
- Make sure the backend is running on `http://127.0.0.1:5000/` and front-end on `http://localhost:3000/`.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by [React Documentation](https://reactjs.org/docs/getting-started.html).
- Flask API from [Flask Documentation](https://flask.palletsprojects.com/).

---
