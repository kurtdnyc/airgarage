import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { YelpService } from './services/YelpService';
import {Results} from './components/Results/Results'

class App extends Component{

  state={
    garages:[],
    searchTerm: "",
    isLoaded: false
  }
  constructor(props){
    super(props);
    this.yelpService = new YelpService()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  async handleClick(){  
    this.setState({garages: await this.yelpService.getGarages(this.state.searchTerm)})
    console.log(this.state.garages)
  }
  handleChange({target}){
    this.setState({[target.name]: target.value});
  }


  render(){
    return (
      <div> 
        <input
          name = "searchTerm"
          value = {this.state.searchTerm}
          onChange = {this.handleChange}
        />
        <button onClick={this.handleClick}> Click me</button>
        <Results garages = {this.state.garages}/>
      </div>
      
    )
    
  }
}

export default App