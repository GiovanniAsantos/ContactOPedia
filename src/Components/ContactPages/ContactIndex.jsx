import React from "react";
import Header from "../Layout/Header";
import AddRandomContacts from "./AddRandomContacts";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContacts from "./AddContacts";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "John Doe",
          phone: "123-456-7890",
          email: "john@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "123-456-7890",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "123-456-7890",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    // Validação dos campos
    if (!newContact.name || newContact.name.trim() === "") {
      return { status: "failure", message: "Por favor, insira um nome válido" };
    }
    if (!newContact.phone || newContact.phone.trim() === "") {
      return {
        status: "failure",
        message: "Por favor, insira um telefone válido",
      };
    }
    if (!newContact.email || newContact.email.trim() === "") {
      return {
        status: "failure",
        message: "Por favor, insira um email válido",
      };
    }

    // Verificação de registro duplicado
    const duplicateRecord = this.state.contactList.some(
      (contact) =>
        contact.name === newContact.name && contact.phone === newContact.phone
    );

    if (duplicateRecord) {
      return { status: "failure", message: "Registro duplicado" };
    }

    // Adicionar novo contato
    const newFinalContact = {
      ...newContact,
      id:
        this.state.contactList.length > 0
          ? this.state.contactList[this.state.contactList.length - 1].id + 1
          : 1,
      isFavorite: false,
    };

    this.setState((prevState) => ({
      contactList: [...prevState.contactList, newFinalContact],
    }));

    return { status: "success", message: "Contato adicionado com sucesso" };
  };

  handleUpdateContact = (updatedContact) => {
    // Validação dos campos
    if (!updatedContact.name || updatedContact.name.trim() === "") {
      return { status: "failure", message: "Por favor, insira um nome válido" };
    }
    if (!updatedContact.phone || updatedContact.phone.trim() === "") {
      return {
        status: "failure",
        message: "Por favor, insira um telefone válido",
      };
    }
    if (!updatedContact.email || updatedContact.email.trim() === "") {
      return {
        status: "failure",
        message: "Por favor, insira um email válido",
      };
    }

    this.setState((prevState) => ({
      contactList: prevState.contactList.map((obj) => {
        if (obj.id === updatedContact.id) {
          return {
            ...obj,
            name: updatedContact.name,
            email: updatedContact.email,
            phone: updatedContact.phone,
          };
        }
        return obj;
      }),
      isUpdating: false,
      selectedContact: undefined,
    }));

    return { status: "success", message: "Contact was updated successfully" };
  };

  handleToggleFavorite = (contact) => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.map((obj) => {
        if (obj.id === contact.id) {
          return { ...obj, isFavorite: !obj.isFavorite };
        }
        return obj;
      }),
    }));
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.filter((obj) => {
        return obj.id !== contact.id;
      }),
    }));
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id:
        this.state.contactList.length > 0
          ? this.state.contactList[this.state.contactList.length - 1].id + 1
          : 1,
      isFavorite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState((prevState) => ({
      contactList: [],
    }));
  };

  handleUpdateClick = (contact) => {
    this.setState({
      selectedContact: contact,
      isUpdating: true,
    });
  };

  handleCancelUpdateContact = () => {
    this.setState({
      selectedContact: undefined,
      isUpdating: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-5">
            <div className="col-4 offset-2 row">
              <AddRandomContacts
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContacts
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContacts
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handleAddContact={this.handleAddContact}
                  cancelUpdateContact={this.handleCancelUpdateContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter((u) => {
                    return u.isFavorite === true;
                  })}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter((u) => {
                    return u.isFavorite === false;
                  })}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
