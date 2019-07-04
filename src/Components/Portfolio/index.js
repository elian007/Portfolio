import React, {Component} from 'react'
import './style.css'
import api from './../../Services/api'

class Portfolio extends Component{
    state = {
        portfolio: []
}
componentDidMount(){
    api.get('/portfolio').then(res => {this.setState({portfolio: res.data})})
}

render(){

    const {portfolio} = this.state;
    const portList = portfolio.map((portItem) => {
        return(
            <div className="portfolio" first={portItem.id} key={portItem.id}>
            <div className="container">
                <div className="part first">
                    <h4 className="part-title">{portItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{portItem.body}</p>
                    <img id="img"src={portItem.image} alt='Exemplo'/>
                </div>
            </div>
            </div>   
        )
    })
    return(
    <div className="port border bg-light">
        <div className="container">
            <h2 className="port-title"><span>Portfolio</span></h2>
            {portList}
        </div>
    </div>
    )
    }
}

export default Portfolio