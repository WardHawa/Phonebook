import React, { Component } from 'react';
//components
import ContactForm from './ContactForm';
import ContactList from './listOfContacts/ContactList';
import Info from './listOfContacts/card/Info';
import TopBar from './topBar/TopBar';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      dictOfContact: {}, //dictionary of contacts (objects)
      filteredContacts: {}, //contacts that we filtered by alphabetical order
      allContacts: {}, //all conatacts we have
      currentFormType: 0, //if list ==0 => empty list
    };
  }
  //builtin function, that says working in every component thats rendering the components,here we are updating the dictionary
  componentDidMount() {
    this.setState({
      dictOfContact: JSON.parse(this.props.storage),
      allContacts: JSON.parse(this.props.storage),
    });
  }
  //function that takes new data from child component (oldData & newDate) searching the name and make an affect on contact info that changed
  handleEdit = newItem => {
    let nameToChange = newItem.oldDetails;

    let updatedList = Object.keys(this.state.allContacts).reduce(
      (acc, currentKey) => {
        if (
          this.state.allContacts[currentKey].Name.toLowerCase() ===
          nameToChange.toLowerCase()
        ) {
          if (currentKey !== newItem.newDetails.Name) {
            acc[newItem.newDetails.Name] = newItem.newDetails;
          } else {
            acc[currentKey] = newItem.newDetails;
          }
        } else {
          acc[currentKey] = this.state.allContacts[currentKey];
        }
        return acc;
      },
      {},
    );
    this.updateList(updatedList);
    document.getElementById('editForm').style.display = 'none';
  };
  //function taking data from child component and searching if the user exists we retun an alert if not , adding him to the list and make an update
  handleAdd = data => {
    let oldDict = this.state.dictOfContact;
    let nameToCheck = data.Name.toLowerCase();
    let numberToCheck = data.Phone;
    if (nameToCheck !== '' && numberToCheck > 0) {
      if (oldDict[nameToCheck] == null) {
        oldDict[nameToCheck] = {
          Name: data.Name,
          Phone: data.Phone,
          Address: data.Address,
          Email: data.Email,
          Avatar: data.Avatar,
          Description: data.Description,
        };
        this.setState({
          allContacts: oldDict,
        });

        this.props.updateStorage(oldDict);
      } else {
        alert('This contact already exists!');
      }
      document.getElementById('addForm').style.display = 'none';
    } else {
      alert('Fill contact Name And Number');
    }
  };
  //function to help in topBar in search.js with the search result
  filterContacts = newData => {
    this.setState({
      filteredContacts: newData,
    });

    if (Object.keys(newData).length !== 0) {
      this.setState({
        dictOfContact: newData,
      });
    } else {
      this.setState({
        dictOfContact: {},
      });
    }
  };
  // function thats update the list to filltered contact sorted by alphabetical order
  updateList = newList => {
    if (Object.keys(this.state.filteredContacts).length === 0) {
      this.setState({
        dictOfContact: newList,
        allContacts: newList,
      });
    } else {
      this.setState({
        allContacts: newList,
      });
      let filteredList = Object.keys(this.state.filteredContacts).reduce(
        (acc, currentKey) => {
          if (currentKey in newList) {
            acc[currentKey] = newList[currentKey];
          }
          return acc;
        },
        {},
      );
      //changing the state to the filterd one
      this.setState({
        dictOfContact: filteredList,
        filteredContacts: filteredList,
      });
    }

    this.props.updateStorage(newList);
  };
  //function to delete all of the contacts in the localStorage
  handleDeleteAll = () => {
    localStorage.setItem('Contacts', JSON.stringify({}));

    this.setState({
      allContacts: {},
      dictOfContact: {},
      filteredContacts: {},
    });

    alert('You have cleared your contacts list.');
  };

  render() {
    return (
      <main className='main'>
        {/*Top Bar (Search & Add & Delete All) */}
        <TopBar
          data={this.state.allContacts}
          handleFilter={newData => this.filterContacts(newData)}
          handleOpenForm={() => this.setState({ currentFormType: 0 })}
          handleDeleteAll={() => this.handleDeleteAll()}
        />
        {/*add form */}
        <ContactForm
          id='addForm'
          handleAdd={data => this.handleAdd(data)}
          currentType={0}
        />
        {/*Edit Form */}
        <ContactForm
          id='editForm'
          handleEdit={newItem => this.handleEdit(newItem)}
          currentType={1}
          nameToEdit={this.state.nameToEdit}
        />
        {/*contact list view that says if no contacts return an (Empty List) if there Contacts return the contact list */}
        {Object.keys(this.state.dictOfContact).length === 0 ? (
          <h2 className='empty'>EMPTY LIST</h2>
        ) : (
          <ContactList
            data={Object.keys(this.state.dictOfContact)
              .sort()
              .reduce(
                (acc, key) => ((acc[key] = this.state.dictOfContact[key]), acc),
                {},
              )}
            updateList={newList => this.updateList(newList)}
            allContacts={this.state.allContacts}
            handleOpenForm={name => this.setState({ nameToEdit: name })}
          />
        )}
        <Info />
      </main>
    );
  }
}
export default Main;
