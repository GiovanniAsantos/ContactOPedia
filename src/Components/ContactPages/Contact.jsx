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
      <button className="btn btn-secondary form-control">
        {props.contact.name}
      </button>
    </div>
  );
};
export default Contact;
