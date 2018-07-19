import React, { Component } from 'react';
import './style.css';
import signup from '../../services/signup';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      check_password: ''
    }
  }

  onInputCheck = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  validatePasswords(password, verify_password) {
    if (password === verify_password) {
      return true
    } else {
      alert('Tu password no coincide');
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.validatePasswords(this.state.password, this.state.check_password)) {
      //Hacer Peticion post al backend 
      signup(this.state).then((response) => {
        console.log(response.data)
        alert('Felicidades Nuevo usuario registrado')
      }).catch((err) => {
        console.log(err);
        alert('Hubo un problema')
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center centered-form ">
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2">
            <div className="panel panel-default container">
              <div className="panel-heading">
                <h3 className="panel-title">Signup</h3>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={this.onFormSubmit}>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="firstname" id="firstname" className="form-control input-sm" placeholder="First Name" value={this.state.firstname}
                          onChange={this.onInputCheck} />
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="lastname" id="name" className="form-control input-sm" placeholder="Last Name" value={this.state.lastname} onChange={this.onInputCheck} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" value={this.state.email} onChange={this.onInputCheck} />
                  </div>

                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" value={this.state.password} onChange={this.onInputCheck} />
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="password" name="check_password" id="check_password" className="form-control input-sm" placeholder="Confirm Password" value={this.state.check_password} onChange={this.onInputCheck} />
                      </div>
                    </div>
                  </div>

                  <input type="submit" value="Register" className="btn btn-info btn-block" />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}