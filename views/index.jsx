var React = require('react');
var ReactDOM = require('react-dom');

var Machine = require('./machine.jsx');

var Index = React.createClass({
    displayName: 'Index',
    render: function(){
        return (
            <div>
                <Machine></Machine>
            </div>
        );
    }
});

var app = document.createElement('div');
ReactDOM.render(<Index></Index>, app);
document.body.appendChild(app);
document.title = 'MIPS Simulator';
document.body.style.margin = 0;