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
            </div>
          )
        })
      }
      </div>
  );
    }
      



export default App;
