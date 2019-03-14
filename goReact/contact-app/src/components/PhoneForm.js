import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name : '',
    phoneNumber : '',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onCreate({
      name : this.state.name,
      phoneNumber : this.state.phoneNumber,
    });
    this.setState({
      name : '',
      phoneNumber :'',
    })
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input
         name ="name"
         placeholder="name"
         onChange={this.handleChange} 
         value = {this.state.name}/>
        <input
         name = "phoneNumber"
         placeholder="phoneNumber" 
         onChange={this.handleChange} 
         value={this.state.phoneNumber} />
         <button type ="submit">
          등록
         </button>
        
      </form>
    );
  }
}

export default PhoneForm;