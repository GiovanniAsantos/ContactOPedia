import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        return (
          <Contact contact={contact} key={index} /> // Assuming Contact is a component that displays contact details
        );
      })}
    </div>
  );
};
export default FavoriteContacts;
