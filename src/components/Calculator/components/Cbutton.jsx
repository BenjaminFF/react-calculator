import React, { Component } from 'react';
import './Cbutton.css'

class Cbutton extends Component {
  constructor(props){
    super(props);
    this.init();
  }

  init(){
    
  }
    
    render() {
       return(
        <div onClick={()=>this.props.onButtonClick(this.props.markup)}>
          {this.props.text}
        </div>
    )
  }
}

export default Cbutton; // Don’t forget to use export default!