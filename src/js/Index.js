import React from 'react';
import ReactDOM from 'react-dom';

class Stack extends React.Component {
  constructor(){
    super();
    this.state = {
      topArray: [
        "hello1",
        "hello2",
        "hello3",
        "hello4"
      ],
      botArray: [
        "hello5",
        "hello6",
        "hello7",
        "hello8"
      ]
    }
  }
  addToTopArray(key){
    let topArray = this.state.topArray;
    let botArray = this.state.botArray;
    let temp = topArray.splice(key, topArray.length)
    botArray = temp.concat(botArray);
    this.setState({
      topArray: topArray,
      botArray: botArray
    });

  }

  addToBotArray(key){
    let topArray = this.state.topArray;
    let botArray = this.state.botArray;
    let temp = botArray.splice(0, key)
    topArray = topArray.concat(temp);
    this.setState({
      topArray: topArray,
      botArray: botArray
    });
  }

  render(){
    console.log(this.state.topArray);
    console.log(this.state.botArray);
    var renderTop = [];
    var renderBot = [];

    for(var i in this.state.topArray){
      renderTop.push(
        <div key={i} style={{color: "red"}} onClick={this.addToTopArray.bind(this, i)}>
        {this.state.topArray[i]}
        </div>);
    }

    for(var i in this.state.botArray){
      if(i == 0){
        renderBot.push(
          <div key={i} style={{color: "#333"}} onClick={this.addToBotArray.bind(this, i)}>
            {this.state.botArray[i]}
          </div>
        );
      }else{
        renderBot.push(
          <div key={i} style={{color: "blue"}} onClick={this.addToBotArray.bind(this, i)}>
            {this.state.botArray[i]}
          </div>
        );
      }
    }

    return(
      <div>
        <div style={{minHeight: "70px"}}>
          {renderTop}
        </div>
        <div style={{minHeight: "70px"}}>
          {renderBot}
        </div>
      </div>
    );
  }
}



ReactDOM.render( <Stack/>, document.getElementById('root'));
