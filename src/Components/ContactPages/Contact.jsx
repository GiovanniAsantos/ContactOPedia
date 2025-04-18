const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 col-md-1 pt-2 pt-md-1">
        <img
          src={`http://ui-avatars.com/api/?name=${props.contact.name}`}
          alt=""
          style={{ width: "80%" }}
        />
      </div>

      <div className="col-6 col-md-5 texte-warning pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.email} <br />
          {props.contact.phone}
        </div>
      </div>

      <div className="col-2 col-md-2 pt-2 pt-md-3">
        <button
          className={`btn btn-sm ${
            props.contact.isFavorite ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => props.favoriteClick(props.contact)}
        >
          <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>

      <div className="col-2 col-md-2 pt-2 pt-md-3">
        <button
          className="btn btn-primary btn-sm btn-sm m-1"
          onClick={() => props.updateClick(props.contact)}
        >
          <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
        </button>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => props.deleteContact(props.contact)}
        >
          <i className="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
    </div>
  );
};
export default Contact;
