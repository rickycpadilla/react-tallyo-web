var React = require('react');
var ReactDOM = require('react-dom');
var bg = require('./styles').Bg;

var Home = React.createClass({
  render: function(){
    return (
      <div className="container">


        <div className="circle">
          <img className="minus" src="./images/minus.png" />
          <div className="numTexty">
            <div className="num">0</div>
            <div className="texty">tallyo</div>
          </div>
          <img className="plus" src="./images/plus.png" />
        </div>
      </div>
    )
  }
})

module.exports = Home;

ReactDOM.render(
  // routes, document.getElementById('app')
  <Home />, document.getElementById('app')
);
