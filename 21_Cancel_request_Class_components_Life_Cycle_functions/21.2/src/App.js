import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      currentCountries: [],
    };
  }

  async fetchCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      this.setState({ countries: data, currentCountries: data });
    } catch (error) {
      console.log(error)
    }
  }

  inputChangeHandler(e) {
    const filtered = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    const timerID = setTimeout(() => {
      this.setState({ currentCountries: filtered });

      return () => {
        clearTimeout(timerID);
      };
    }, 500);
  }

  componentDidMount() {
    this.fetchCountries();
  }

  render() {
    return (
      <>
        <label htmlFor="search">Search</label>
        <input name="search" onChange={this.inputChangeHandler.bind(this)} />
        <ul>
          {this.state.currentCountries.map((country) => {
            return <li key={country.name.official}>{country.name.common}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default App;
