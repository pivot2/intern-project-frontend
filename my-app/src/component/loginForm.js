import React from "react";
import { Input, Error } from "./input";
import "../styles/login.css";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

function Exit() {
  let login_form = document.getElementsByClassName("login-form")[0];
  let container = document.getElementsByClassName("container-x")[0];
  let container_2 = document.getElementsByClassName("fullscreen-container")[0];
  login_form.classList.toggle("active");
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
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      gmail: "",
      password: "",
      valid: false,
    };

    this.handleGmailChange = this.handleGmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.Login = this.Login.bind(this);
  }

  handleGmailChange(gmail) {
    this.setState(
      {
        gmail: gmail,
      },
      () => {
        this.setState({
          valid:
            this.state.gmail != "" && this.state.password != "" ? true : false,
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
            this.state.gmail != "" && this.state.password != "" ? true : false,
        });
      }
    );
  }

  Login() {
    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${this.state.gmail}`,
        password: `${this.state.password}`,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.login === false) {
          this.setState({
            error: data.err,
          });
        } else {
          this.setState({
            error: "",
          });
          Cookies.set("token", data.token);
          Cookies.set("type", data.type);
          Cookies.set("Id", data.userid);
          if (data.type) {
            this.props.history.push("/upload");
          } else {
            this.props.onLogin();
            Exit();
          }
        }
      });
  }
  render() {
    return (
      <div className="login-form" id="unblurred">
        <ExitButton />
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: "30px" }}>
          Log In
        </p>
        <Error err={this.state.error} />
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
          onClick={this.state.valid ? this.Login : ""}
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

export default withRouter(LoginForm);
