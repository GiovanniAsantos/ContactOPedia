import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => {
          return (
            <Contact
              contact={contact}
              key={index}
              favoriteClick={props.favoriteClick}
              deleteContact={props.deleteContact}
              updateClick={props.updateClick}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FavoriteContacts;
