import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0;

  state = {
    information : [],

  }

  handleCreate = (data) =>{
    const { information } = this.state;
    this.setState({
      information : information.concat({
        ...data,
        id : this.id++
      }),
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) =>{
    const { information } = this.state;

    this.setState({
      information : information.map(
        info =>{
          if(info.id === id){
            return {
              id,
              ...data
            }
          }
          return info;
      }
      )
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
        onRemove = {this.handleRemove}
        onUpdate = {this.handleUpdate}
        data = {this.state.information} />
      </div>
    );
  }
}

export default App;
