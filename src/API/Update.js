import React, { Component } from 'react'
import axios from 'axios';
export class Update extends Component {
    state = {
           id: '',
           firstname:'',
           lastname:'',
           location:''
        }
      
      handleChange =(e) => {
          this.setState({
             [e.target.name]:e.target.value
          })
      }
      handleSubmit =(e) => {
          const {id,firstname,lastname,location} =this.state;
          e.preventDefault()
          axios.put(`http://localhost:3300/users/${id}`,
          {id,
              firstname ,
          lastname,
          location 
          })
        .then(response => {
         
             console.log(response)
            })
            .catch(error => {
              console.log(error)
          })
             
             
         
      }
    render() {
      const {id,
      firstname,
      lastname,
      location,} = this.state
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>id</label>
                    <input type="text" 
                    name="id"
                    value={id}
                    onChange={this.handleChange}>
  
                    </input>
                </div>
                <div>
                    <label>firstname</label>
                    <input type="text" 
                    name="firstname"
                    value={firstname}
                    onChange={this.handleChange}>
  
                    </input>
                </div>
                <div>
                    <label>lastname</label>
                    <input type="text" 
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange}>
  
                    </input>
                </div>
                <div>
                    <label>location</label>
                    <input type="text" 
                    name="location"
                    value={location}
                    onChange={this.handleChange}>
  
                    </input>
                    
                </div>
                <div>
                    <button type="submit">update</button>
                </div>
            </form>
        </div>
      )
    }
  }
  

export default Update