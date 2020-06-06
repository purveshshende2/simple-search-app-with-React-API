import React ,{Component} from 'react';
import './App.css';
import Searchbox from './Component/Searchbox/Searchbox';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import Cards from './Component/Cards/Cards';
import Cardlist from './Component/Cardlist/Cardlist';






class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render (){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length ?
    <h1 className = 'tc f1 pa4 mt5 white'>Loading..</h1>:
    (
      <div className="App">
      <Navbar/>
      <Body/>
      <Searchbox searchChange={this.onSearchChange}/>
      <Cards/>
      <Cardlist robots={filteredRobots} />

      </div>
    );
  }
}

export default App;
