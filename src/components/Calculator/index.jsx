/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './index.css'

class Calculator extends Component {
  constructor(props){
    super(props);
    let buttons=[
      {mark:'CE',type:'functor'}, {mark:'CE',type:'functor'}, {mark:'DEL',type:'functor'}, {mark:'÷',type:'operator'},
      {mark:'7',type:'number'}, {mark:'8',type:'number'}, {mark:'9',type:'number'}, {mark:'x',type:'operator'},
      {mark:'4',type:'number'}, {mark:'5',type:'number'}, {mark:'6',type:'number'}, {mark:'-',type:'operator'},
      {mark:'1',type:'number'}, {mark:'2',type:'number'}, {mark:'3',type:'number'}, {mark:'+',type:'operator'},
      {mark:'±',type:'operator'}, {mark:'0',type:'number'}, {mark:'.',type:'number'}, {mark:'=',type:'operator'}
    ];
    this.state={
      buttons
    }
  }
    render() {
      
       return(
        <div className="Calculator">
          <div className="output"></div>
          <div className="button-container">
            {this.state.buttons.map((button)=>
              <div className={"button "+(button.type==='number'?'is_number':'')} key={button.mark}>{button.mark}</div>
            )}
          </div>
        </div>
    )
  }
}

export default Calculator; // Don’t forget to use export default!