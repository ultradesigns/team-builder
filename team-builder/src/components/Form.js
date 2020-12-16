import React from 'react'

function Form(props) {
  const { values, onChange, onSubmit } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
          <div>
          <label> Name 
          <input 
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          />
        </label>
        <label> Email 
          <input 
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          />
        </label> Title 
        <label>
          <select name="Title" onChange={onChange} value={values.title}>
            <option value="">---Select One---</option>
            <option value="Data_Science">Data_Science</option>
            <option value="Project_Manager">Project_Manager</option>
            <option value="Ux_Designer">Ux_Designer</option>
          </select>
          
        </label>
        <div>
            <button> Submit </button>
        </div>
        
         
          </div>
        
      </form>
    </div>
  )
}

export default Form
