'use strict';

// JSX - JavaScript XML -> JavaScript extension, just like SCSS is for CSS

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

// ReactDOM has pretty much one method that we'll use
// 1st arg = template
// 2nd arg = where to render
ReactDOM.render(template, appRoot);
