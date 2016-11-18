// use setState()
const React = require('react')

class YouTubeDebugger extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
      }

    this.changeRes = this.changeRes.bind(this);
    this.changeBit = this.changeBit.bind(this);

    }

  changeRes(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.resolution, {
          resolution: '720p',
        }),
      }),
    });
  }

  changeBit(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    })
  }

  render(){
    return(
    <div>
      <button className="resolution" onClick={this.changeRes}>Change resolution</button>
      <button className="bitrate" onClick={this.changeBit}>Change bitrate</button>
    </div>
      );
  }

}

module.exports = YouTubeDebugger;

