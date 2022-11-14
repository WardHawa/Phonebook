import React, { Component } from 'react';
class Info extends Component {
  //function to change the display of the popup info block to none to hide it
  handleExit() {
    const modal = document.getElementById('Details');
    modal.style.display = 'none';
  }
  render() {
    return (
      <div id='Details' className='popup'>
        <div className='content'>
          <button className='close' onClick={this.handleExit}>
            &times;
          </button>
          <div className='info'>
            <h1 id='fullNameDetails' className='text' />
            <div>
              <label className='phone'> Phone number:</label>
              <label id='phoneNumberDetails'></label>
            </div>
            <div>
              <label className='address'> Address:</label>
              <label id='addressDetails'></label>
            </div>
            <div>
              <label className='Email'>Email:</label>
              <label id='emailDetails'></label>
            </div>
            <div>
              <label className='des'>description:</label>
              <label id='descriptionDetails'></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
