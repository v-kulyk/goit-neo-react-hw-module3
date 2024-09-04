import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  const contactElements = contacts.map((contact) => (
    <li className={styles.item} key={contact.id}>
      <Contact contact={contact} deleteHandler={onDeleteContact} />
    </li>
  ));

  return <ul className={styles.list}>{contactElements}</ul>;
}
