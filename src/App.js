import React from 'react';
import './App.scss';
import Form from './components/Form';
import Answers from './components/Answers';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: new Map(),
      viewAnswers: false
    };
    this.handler = this.handler.bind(this)
    this.formatMap = this.formatMap.bind(this)
  }

  handler(key,value) {
    console.log("yes");
    this.state.map.set(key,value);
    console.log(this.state.map)
  }

  formatMap(){
    this.setState({viewAnswers: !this.state.viewAnswers});
  }

  render(){
  let allSections = [];
  let questions = [
    "What are your main concerns regarding my technology usage?",
    "Why do I need to limit my device usage?",
    "What would be your ideal scenario in regards to technology use?",
    "If your parents track you - why do you feel the need to track me?",
    "What can I do to make sure I am safe both online and offline?",
    "What would make you feel secure about my technology usage?",
    "What is your opinion on social media usage?",
    "What do you think is a reasonable amount of technology usage in a day?",
    "Why do you think we are having this conversation",
    "How do I make sure you are safe?",
    "Besides schoolwork, what do you use your devices for?",
    "Do you have any concerns about technology usage? Specifically, yours?",
    "Do you think that you are being safe and careful on social media?"
  ];
  
  let sectionNum = 2;
  for (let i in questions){
    if (i==0){
      allSections.push(
        <section id={`section${sectionNum}`}>
          <div className="question">Questions for Children to Ask</div>
          <AnchorLink href={`#section${sectionNum+1}`}><button>Go</button></AnchorLink>
        </section>
      )
      ++sectionNum;
    }
    if (i==7){
      allSections.push(
        <section id={`section${sectionNum}`}>
          <div className="question">Questions for Parents to Ask</div>
          <AnchorLink href={`#section${sectionNum+1}`}><button>Go</button></AnchorLink>
        </section>
      )
      ++sectionNum;
    }
    allSections.push(
      <section id={`section${sectionNum}`}>
        <Form question={questions[i]} handler={this.handler} sectionNum={sectionNum} />
       </section>
    )
    ++sectionNum;
  }

  let answers;
  if (this.state.viewAnswers){
    answers = (<Answers data={this.state.map} />);
  }

  return (
    <div className="root">
      <section id="section1">
        <div className="question">How would you like to save your responses?</div>
        <div>
          <AnchorLink href='#section2'><button>Type</button></AnchorLink>
          <button>Record</button>
          <button>None</button>
        </div>
      </section>
      {allSections}
      <section id={`section${sectionNum}`}>
        <button onClick={this.formatMap}>{this.state.viewAnswers? "Hide Answers" : "View Answers"}</button>
        {answers}
      </section>
      <section id={`section${sectionNum+1}`}>
        <form onSubmit={this.handleSubmit}>
        <label>
          <div className="question">Thank you for having this dialogue! Enter your emails to save your responses.</div>
          <textarea type="text"/>
        </label>
        <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
    }
}

export default App;