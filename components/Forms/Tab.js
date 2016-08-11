'use strict'

class Tab extends React.Component {
    constructor() {
        super()
        this.state = ({
            dotstyle: {
                top: 0,
                left: 0,
            },
            dot: 1
        })
        this.autoplayTimer = null
    }
    componentDidMount() {
        // this.autoplay()
    }
    autoplay() {
        clearTimeout(this.autoplayTimer);
        let dot = this.state.dot
        this.autoplayTimer = setInterval(function () {
            let active = document.getElementsByClassName('active')
            let pre = document.getElementsByClassName('pre')
            let next = document.getElementsByClassName('next')
        }, 1000);
    }
    _onClick(index) {
        this.setState({
            dot: index
        })
    }
    onMouseDown(e) {
        console.log('鼠标按下了！')
        e.target.style.transition = "all 0s"
        console.log(e.clientY)
        console.log(e.target.getBoundingClientRect().top)
        console.log(e)
    }
    onMouseMove(e) {
        console.log('鼠标移动了！')
        console.log(e.clientX)
        console.log(e.target.getBoundingClientRect().left)
        console.log(e)
    }
    onDragStart(e) {
        console.log('开始拖动')
        // alert('开始拖动')
        // console.log(e.clientX)
        console.log(e.target.getBoundingClientRect().left)
        this.setState({
            x: e.clientX
        })
    }
    onDrag(e) {
        console.log('拖动')
        console.log(this.state.x)
        console.log(e.clientX)
        alert(e.clientX)
        if (e.clientX == 0) {
            return
        }
        let left = -(this.state.x - e.clientX) + 'px'
        alert(left)
        console.log(left)
        e.target.style.left = left
    }
    onDragOver(e) {
        console.log('拖动结束')
        let width = e.target.getBoundingClientRect().width
        let w = width / 2
        let left = this.state.x - e.clientX
        console.log(left)
        if (left > w) {
            e.target.style.transition = "all .6s"
            console.log(12121)
            e.target.style.left = (-width + 'px')
        } else if (-left > w) {
            e.target.style.transition = "all .6s"
            console.log(99)
            e.target.style.left = (width + 'px')
        } else {
            e.target.style.transition = "all .6s"
            e.target.style.left = 0
        }
        console.log(e.target.getBoundingClientRect().width)
    }
    onTouchStart(e) {
        this.setState({
            mx: e.touches[0].pageX
        })
    }
    onTouchMove(e) {
        // alert(e.touches[0].pageX)
    }
    onTouchEnd(e) {
        alert(12)
        alert(e.TouchList)
        alert(123)
    }
    onTouchCancel(e) {
        alert(1)
    }
    render() {
        let dot = this.state.dot
        let childs = []
        if (this.props.children) {
            if (this.props.children.length) {
                childs = this.props.children
            } else {
                childs.push(this.props.children)
            }
        }
        return (
            React.createElement('div', {
                className: 'tab'
            },
                React.createElement('div', {
                    className: 'tab-cards'
                },
                    childs.map(function (child, index) {
                        let active = ''
                        if (index == dot) {
                            active = ' active'
                        } else if (index == dot - 1) {
                            active = ' pre'
                        } else if (index == dot - 1) {
                            active = ' next'
                        }
                        return React.createElement('div', {
                            key: index,
                            onClick: this._onClick.bind(this, index),
                            className: 'tab-card' + active
                        },
                            child.props.title
                        )
                    }.bind(this)),
                    React.createElement('div', {
                        className: 'tab-card',
                        style: {
                            width: '5rem',
                        }
                    })
                ),
                React.createElement('div', {
                    className: 'tab-cards2'
                },
                    childs.map(function (child, index) {
                        let cur = ''
                        if (index == dot) {
                            cur = ' active'
                        } else if (index == dot - 1) {
                            cur = ' pre'
                        } else if (index == dot - 1) {
                            cur = ' next'
                        }
                        return React.createElement('div', {
                            key: index,
                            draggable: true,
                            className: 'tab-card2 ' + cur,
                            onMouseDown: this.onMouseDown.bind(this),
                            // onMouseMove: this.onMouseMove.bind(this),
                            onDragStart: this.onDragStart.bind(this),
                            onDrag: this.onDrag.bind(this),
                            onDragOver: this.onDragOver.bind(this),

                            onTouchStart: this.onTouchStart.bind(this),
                            onTouchMove: this.onTouchMove.bind(this),
                            onTouchEnd: this.onTouchEnd.bind(this),
                            onTouchCancel: this.onTouchCancel.bind(this),
                        },
                            child.props.children
                        )
                    }.bind(this))
                )
            )
        )
    }
}

Tab.defaultProps = {
    value: '保存'
}

module.exports = Tab
