import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/car-list.component";
import { SearchBox } from "./components/searchbox/searchbox.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  handleChange = (e) => this.setState({ searchField: e.target.value });

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolldex</h1>

        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList name="shivam" monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
