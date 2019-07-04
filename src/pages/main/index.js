import React, {Component} from 'react'
import api from './../../Services/api'

export default class Main extends Component{

    componentDidMount(){
        this.loadProfile()
    }

    loadProfile = async () => {
        const response = await api.get('./profile')
        console.log(response)
    }


    render(){
        return <h1> </h1>
    }

}