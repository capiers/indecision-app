console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Lets get started',
    options: ['One', 'Two']
};

// JSX JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

var user = {
    name: 'Craig',
    age: 50,
    location: 'Seattle'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);