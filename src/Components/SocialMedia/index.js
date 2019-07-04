import React, {Component} from 'react'
import api from './../../Services/api'
import './style.css'

class SocialMedia extends Component{
    state = {
        social: []
}
componentDidMount(){
    api.get('/socialmedia').then(res => {this.setState({social: res.data})})
}

render(){

    const {social} = this.state;
    const socialList = social.map((socialItem) => {
        return(
            <div className="social" first={socialItem.id} key={socialItem.id}>
            <div className="container-fluid">
            

                <div className="part first">
                    <h4 className="part-title">{socialItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{socialItem.body}</p>
                    <a href={socialItem.url} target='blank'><img id='imgs'src={socialItem.image} alt='Icon'/></a>
                   

                </div>
                </div>
                </div>

           
        )
    })



    return(

    <div className="social border">
            <h2 className="social-title"><span>Social Media</span></h2>

        <div className="container-fluid">
            <div class="row ">
            {socialList}
            </div>
        </div>
        </div>

    
)
    }
}

export default SocialMedia