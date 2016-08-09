'use strict'
// const React = require('react');
// const ReactDOM = require('react-dom');
// const ReactRouter = require('react-router');
// import './less/style.less' //webpack编译时导入

const {
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Redirect,
    hashHistory,
    browserHistory
} = ReactRouter
const {
    Form,
    Input,
    Textarea,
    Editer,
    Radio,
    Checkbox,
    Upload,
    Range,
    Button,
    Hidden
} = require('./components/forms')
class A extends React.Component {
    render() {
        return (
            React.createElement('li', {
                className: 'pure-menu-item'
            },
                'adsdsdsds'
            )
        )
    }
}

class Nomatch extends React.Component {
    render() {
        return (
            React.createElement('li', {
                className: 'pure-menu-item'
            },
                'Nomatch'
            )
        )
    }
}

const routers = (
    React.createElement(Router, {
        history: hashHistory
    },
        React.createElement(Route, {
            path: "/",
            component: A
        }),
        React.createElement(Route, {
            path: "*",
            component: Nomatch
        })
    )
)

ReactDOM.render(routers, document.getElementById('app'))
