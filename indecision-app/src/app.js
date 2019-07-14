// JSX - JavaScript XML -> JavaScript extension, just like SCSS is for CSS

// a tempalte must have a single root element (div in our case)
// the round brackets are just for clarity

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item1</li>
            <li>Item2</li>
        </ol>
    </div>
);

const user = {
    name: 'Mahad',
    age: 23,
    location: 'Islamabad'
};

function getLocation(location){
    if (location) {
        return  <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
        
const appRoot = document.getElementById('app');

// ReactDOM has pretty much one method that we'll use
// 1st arg = template
// 2nd arg = where to render
ReactDOM.render(template, appRoot);