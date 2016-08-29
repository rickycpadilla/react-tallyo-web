var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
  getInitialState : function() {
    return {
      counter : 0
    };
  },
  plusClicked: function(){
    this.setState({
      counter: this.state.counter + 1
    });
  },
  minusClicked: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },
  render: function(){
    return (
        <div className="circle">
          <img className="minus" onClick={this.minusClicked} src="images/minus.png" />
          <div className="numTexty">
            <div className="num">{this.state.counter}</div>
            <input type="text" className="texty" placeholder="what are you counting?"/>
          </div>
          <img className="plus" onClick={this.plusClicked} src="images/plus.png" />
        </div>
      )
  }
});

module.exports = Home;

ReactDOM.render(
  <Home />, document.getElementById('app')
);
