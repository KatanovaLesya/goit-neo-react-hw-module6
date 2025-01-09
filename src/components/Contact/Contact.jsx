import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => (
  <li className={styles.item}>
    <div className={styles.info}>
      <span>
        <span role="img" aria-label="user">
          👤
        </span>
        {contact.name}
      </span>
      <span>
        <span role="img" aria-label="phone">
          📞
        </span>
        {contact.number}
      </span>
    </div>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
