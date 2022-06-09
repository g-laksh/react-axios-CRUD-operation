import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         firstname:'',
         lastname:'',
         location:''
      }
    }
    handleChange =(e) => {
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3300/users',this.state)
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
                  <button type="submit">submit</button>
              </div>
          </form>
      </div>
    )
  }
}

export default PostForm