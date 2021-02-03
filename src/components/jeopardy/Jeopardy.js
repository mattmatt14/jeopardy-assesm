import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: "",
      
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the scr

updateScore = (event) => {
    event.preventDefault();
    let userAnswer = this.state.answer.toLowerCase();
    let dataAnswer = this.state.data.answer.toLowerCase();

    if (dataAnswer === userAnswer) {
        this.setState((state, props) => ({
            score: state.score + state.data.value,
            answer: ""
        }));

    } else {
        this.setState((state, props) => ({
            score: state.score - state.data.value,
            answer: ""
        }));
    }
    this.getNewQuestion();
}



    handleChange = (event) => {
        let answer = event.target.value;
        this.setState({
            answer

        })
    }

  render() {
      console.log(this.state.data); let category = this.state.data.category && this.state.data.category.title;
    return (
      <Display
      answer ={this.state.answer}
      handleChange ={this.handleChange}
      updateScore ={this.updateScore}
     score ={this.state.score}
    question  ={this.state.data.question}
     category ={category}
    value  ={this.state.data.value} />
    
      
    );
  }
}
export default Jeopardy; 