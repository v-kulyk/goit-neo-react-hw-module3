import { FaPhone, FaUser } from "react-icons/fa6";
export default function Contact({ contact, deleteHandler }) {
  function onDeleteClick(e, contact) {
    deleteHandler(contact);
  }

  return (
    <>
      <div>
        <FaUser /> {contact.name}
      </div>
      <div>
        <FaPhone /> {contact.number}
      </div>
      <button type="button" onClick={(e) => onDeleteClick(e, contact)}>
        Delete
      </button>
    </>
  );
}
