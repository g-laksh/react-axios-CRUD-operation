import React, { Component } from 'react'
import axios from 'axios';
 class Delete extends Component {
       state = {
           id: ''
           
        }
      
      handleChange =event => {
          this.setState({
            id: event.target.value
          });
      }
      handleSubmit =event=> {
          event.preventDefault();
          axios.delete(`http://localhost:3300/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            })
            .catch(error => {
              console.log(error)
          })
             
             
         
      }
  render() {
    
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>id</label>
                  <input type="text" 
                  name="id"
                 
                  onChange={this.handleChange}>

                  </input>
              </div>
             
          <button type="submit">Delete</button>
          </form> </div>
    )
  }
}

export default Delete