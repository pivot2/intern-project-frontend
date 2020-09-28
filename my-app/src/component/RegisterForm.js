import React from "react";
import { Input, Error } from "./input";
import "../styles/login.css";

function Exit() {
  let register_form = document.getElementsByClassName("register-form")[0];
  let container = document.getElementsByClassName("container-x")[0];
  let container_2 = document.getElementsByClassName("fullscreen-container")[0];
  register_form.classList.toggle("active");
  container.classList.toggle("blur");
  container_2.style.display = "none";
}

const ExitButton = () => {
  return (
    <div className="exit">
      <i className="fas fa-times" onClick={Exit}></i>
    </div>
  );
};
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      name: "",
      gmail: "",
      password: "",
      valid: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGmailChange = this.handleGmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.Register = this.Register.bind(this);
  }

  handleNameChange(name) {
    this.setState(
      {
        name: name,
      },
      () => {
        this.setState({
          valid:
            this.state.gmail != "" &&
            this.state.name != "" &&
            this.state.password != ""
              ? true
              : false,
        });
      }
    );

    //console.log(this.state.valid)
  }

  handleGmailChange(gmail) {
    this.setState(
      {
        gmail: gmail,
      },
      () => {
        this.setState({
          valid:
            this.state.name != "" &&
            this.state.gmail != "" &&
            this.state.password != ""
              ? true
              : false,
        });
      }
    );

    //console.log(this.state.valid)
  }

  handlePasswordChange(password) {
    this.setState(
      {
        password: password,
      },
      () => {
        this.setState({
          valid:
            this.state.name != "" &&
            this.state.gmail != "" &&
            this.state.password != ""
              ? true
              : false,
        });
      }
    );
    console.log(this.state.password);
  }

  Register() {
    console.log(this.state.gmail);
    console.log(this.state.name);
    console.log(this.state.password);
    fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${this.state.name}`,
        password: `${this.state.password}`,
        gmail: `${this.state.gmail}`,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.signup == true) Exit();
        else {
          this.setState({
            error: data.error,
          });
          console.log(this.state.err);
        }
      });
  }
  render() {
    return (
      <div className="register-form" id="unblurred">
        <ExitButton />
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: "30px" }}>
          Register
        </p>
        <Error err={this.state.error} />
        <div className="name">
          <label for="name">NAME</label>
          <Input
            Id="name"
            Placeholder="Enter your name"
            Value={this.state.name}
            onValueChange={this.handleNameChange}
            style={
              this.state.error == ""
                ? {}
                : { backgroundColor: "#fff8f8", border: "red solid 1px" }
            }
          />
        </div>
        <div className="mail">
          <label for="mail">E-MAIL</label>
          <Input
            Id="gmail"
            Placeholder="Enter your gmail"
            Value={this.state.gmail}
            onValueChange={this.handleGmailChange}
            style={
              this.state.error == ""
                ? {}
                : { backgroundColor: "#fff8f8", border: "red solid 1px" }
            }
          />
        </div>
        <div className="password">
          <label for="mail">PASSWORD</label>
          <Input
            Type="password"
            Id="password"
            Placeholder="Enter your password"
            Value={this.state.password}
            onValueChange={this.handlePasswordChange}
            style={
              this.state.error == ""
                ? {}
                : { backgroundColor: "#fff8f8", border: "red solid 1px" }
            }
          />
        </div>
        <div className="checkbox-password d-flex justify-content-between">
          <div className="no d-flex">
            <Input
              Type="checkbox"
              style={{ marginBottom: "10px", marginTop: "2px" }}
            />
            <p>Remember password</p>
          </div>

          <p style={{ fontWeight: 700, cursor: "pointer" }}>Forgot password?</p>
        </div>
        <Input
          Type="submit"
          Id="login-btn"
          onClick={this.state.valid ? this.Register : ""}
          style={
            this.state.valid
              ? { backgroundColor: "#ffa15f" }
              : { cursor: "not-allowed" }
          }
        />
      </div>
    );
  }
}

export default RegisterForm;
