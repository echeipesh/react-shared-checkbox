/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Cursor = require('react-cursor').Cursor;
var _ = require('underscore');


var categoriesJson = require("../json/categories.js");
var layersJson = require("../json/layers.js");






// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var CheckGroup = require("./CheckGroup.jsx");


var SharedCheckboxApp = React.createClass({
  getInitialState: function() {
    return {
      layers: _.chain(layersJson.layers).map(function(tup) { 
        tup['value'] = false; 
        return tup;
      }).indexBy('id').value()
    };
  },

  handleItemClick: function(item) {    
    alert(item.id);
    var l = this.state.layers;
    l[item.id] = item;
    
    this.setState({
      layers: l
    })
  },

  render: function() {
    var rootCursor = Cursor.build(this);

    var self = this;  
    
    var groups = _.chain(categoriesJson.categories).map(function(cat) {
      return {
        "name": cat.name,
        "items": (_.map(cat.layers, function (layerId) { 
          return rootCursor.refine("layers", layerId);          
        }))
      };
    }).value();
    
    var comps = _.map(groups, function(group) {      
      return <CheckGroup name={group.name} items={group.items} itemClick={self.handleItemClick}></CheckGroup>;
    });

    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          {comps}          
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.renderComponent(<SharedCheckboxApp />, document.getElementById('content')); // jshint ignore:line

module.exports = SharedCheckboxApp;
