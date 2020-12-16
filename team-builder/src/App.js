<<<<<<< HEAD
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'


const initialFormValues = {
  name:"",
  email:"",
  title:"",
}

const dummyFriends = [
  {
    id:1,
    name:'Lance Sanchez',
    email: 'lance@gmail.com',
    title: 'Data_Science'
  },
  {
    id:2,
    name:'Sasha the Man',
    email: 'ladiesman@justdoit.com',
    title: 'Project_Manager'
  },
  {
    id:3,
    name:'Joe Singer',
    email: 'singingjoe@makingmusicwithtech.com',
    title: 'Ux_Designer'
  },
];

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ friends, setFriends ] = useState(dummyFriends);
  // helper functions for submit and onchange

  const onChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (event, inputName, inputValue) => {
    event.preventDefault();

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role:formValues.role.trim(),
    }

    setFriends([newMember, ...friends])

  }

  

  return (
    <div className="App">
      Simple Team Building Form!
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {
        friends.map(friend => {
          return (
            <div key={friend.id}>
              <h2>{friend.name}</h2>
              <h3>{friend.email}</h3>
              <h3>{friend.title}</h3>
              <hr/>
            </div>
          )
        })
      }
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 80408b445cd2159578901464cff6c7450895fa5b
    </div>
  );
}

export default App;
