import React, { Component } from 'react';
import ContactCard from './card/ContactCard';

class ContactList extends Component {
  //function that taking the name from child component (ContactCard.js) to delete it ,and updating the list by parent component
  handleDelete = name => {
    let currentContacts = this.props.allContacts;

    let newList = Object.keys(currentContacts).reduce((acc, currentKey) => {
      if (
        name.toLowerCase() !== currentContacts[currentKey].Name.toLowerCase()
      ) {
        acc[currentKey] = this.props.allContacts[currentKey];
      }
      return acc;
    }, {});
    this.props.updateList(newList);
  };

  render() {
    return (
      <div id='booklists'>
        <ul>
          {Object.keys(this.props.data).map(contact => (
            <li key={contact}>
              <ContactCard
                data={this.props.data[contact]}
                handleDelete={name => this.handleDelete(name)}
                onFormOpen={name => this.props.handleOpenForm(name)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
