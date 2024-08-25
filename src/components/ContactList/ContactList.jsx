import styles from "./ContactList.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

function ContactCard({ contact, deleteHandler }) {
  function onDeleteClick(e, contact) {
    e.preventDefault();
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
      <button
        type="button"
        className={styles.button}
        onClick={(e) => onDeleteClick(e, contact)}
      >
        Delete
      </button>
    </>
  );
}

export default function ContactList({ contacts, onDeleteContact }) {
  const contactElements = contacts.map((contact) => (
    <li className={styles.item} key={contact.id}>
      <ContactCard contact={contact} deleteHandler={onDeleteContact} />
    </li>
  ));

  return <ul className={styles.list}>{contactElements}</ul>;
}
