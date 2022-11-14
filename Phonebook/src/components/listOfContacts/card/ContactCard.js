import React, { Component } from 'react';

//icons of buttons
import editIcon from '../../../Assets/edit.png';
import deleteIcon from '../../../Assets/delete.png';
import infoIcon from '../../../Assets/info.png';

class ContactCard extends Component {
  //function that takes the information and put it in the block info
  handleInfo = event => {
    document.getElementById('Details').style.display = 'block';

    document.getElementById('fullNameDetails').innerHTML = this.props.data.Name;
    document.getElementById('phoneNumberDetails').innerHTML =
      this.props.data.Phone;
    document.getElementById('addressDetails').innerHTML =
      this.props.data.Address;
    document.getElementById('emailDetails').innerHTML = this.props.data.Email;
    document.getElementById('descriptionDetails').innerHTML =
      this.props.data.Description;
  };
  //function send name to the parent component to delete the contact
  handleDelete = event => {
    this.props.handleDelete(this.props.data.Name);
  };
  //function shows the data we want to change it in contactForm.js and send person name to the parent Component to make the edit
  handleEdit = event => {
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('editFormFname').value = this.props.data.Name;
    document.getElementById('editFormNumber').value = this.props.data.Phone;
    document.getElementById('editFormAddress').value = this.props.data.Address;
    document.getElementById('editFormEmail').value = this.props.data.Email;
    document.getElementById('editFormAvatarURL').value = this.props.data.Avatar;
    document.getElementById('editFormDescription').value =
      this.props.data.Description;
    this.props.onFormOpen(this.props.data.Name);
  };

  render() {
    return (
      <div className='contactCard'>
        <div className='contactCardDetails'>
          <div id='avatar'>
            <img src={this.props.data.Avatar} width={75} height={75} />
          </div>

          <div id='name'>
            <label>{this.props.data.Name}</label>
          </div>
        </div>
        <div className='contactCardButtons'>
          <div id='btnInfo'>
            <img
              src={infoIcon}
              width='48'
              height='48'
              alt=' '
              onClick={this.handleInfo}
            />
          </div>

          <div id='btnEdit'>
            <img
              src={editIcon}
              width='48'
              height='48'
              alt=' '
              onClick={this.handleEdit}
            />
          </div>

          <div id='btnDelete'>
            <img
              src={deleteIcon}
              width='48'
              height='48'
              alt=' '
              onClick={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
