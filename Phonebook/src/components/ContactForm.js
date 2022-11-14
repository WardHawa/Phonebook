import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Phone: '',
      Address: '',
      Email: '',
      Avatar:
        'https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png',
      Description: '',
    };
  }
  //all of these functions that fills the state because at the end when we want to save it we send the state
  handleNameChange = event => {
    this.setState({
      Name: event.target.value,
    });
  };

  handlePhoneChange = event => {
    this.setState({
      Phone: event.target.value,
    });
  };

  handleAddressChange = event => {
    this.setState({
      Address: event.target.value,
    });
  };

  handleEmailChange = event => {
    this.setState({
      Email: event.target.value,
    });
  };

  handleAvatarChange = event => {
    this.setState({
      Avatar: event.target.value,
    });
  };
  handleDescriptionChange = event => {
    this.setState({
      Description: event.target.value,
    });
  };
  //function that when we press the Exit button (x), we rest the state details to defult, and changing the display to none to hide it
  handleExit = () => {
    this.setState({
      Name: '',
      Phone: '',
      Address: '',
      Email: '',
      Avatar:
        'https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png',
    });
    const addForm = document.getElementById('addForm');
    const editForm = document.getElementById('editForm');
    addForm.style.display = 'none';
    editForm.style.display = 'none';
  };
  // function to save the new details we changed it to new object and sending it to the parent component to make the change
  handleEdit = () => {
    this.props.handleEdit({
      newDetails: {
        Name: document.getElementById('editFormFname').value,
        Phone: document.getElementById('editFormNumber').value,
        Address: document.getElementById('editFormAddress').value,
        Email: document.getElementById('editFormEmail').value,
        Avatar: document.getElementById('editFormAvatarURL').value,
        Description: document.getElementById('editFormDescription').value,
      },
      oldDetails: this.props.nameToEdit, //here we are saving the old details to make affect
    });
  };

  render() {
    return (
      <div id={this.props.id} className='popup'>
        <div className='content'>
          <button className='close' onClick={this.handleExit}>
            &times;
          </button>
          <div className='text'> Contact</div>
          <form action='#'>
            <p>
              <label>Full name : *</label>
              <input
                type='text'
                name='name'
                required
                max='15'
                id={`${this.props.id}Fname`}
                onChange={this.handleNameChange}
              ></input>
            </p>
            <label>Phone number:*</label>
            <input
              type='tel'
              name='PhoneNumber'
              maxLength='10'
              id={`${this.props.id}Number`}
              onChange={this.handlePhoneChange}
              required
            ></input>
            <label className='address'> Address:</label>
            <input
              type='text'
              name='Address'
              id={`${this.props.id}Address`}
              onChange={this.handleAddressChange}
            ></input>
            <label className='Email'>Email:</label>
            <input
              type='email'
              name='email'
              id={`${this.props.id}Email`}
              onChange={this.handleEmailChange}
            ></input>
            <label>Avatar:</label>
            <input
              type='text'
              id={`${this.props.id}AvatarURL`}
              onChange={this.handleAvatarChange}
            ></input>
            <label>Description</label>
            <textarea
              id={`${this.props.id}Description`}
              onChange={this.handleDescriptionChange}
              placeholder='Describe here ...'
            />

            <input
              className='submit'
              type='submit'
              value='Save'
              onClick={() => {
                this.props.currentType === 0
                  ? this.props.handleAdd(this.state)
                  : this.handleEdit();
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
