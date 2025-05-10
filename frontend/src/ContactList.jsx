import toast from "react-hot-toast";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (contactId) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `https://contact-app-flask.onrender.com/delete-contact/${contactId}`,
        options
      );
      if (response.status === 200) {
        updateCallback();
        toast.success("Contact deleted successfully");
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error deleting contact");
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td data-label="First Name">{contact.firstName}</td>
              <td data-label="Last Name">{contact.lastName}</td>
              <td data-label="Emails">{contact.email}</td>
              <td data-label="Actions">
                <button
                  className="button button-update"
                  onClick={() => updateContact(contact)}
                >
                  Update
                </button>
                <button
                  className="button button-delete"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
