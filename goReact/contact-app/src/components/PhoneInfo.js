import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing : false,
    name : '',
    phoneNumber :'',
  }

  handleRemove = () =>{
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  handleToggleEdit=()=>{
    const { info, onUpdate } = this.props;

    if(this.state.editing){
      onUpdate(info.id, {
        name : this.state.name,
        phoneNumber : this.state.phoneNumber,
      });
    }
    else{
      this.setState({
        name : info.name,
        phoneNumber : info.phoneNumber,
      })
    }

    this.setState({
      editing : !this.state.editing,
    })
  }
  render() {
    const { name, phoneNumber, id } = this.props.info;
    const {editing} = this.state;
    const style = {
      border : '1px solid black',
      padding : '8px',
      margin : '8px',
    }
    return (
      <div style = {style}>
        {
          editing ? (
            <Fragment>
              <div><input 
              onChange = {this.handleChange} 
              name = 'name'
              value = {this.state.name}/></div>
              <div><input 
              onChange = {this.handleChange} 
              name = 'phoneNumber'
              value = {this.state.phoneNumber}/></div>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <b>{name}</b>
              </div>
              <div>
                <b>{phoneNumber}</b>
              </div>
            </Fragment>
          )
        }
        <button onClick = {this.handleRemove}>삭제</button>
        <button onClick = {this.handleToggleEdit}>
        {editing ? '적용' : '수정'}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;