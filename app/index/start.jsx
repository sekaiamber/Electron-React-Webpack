import {render} from 'react-dom';

let React = require('react');
let $ = require('jquery');

require('./index.scss');

render(<div>Hello world!</div>, document.getElementById("container"));
