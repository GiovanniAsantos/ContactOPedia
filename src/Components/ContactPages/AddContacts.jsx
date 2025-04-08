import React from "react";

class AddContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.contactName.value.trim();
    const email = form.contactEmail.value.trim();
    const phone = form.contactPhone.value.trim();

    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (response.status === "success") {
      this.setState({
        errorMessage: undefined,
        successMessage: response.message,
      });
      form.reset();
    } else {
      this.setState({
        errorMessage: response.message,
        successMessage: undefined,
      });
    }
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className="row p-2">
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
                required
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
                required
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="tel"
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
                required
              />
            </div>
            {this.state.errorMessage && (
              <div className="col-12 text-danger text-center">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage && (
              <div className="col-12 text-success text-center">
                {this.state.successMessage}
              </div>
            )}
            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button
                type="submit"
                className="btn btn-primary btn-sm form-control"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContacts;
