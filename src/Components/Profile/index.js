import React, {Component} from 'react'
import './style.css'
import api from './../../Services/api'

class Profile extends Component{

    state = {
        profile: []
    }
componentDidMount(){
    api.get('/profile').then(res => {this.setState({profile: res.data})})
}
render(){
    const{profile} = this.state;
    const profiles = profile.map((profileItem) =>{
    return(
        <div class="creative">
        <div class="container">
            <div class="creative-info">
                <h2 class="info-title"><span>This is</span> Me</h2>
                <h4 class="info-dir">Universitário</h4>
                <p class="info-desc">
                    Olá, sou <b>Elian Marcos</b>, {profileItem.body}
                </p>
                <p class="info-desc">

                </p>
            </div>
        </div>
    </div>
    )
    })
    return(

        <div className="creative">
            <div className="container">
                {profiles}
                
            </div>
        </div>
    )
}
}

export default Profile

