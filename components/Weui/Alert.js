'use strict'

class Alert extends React.Component {
    constructor() {
        super()
        this.state = ConfigStore.get('alert')
    }
    componentWillReceiveProps(nextProps, nextState) {
        this.setState(ConfigStore.get('alert'))
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state == nextState) {
            return false
        }
        return true
    }
    _onClick() {
        ConfigActions.update('alert', { show: false })
    }
    render() {
        return (
            React.createElement('div', {
                    className: 'weui_dialog_alert',
                    style: {
                        display: this.state.show ? 'block' : 'none'
                    }
                },
                React.createElement('div', {
                    className: 'weui_mask'
                }),
                React.createElement('div', {
                        className: 'weui_dialog'
                    },
                    React.createElement('div', {
                            className: 'weui_dialog_hd'
                        },
                        React.createElement('strong', {
                                className: 'weui_dialog_title'
                            },
                            this.state.title ? this.state.title : this.props.title
                        )
                    ),
                    React.createElement('div', {
                            className: 'weui_dialog_bd'
                        },
                        this.state.content ? this.state.content : this.props.content
                    ),
                    React.createElement('div', {
                            className: 'weui_dialog_ft'
                        },
                        React.createElement('a', {
                                className: 'weui_btn_dialog primary',
                                onClick: this._onClick.bind(this)
                            },
                            this.state.action ? this.state.action : this.props.action
                        )
                    )
                )
            )
        )
    }
}
Alert.defaultProps = {
    show: false,
    title: '弹窗标题',
    content: '弹窗内容，告知当前页面信息等',
    action: '确定'
}

module.exports = Alert