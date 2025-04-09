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
    const id = form.contactId.value.trim();
    let response = undefined;
    if (this.props.isUpdating) {
      response = this.props.handleUpdateContact({
        name: name,
        email: email,
        phone: phone,
        id: parseInt(id),
      });
    } else {
      response = this.props.handleAddContact({
        name: name,
        email: email,
        phone: phone,
      });
    }

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
          <input
            name="contactId"
            hidden
            defaultValue={
              this.props.isUpdating ? this.props.selectedContact?.id : ""
            }
          />
          <div className="row p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update Contact" : "Add a new Contact"}
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
                required
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact?.name : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
                required
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact?.email : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="tel"
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
                required
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact?.phone : ""
                }
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
            <div
              className={`col-12 p-1 ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
              <button
                type="submit"
                className="btn btn-primary btn-sm form-control"
              >
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control btn-sm"
                  onClick={() => this.props.cancelUpdateContact()}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContacts;
