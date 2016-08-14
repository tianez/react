/**
 * Created by jf on 15/10/27.
 */

class Toast extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.state.timer = setTimeout(() => {
            this.setState({ show: false });
        }, 3000);
    }
    render() {
        const { icon, show, children, iconSize } = this.props
        return (
            React.createElement('div', {
                    className: (icon === 'loading') ? 'weui_loading_toast' : '',
                    style: {
                        display: 'block'
                    }
                },
                React.createElement('div', {
                    className: 'weui_mask_transparent'
                }),
                React.createElement('div', {
                        className: 'weui_toast'
                    },
                    React.createElement('i', {
                        className: 'weui_icon_toast'
                    }),
                    React.createElement('p', {
                        className: 'weui_toast_content'
                    }, ' loading...'))
            )
        )
    }
}

Toast.propTypes = {
    icon: React.PropTypes.string,
    iconSize: React.PropTypes.string,
    show: React.PropTypes.bool
}
Toast.defaultProps = {
    icon: 'toast',
    show: false,
}
module.exports = Toast