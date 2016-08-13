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
        getInitialState: function() {
            this.dX = 0
            this.dY = 0
            return {};
        },
        _onChange: function() {
            let refresh = ConfigStore.get('refresh')
            console.log(refresh + this.props.nn)
            if (refresh) {
                this.refs.reload.style.transition = "all 3s"
                this.refs.reload.style.transform = 'translateX(0)'
                this.refs.reload.innerHTML = '下拉刷新'
                this.refs.content.style.transition = "all 3s"
                this.refs.content.style.transform = 'translateX(0)'
            }
        },
        componentDidMount: function() {
            ConfigStore.addChangeListener(this._onChange)
        },
        componentWillUnmount: function() {
            console.log('remov' + this.props.nn);
            ConfigStore.removeChangeListener(this._onChange)
        },
        onTouchStart: function(e) {
            this.refs.content.style.transition = "all 0s"
            this.refs.reload.style.transition = "all 0s"
            let point = e.touches ? e.touches[0] : e;
            this.startX = point.pageX;
            this.startY = point.pageY;
        },
        onTouchMove: function(e) {
            e.preventDefault();
            let point = e.touches ? e.touches[0] : e;
            this.endX = point.pageX;
            this.endY = point.pageY;
            this.deltaX = point.pageX - this.startX;
            this.deltaY = point.pageY - this.startY;
            let mY = this.deltaY + this.dY
            this.refs.content.style.transform = 'translateY(' + mY + 'px)'
            this.refs.reload.style.transform = 'translateY(' + (mY / 2) + 'px)'
        },
        onTouchEnd: function(e) {
            if (Math.abs(this.deltaY) < 40) {
                this.refs.content.style.transition = "all .3s"
                this.refs.content.style.transform = 'translateY(0)'
                this.refs.reload.style.transition = "all .3s"
                this.refs.reload.style.transform = 'translateY(0)'
                return
            }
            if (!this.endY) {
                return
            }
            ConfigActions.update('refresh', false)
            this.refs.reload.innerHTML = '加载中'
            this.dY = 48
            this.refs.content.style.transition = "all .3s"
            this.refs.content.style.transform = 'translateY(' + this.dY + 'px)'
            this.refs.reload.style.transition = "all .3s"
            this.refs.reload.style.transform = 'translateY(' + this.dY + 'px)'
            this.endY = null
            if (this.props.reLoad) {
                this.props.reLoad()
            }
        },
        render: function() {
            console.log(this.props.nn + 1);
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
                        },
                        '下拉刷新'
                        // React.createElement(Reload)
                    ),
                    React.createElement('section', {
                            id: 'content',
                            className: 'content',
                            ref: 'content',
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
    // Content.defaultProps = {
    //     title: '头部'
    // }
module.exports = Content