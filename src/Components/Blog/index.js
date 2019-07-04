import React, {Component} from 'react'
import './style.css'
import api from './../../Services/api'


class Blog extends Component{
    state = {
        blog: []
}
componentDidMount(){
    api.get('/blog').then(res => {this.setState({blog: res.data})})
}

render(){

    const {blog} = this.state;
    const blogList = blog.map((blogItem) => {
        return(
            <div className="blog" first={blogItem.id} key={blogItem.id}>
            <div className="container">
                <div className="part first">
                    <h4 className="part-title">{blogItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{blogItem.body}</p>
                    <img id="img"src={blogItem.image} alt='Exemplo'/>
                   

                </div>
            </div>
            </div>   
        )
    })



    return(

    <div className="blog border bg-light">
        <div className="container">
            <h2 className="blog-title"><span>Blog</span></h2>
            {blogList}
            
        </div>
    </div>
)
    }
}

export default Blog