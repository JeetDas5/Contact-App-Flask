import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");
  const [error, setError] = useState(false);

  const updatingContact = Object.entries(existingContact).length > 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    if (!isValidEmail) {
      setError(true);
      toast.error("Please enter a valid email.");
      return;
    } else {
      setError(false);
    }

    const data = {
      firstName,
      lastName,
      email,
    };

    const url =
      "https://contact-app-flask.onrender.com" +
      (updatingContact
        ? `update-contact/${existingContact.id}`
        : "create-contact");
    const options = {
      method: updatingContact ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      toast.error(data.error);
    } else {
      toast.success(
        updatingContact
          ? "Contact updated successfully"
          : "Contact created successfully"
      );
      updateCallback();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName"> Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? "error" : ""}
        />
        {error && (
          <div className="error-message">Please enter a valid email.</div>
        )}

        <button type="submit">
          {updatingContact ? "Update Contact" : "Create Contact"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
