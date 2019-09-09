/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './index.css'

class Calculator extends Component {
  constructor(props){
    super(props);
    let buttons=[
      {mark:'CE',type:'functor'}, {mark:'C',type:'functor'}, {mark:'DEL',type:'functor'}, {mark:'/',type:'operator'},
      {mark:'7',type:'number'}, {mark:'8',type:'number'}, {mark:'9',type:'number'}, {mark:'*',type:'operator'},
      {mark:'4',type:'number'}, {mark:'5',type:'number'}, {mark:'6',type:'number'}, {mark:'-',type:'operator'},
      {mark:'1',type:'number'}, {mark:'2',type:'number'}, {mark:'3',type:'number'}, {mark:'+',type:'operator'},
      {mark:'±',type:'operator'}, {mark:'0',type:'number'}, {mark:'.',type:'dot'}, {mark:'=',type:'operator'}
    ];
    this.state={
      buttons,
      value:'0',
      input_arr:[{mark:'0',type:'number'}]
    }
    this.handleButtonClick=this.handleButtonClick.bind(this);
  }


  handleButtonClick(button){
    let input_arr=this.state.input_arr.slice();
    let lastInput=input_arr[input_arr.length-1];
    if(button.type==='functor'){
      let value='';
      if(button.mark==='C'){
        input_arr=[{mark:'0',type:'number'}];
        value=0;
      }

      if(button.mark==='CE'&&lastInput.type==='number'){
        lastInput.mark='0';
        input_arr.forEach((input)=>{value+=input.mark});
      }

      if(button.mark==='DEL'){
        if(lastInput.type==='operator'){
          input_arr.pop();
        }else{
          console.log(lastInput.mark.length);
          lastInput.mark.length===1?lastInput.mark='0':lastInput.mark=lastInput.mark.substring(0,lastInput.mark.length-1);
          input_arr.forEach((input)=>{value+=input.mark});
        }
      }

      this.setState({
        value,
        input_arr
      })

      return;
    }
    if(button.mark==='='){
      let expression='';
      input_arr.forEach((input,index)=>{
        //expression末尾只能为数字
        if(index!==input_arr.length-1||input_arr[index].type==='number'){
          expression+=input.mark;
        }
      })
      console.log(expression);
      // eslint-disable-next-line no-eval
      let value=eval(expression);
      this.setState({
        value,
        input_arr:[{mark:value+'',type:'number'}]
      })
    }else {
      if(button.type==='number'){
        if(lastInput.type==='number'){
          (lastInput.mark==='0')?lastInput.mark=button.mark:lastInput.mark+=button.mark;
        }else{
          input_arr.push({...button});
        }
      }else if(button.type==='dot'){
        if(lastInput.type==='operator'){
          input_arr.push({mark:0+'.',type:'number'});
        }else{
          if(lastInput.mark.indexOf('.')===-1){
            lastInput.mark+='.';
          }
        }
      }else if(button.type==='operator'){
        if(lastInput.type==='operator'){
          lastInput.mark=button.mark;
        }else{
          if(lastInput.mark.indexOf('.')===lastInput.length){
            lastInput.mark=lastInput.mark.substring(0,lastInput.mark.length-1);
          }
          input_arr.push({...button});
        }
      }
      let value='';
      input_arr.forEach((input)=>value+=input.mark);
      this.setState({
        value,
        input_arr
      })
    }
  }

  render() {
       return(
        <div className="Calculator">
          <div className="output">{this.state.value}</div>
          <div className="button-container">
            {this.state.buttons.map((button,index)=>
              <div className={"button "+(button.type==='number'?'is_number':'')} key={index} onClick={this.handleButtonClick.bind(this,button)}>{button.mark}</div>
            )}
          </div>
        </div>
    )
  }
}

export default Calculator; // Don’t forget to use export default!