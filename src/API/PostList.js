import axios from 'axios';
import React ,{Component} from 'react';
class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
 }
   componentDidMount(){
       axios.get('http://localhost:3300/users')
       .then(response => {
           this.setState({
               posts:response.data
           })
           console.log(response.data)
           
       })
       .catch(error => {
        console.log(error)
    }) }
    render() {
        const { posts} =this.state
  return (
    <div><h1>List of Posts</h1>
    {
    posts?.map(post => < div key={post.id}>{post.id}</div>)

    }
    </div>
  )
}}
export default  PostList
