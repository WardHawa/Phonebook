import React, { Component } from 'react';
//icons
import addIcon from '../../Assets/plusIcon.png';
import deleteIcon from '../../Assets/DeleteAll.jpg';
import Search from './Search';

class TopBar extends Component {
  //function that displays the add form and empty fields
  handleAddForm() {
    const modal = document.getElementById('addForm');
    modal.style.display = 'block';
    document.getElementById('addFormFname').value = '';
    document.getElementById('addFormNumber').value = '';
    document.getElementById('addFormAddress').value = '';
    document.getElementById('addFormEmail').value = '';
    document.getElementById('addFormAvatarURL').value = '';
  }

  render() {
    return (
      <div>
        <div className='actionsBar'>
          <Search
            data={this.props.data}
            handleFilter={newData => this.props.handleFilter(newData)}
          />

          <div className='barBtn'>
            <img
              src={addIcon}
              width='48'
              height='48'
              alt=' '
              onClick={() => this.handleAddForm()}
            />

            <img
              src={deleteIcon}
              width='48'
              height='48'
              alt=' '
              onClick={() => this.props.handleDeleteAll()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
