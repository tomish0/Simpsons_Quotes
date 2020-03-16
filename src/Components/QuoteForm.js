import React, { Component } from "react";
import "../Styles/QuoteForm.css";

class QuoteForm extends Component {
  state = {
    character: ""
  };

  
  render() {
    return (
      <form className="QuoteForm">
        <label htmlFor="character">Character:</label>
        <input
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={event => {
            if (event.target.value.length > 20) {
              return;
            }
            this.setState({ character: event.target.value });
          }}
        />
        <p>
            Characters remaining: {20 - this.state.character.length}
        </p>
        <p>
          {this.state.character.length < 20
            ? this.state.character
            : "Too many characters"}
        </p>
      </form>
    );
  }
}

export default QuoteForm;
