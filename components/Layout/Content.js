'use strict'

const classNames = require('classNames')
const Reload = require('./Reload')
const {
    Link
} = ReactRouter
class Content extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.dX = 0
        this.dY = 0
    }
    _onChange() {
        let refresh = ConfigStore.get('refresh')
        console.log(refresh)
        this.setState({
            refresh: refresh
        })
    }
    componentDidMount() {
        ConfigStore.addChangeListener(this._onChange.bind(this))
    }
    componentWillUnmount() {
        ConfigStore.removeChangeListener(this._onChange.bind(this))
    }
    onTouchStart(e) {

        this.refs.content.style.transition = "all 0s"
        this.refs.reload.style.transition = "all 0s"
        let point = e.touches ? e.touches[0] : e;
        this.startX = point.pageX;
        this.startY = point.pageY;
    }
    onTouchMove(e) {
        e.preventDefault();
        let point = e.touches ? e.touches[0] : e;
        this.endX = point.pageX;
        this.endY = point.pageY;
        this.deltaX = point.pageX - this.startX;
        this.deltaY = point.pageY - this.startY;
        let mY = this.deltaY + this.dY
        this.refs.content.style.transform = 'translateY(' + mY + 'px)'
        this.refs.reload.style.transform = 'translateY(' + (mY / 2) + 'px)'
    }
    onTouchEnd(e) {
        // if (Math.abs(this.deltaY) > 100) {
        //     ConfigActions.update('refresh', false)
        // }
        ConfigActions.update('refresh', false)
        this.dY = 48
        this.refs.content.style.transition = "all .3s"
        this.refs.content.style.transform = 'translateY(' + this.dY + 'px)'
        this.refs.reload.style.transition = "all .3s"
        this.refs.reload.style.transform = 'translateY(' + this.dY + 'px)'
        if (this.props.reLoad) {
            this.props.reLoad()
        }
    }
    render() {
        let refresh = this.state.refresh
        let style
        if (refresh) {
            style = {
                transition: "all .3s",
                transform: 'translateY(0)'
            }
        } else {
            style = {
                transition: "all 0",
            }
        }
        return (
            React.createElement('section', {
                    id: 'section',
                    className: 'section',
                    onTouchStart: this.onTouchStart.bind(this),
                    onTouchMove: this.onTouchMove.bind(this),
                    onTouchEnd: this.onTouchEnd.bind(this),
                    // onTouchCancel: this.onTouchCancel.bind(this),
                },
                React.createElement('section', {
                        ref: 'reload',
                        id: 'reload',
                        className: 'reload',
                        style: style
                    },
                    refresh ? '下拉刷新' : '加载中...'
                    // React.createElement(Reload)
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
                        to: 'post',
                        activeClassName: 'active'
                    }, 'post'),
                    this.props.children
                )
            )
        )
    }
}
Content.defaultProps = {
    title: '头部'
}
module.exports = Content