import Users from "./Components/cards";
import "./App.css";
import "./index.css";
import React, { Component } from "react";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    this.setState({ loading: true});

    setTimeout( async function () {
          document.getElementById("info").style.display = "none";
          const response = await fetch("https://reqres.in/api/users?page=1");
          const jsonresponse = await response.json();
          console.log(jsonresponse);
          this.setState({ users_data: jsonresponse["data"], loading: false });
        }.bind(this),
        2000
      );
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark nav-pad m-3">
          <div className="container">
            <h3 className="navbar-brand brand" contentEditable="true">Let's Grow More</h3>
            <button onClick={this.showUsers}>Get Users</button>
          </div>
        </nav>
        <Users loading={this.state.loading} users={this.state.users_data} />
        <div id="info">
          <div>Click on &nbsp;<span className="brand"> "Get Users" </span>&nbsp; to fetch the data!<br/><span className="credit">Made by - YASPAL SINGH</span></div>
        </div>
      </div>
    );
  }
}

export default App;
