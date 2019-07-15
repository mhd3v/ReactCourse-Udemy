// JSX - JavaScript XML -> JavaScript extension, just like SCSS is for CSS

// a tempalte must have a single root element (div in our case)
// the round brackets are just for clarity

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements['option'].value;
    if (option) {
        app.options.push(option);
        e.target.elements['option'].value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                { app.options.map((option) => <li key={option}>{option}</li>) }
            </ol>
            {/* dont use onFormSubmit() because in that case return value will be set 
            inside the exp */}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();