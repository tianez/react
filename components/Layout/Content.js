'use strict'

const classNames = require('classNames')
const Reload = require('./Reload')
const {
    Grid
} = require('../Weui')
    // class Content extends React.Component {
const Content = React.createClass({
    // constructor() {
    //     super()
    //     this.state = {}
    //     this.dX = 0
    //     this.dY = 0
    // }
    getDefaultProps: function() {
        return {
            time: ' .3s',
        };
    },
    getInitialState: function() {
        this.dX = 0
        this.dY = 0
        this.scroll = true
        return {
            loaded: true
        };
    },
    componentDidMount: function() {
        this.refs.content.style.minHeight = (window.screen.height - 48 * 2) + 'px'
    },
    onTouchStart: function(e) {
        this.refs.content.style.transitionDuration = "0s"
        this.refs.reload.style.transitionDuration = "0s"
        let point = e.touches ? e.touches[0] : e;
        this.startX = point.pageX;
        this.startY = point.pageY;
    },
    onTouchMove: function(e) {
        let scrollTop = document.body.scrollTop
        if (scrollTop != 0 && this.scroll) {
            return
        }
        this.scroll = false
        let point = e.touches ? e.touches[0] : e;
        this.endX = point.pageX;
        this.endY = point.pageY;
        this.deltaX = point.pageX - this.startX;
        this.deltaY = point.pageY - this.startY;
        if (this.deltaY < 40) {
            return
        }
        let dY = 48
        let mcontent = this.deltaY - scrollTop
        let mreload = this.deltaY + dY - scrollTop
        document.body.scrollTop = 0
        let refresh = ConfigStore.get('refresh')
        if (!refresh) {
            mcontent = mcontent + dY
            mreload = mreload + dY
        }
        this.refs.content.style.transform = 'translateY(' + mcontent + 'px)'
        this.refs.reload.style.transform = 'translateY(' + (mreload / 2) + 'px)'
    },
    onTouchEnd: function(e) {
        // document.body.scrollTop = 0
        this.scroll = true
        if (!this.endY) {
            return
        }
        let refresh = ConfigStore.get('refresh')
        this.refs.content.style.transitionDuration = this.props.time
        this.refs.reload.style.transitionDuration = this.props.time
        if ((this.deltaY < 0) || (this.deltaY < 40 && refresh)) {
            this.refs.content.style.transform = 'translateY(0)'
            this.refs.reload.style.transform = 'translateY(0)'
            return
        }
        this.refs.content.style.transform = 'translateY(48px)'
        this.refs.reload.style.transform = 'translateY(48px)'
        if (this.props.reLoad && refresh) {
            this.endY = null
            ConfigActions.update('refresh', false)
            this.setState({
                loaded: false
            })
            this.props.reLoad()
        }
    },
    onTouchCancel: function(e) {
        this.onTouchEnd
    },
    render: function() {
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
                    onTouchCancel: this.onTouchCancel,
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
                        style: style,
                        height: this.props.contentheight
                    },
                    React.createElement(Grid),
                    this.props.children
                )
            )
        )
    }
})
module.exports = Content