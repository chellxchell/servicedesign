import React from 'react';
import '../App.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.props.handler(this.props.question,this.state.value);
        event.preventDefault();
        window.location.href = `#section${this.props.sectionNum+1}`;
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          <div className="question">{this.props.question}</div>
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Save"/>
        {/* <AnchorLink href={`#section${this.props.sectionNum+1}`}><input type="submit" value="Save"/></AnchorLink> */}
      </form>
      );
    }
  }

  export default Form;