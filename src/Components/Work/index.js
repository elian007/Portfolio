import React, {Component} from 'react'
import './style.css'
import api from './../../Services/api'


class Work extends Component{
    
    state = {
            works: []
    }
    componentDidMount(){
        api.get('/work').then(res => {this.setState({works: res.data})})
    }

    render(){

        const {works} = this.state;
        const worksList = works.map((workItem) => {
            return(
                <div className="work" first={workItem.id} key={workItem.id}>
                <div className="container">
                    <div className="part first">
                        <i className={workItem.icon_name}></i>
                        <h4 className="part-title">{workItem.title}</h4>
                        <hr className="line"/>
                        <p className="part-desc">{workItem.body}</p>
                        <img className='infra 'src={workItem.image} alt='infra'/>
                    </div>
                </div>
                </div>   
            )
        })
    
    
    
        return(

        <div className="work">
            <div className="container">
                <h2 className="work-title"><span>Serviços</span></h2>
                {worksList}
                
            </div>
        </div>
    )
    }
}

export default Work