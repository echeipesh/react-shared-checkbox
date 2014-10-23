/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var _ = require('underscore');

var CheckGroup = React.createClass({
  getGroupState: function () {
    var vals = _.map(this.props.items, function(cur) {
      return cur.refine('value').value;
    });
    var allTrue  =   _.reduce(vals, function(a,b) {return a &&  b});
    var allFalse = ! _.reduce(vals, function(a,b) {return a || b});

    if      (allFalse) return 0;
    else if (allTrue)  return 1;
    else               return 2;
  },

  getGroupCheck: function() {
    var src;
    switch(this.getGroupState()) {
      case 0:
        src = "images/check-off.png";
        break;
      case 1:
        src = "images/check-on.png";
        break;
      case 2: 
        src = "images/check-dash.png";
        break;
    }
    return <img className='checkbox' src={src}></img>;
  },

  getItemCheck: function(state) {
    var src;
    if (state)  src = "images/check-on.png";
    else        src = "images/check-off.png";
    return <img className='checkbox' src={src}></img>;
  },

  handleClick: function(item) {
    var val = item.refine('value');
    val.set(! val.value);
  },

  handleGroupClick: function() {
    var target = ! this.getGroupState();
   
    _.each(this.props.items, function(cur) {
      cur.refine('value').set(target);
    });
  },

  render: function() {
    var self = this;
    return (
      <div>
        <div onClick={this.handleGroupClick}>
        {
          this.getGroupCheck( _.map(this.props.items, function(cur){ 
          return cur.refine('value').value; }) ) 
        }
        </div>
        {this.props.name}
        <hr/>
        { 
          _.map(this.props.items, function(itemCursor){
            var item = itemCursor.value;
            return <div onClick={_.partial(self.handleClick, itemCursor)}>{self.getItemCheck(item.value)}{item.name}</div>;          
          }) 
        }
        <hr/>
      </div>
    );
  }
});

module.exports = CheckGroup;