'use strict';

import 'babel-polyfill';
import React    from 'react';
import ReactDOM from 'react-dom';
import {Main}   from './components/main';

ReactDOM.render(
    <Main message="Hello Reactron" />,
    document.getElementById('app')
);
