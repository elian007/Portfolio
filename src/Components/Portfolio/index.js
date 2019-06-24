import React, {Component} from 'react'
import './style.css'
import axios from 'axios'

class Portfolio extends Component{
    state = {
        portfolio: []
}
componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({social: res.data.portfolio})})
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
                    <img src={portItem.image} alt='Exemplo'/>
                   

                </div>
            </div>
            </div>   
        )
    })



    return(

    <div className="work">
        <div className="container">
            <h2 className="work-title"><span>Portfolio</span></h2>
            {portList}
            
        </div>
    </div>
)
    }
}

export default Portfolio