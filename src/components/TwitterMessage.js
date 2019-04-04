import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      tweet: ""
=======
      characters: 0;
>>>>>>> 74f4076933ab7188ca1988df9a1d7df7354affee
    };
  }

  handleTweet = (event) => {
    this.setState({
<<<<<<< HEAD
      tweet: event.target.value
    });
  }

  characters = () => (
    this.props.maxChars - this.state.tweet.length
  )

=======
      characters: this.props.maxChars - event.target.value.length
    });
  }

>>>>>>> 74f4076933ab7188ca1988df9a1d7df7354affee


  render() {
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" value={this.state.tweet} onChange={this.handleTweet}/>
        <small>{this.characters()}</small>
=======
        <input type="text" value={this.state.characters} onChange={this.handleTweet(event)}/>
>>>>>>> 74f4076933ab7188ca1988df9a1d7df7354affee
      </div>
    );
  }
}

export default TwitterMessage;
