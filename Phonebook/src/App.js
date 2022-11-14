import React, { Component } from 'react';
//components
import Main from './components/Main';
//styles
import './styles/list.css';
import './styles/phoneBook.css';
import './styles/popup.css';
import './styles/topBar.css';
import './styles/contactCard.css';
import './styles/info.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      storage: localStorage.getItem('Contacts'),
    };
    const contact = {
      'ward hawa': {
        Name: 'Ward Hawa',
        Phone: '0545668547',
        Address: 'Nazareth',
        Email: 'Ward.ha99@outlook.com',
        Avatar:
          'https://lh3.googleusercontent.com/a-/AOh14Gj2L_vK44qKO3YwH74svT7RvGc0IGfige3GRyKuOg=s288-p-rw-no',
        Description: 'JAVA Dev',
      },
      'gabi samour': {
        Name: 'Gabi Samour',
        Phone: '0543165467',
        Address: 'Haifa',
        Email: 'gabisamour1@gmail.com',
        Avatar:
          'https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png',
        Description: 'Full Stack dev',
      },
      'bill gates': {
        Name: 'Bill Gates',
        Phone: '0251254258',
        Address: 'USA',
        Email: 'Bill@Microsoft.com',
        Avatar:
          'https://w7.pngwing.com/pngs/798/198/png-transparent-bill-gates-drawing-bill-gates-purple-face-violet.png',
        Description: 'Microsoft Manager',
      },
      'elon musk': {
        Name: 'Elon Musk',
        Phone: '0567893154',
        Address: 'TelAviv',
        Email: 'Elon@Example.com',
        Avatar:
          'https://bot.to/wp-content/uploads/2020/10/elon-musk_5f7f8d1c1c775.png',
        Description: 'Tesla manager',
      },
    };

    if (this.state.storage === null) {
      localStorage.setItem('Contacts', JSON.stringify(contact));
      this.setState({
        storage: JSON.parse(localStorage.getItem('Contacts')),
      });
    }
  }

  handleUpdateStorage = newStorage => {
    localStorage.setItem('Contacts', JSON.stringify(newStorage));
  };

  render() {
    return (
      <div className='App'>
        <label className='labelTitle'>Phonebook</label>
        <Main
          storage={this.state.storage}
          updateStorage={newStorage => this.handleUpdateStorage(newStorage)}
        />
        <footer>
          <h2>&#169; Ward Hawa & Gabi Samour 2022</h2>
        </footer>
      </div>
    );
  }
}
export default App;
