// use setState()
const React = require('react');

class DigitalClicker extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0,
    };

    this.clicker = this.clicker.bind(this)

  }

  clicker(){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <button onClick={this.clicker}>{this.state.timesClicked}</button>
      )
  }
}

module.exports = DigitalClicker;
