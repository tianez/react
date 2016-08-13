'use strict'

const classNames = require('classNames')
const Reload = require('./Reload')
const {
    Link
} = ReactRouter

// class Content extends React.Component {
const Content = React.createClass({
    // constructor() {
    //     super()
    //     this.state = {}
    //     this.dX = 0
    //     this.dY = 0
    // }
    getDefaultProps: function () {
        return {
            time: ' .3s'
        };
    },
    getInitialState: function () {
        this.dX = 0
        this.dY = 0
        return {
            loaded: true
        };
    },
    onTouchStart: function (e) {
        this.refs.content.style.transitionDuration = "0s"
        this.refs.reload.style.transitionDuration = "0s"
        let point = e.touches ? e.touches[0] : e;
        this.startX = point.pageX;
        this.startY = point.pageY;
    },
    onTouchMove: function (e) {
        e.preventDefault();
        let point = e.touches ? e.touches[0] : e;
        this.endX = point.pageX;
        this.endY = point.pageY;
        this.deltaX = point.pageX - this.startX;
        this.deltaY = point.pageY - this.startY;
        let dY = 48
        let mcontent = this.deltaY
        let mreload = this.deltaY + dY
        let refresh = ConfigStore.get('refresh')
        if (!refresh) {
            mcontent = mcontent + dY
            mreload = mreload + dY
        }
        this.refs.content.style.transform = 'translateY(' + mcontent + 'px)'
        this.refs.reload.style.transform = 'translateY(' + (mreload / 2) + 'px)'
    },
    onTouchEnd: function (e) {
        let refresh = ConfigStore.get('refresh')
        this.refs.content.style.transitionDuration = this.props.time
        this.refs.reload.style.transitionDuration = this.props.time
        if (this.deltaY < 0) {
            this.refs.content.style.transform = 'translateY(0)'
            this.refs.reload.style.transform = 'translateY(0)'
            return
        }
        if (Math.abs(this.deltaY) < 40 && refresh) {
            return
        }
        this.refs.content.style.transform = 'translateY(48px)'
        this.refs.reload.style.transform = 'translateY(48px)'
        if (this.props.reLoad && refresh) {
            ConfigActions.update('refresh', false)
            this.setState({
                loaded: false
            })
            this.props.reLoad()
        }
    },
    render: function () {
        let refresh = ConfigStore.get('refresh')
        let style = {}
        if (refresh) {
            style = {
                transitionDuration: this.props.time,
                transform: 'translateY(0)'
            }
        } else {
            style = {
                transitionDuration: this.props.time,
                transform: 'translateY(48px)'
            }
        }
        return (
            React.createElement('section', {
                id: 'section',
                className: 'section',
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                // onTouchCancel: this.onTouchCancel.bind(this),
            },
                React.createElement('section', {
                    ref: 'reload',
                    id: 'reload',
                    className: 'reload',
                    style: style
                },
                    React.createElement(Reload, { refresh: refresh })
                ),
                React.createElement('section', {
                    id: 'content',
                    className: 'content',
                    ref: 'content',
                    style: style
                },
                    React.createElement(Link, {
                        to: '/',
                        activeClassName: 'active'
                    }, '首页'),
                    React.createElement(Link, {
                        to: '/post',
                        activeClassName: 'active'
                    }, 'post'),
                    React.createElement(Link, {
                        to: '/post2',
                        activeClassName: 'active'
                    }, 'post2'),
                    this.props.children
                )
            )
        )
    }
})
module.exports = Content