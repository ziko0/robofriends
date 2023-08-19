import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import './App.css';



class  App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('1')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
        console.log('2')

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

   render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(!robots.length){
        return <h1>Loading</h1>
    }else{
        return(
            <div className="tc">
                <h1 className="tc">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
    
   }
}

export default App;