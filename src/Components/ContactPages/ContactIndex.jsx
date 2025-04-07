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
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-5">
            <div className="col-4 offset-2">
              <AddRandomContacts />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>
            <div className="row py-2">
              <AddContacts />
            </div>
            <div className="row py-2">
              <FavoriteContacts
                contacts={this.state.contactList.filter((u) => {
                  return u.isFavorite === true;
                })}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter((u) => {
                  return u.isFavorite === false;
                })}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContactIndex;
