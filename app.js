'use strict'
import './global'


/**
 * 路由
 */
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
    Layout,
    Nomatch,
    Home
} = require('./pages')

function onEnter(nextState, replace) {
    let pathname = nextState.location.pathname
    let user = storedb('user').find() ? true : false
    // console.log(storedb('user').find());
    if (!user && pathname !== 'login' && pathname !== '/login') {
        ConfigActions.update('msg', '你还没有登录，请先登录！')
        replace({
            pathname: '/login'
        })
    } else if (user && (pathname == 'login' || pathname == '/login')) {
        replace({
            pathname: '/'
        })
    }
}

const routers = (
    React.createElement(Router, { history: hashHistory },
        React.createElement(Route, { path: "/", component: Layout },
            React.createElement(IndexRoute, { component: Index }),
            React.createElement(Route, { path: "*", component: NoMatch })
        )
    )
)

ReactDOM.render(routers, document.getElementById('app'))