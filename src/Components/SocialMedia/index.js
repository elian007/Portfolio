import React, {Component} from 'react'
import './style.css'
import axios from 'axios'


class SocialMedia extends Component{
    state = {
        social: []
}
componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({social: res.data.social})})
}

render(){

    const {social} = this.state;
    const socialList = social.map((socialItem) => {
        return(
            <div className="social" first={socialItem.id} key={socialItem.id}>
            <div className="container">
                <div className="part first">
                    <h4 className="part-title">{socialItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{socialItem.body}</p>
                    <img src={socialItem.image} alt='Icon'/>
                   

                </div>
            </div>
            </div>   
        )
    })



    return(

    <div className="work">
        <div className="container">
            <h2 className="work-title"><span>Social Media</span></h2>
            {socialList}
            
        </div>
    </div>
)
    }
}

export default SocialMedia