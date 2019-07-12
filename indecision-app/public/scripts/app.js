// JSX - JavaScript XML -> JavaScript extension, just like SCSS is for CSS

var template = <p>Hello world!</p>;
var appRoot = document.getElementById('app');

// ReactDOM has pretty much one method that we'll use
// 1st arg = template
// 2nd arg = where to render
ReactDOM.render(template, appRoot);