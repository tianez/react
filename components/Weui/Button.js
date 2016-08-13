'use strict'

class Button extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('div', {
                    className: 'button_sp_area'
                },
                React.createElement('button', {
                        className: 'weui_btn weui_btn_primary'
                    },
                    '按钮'
                )
            )
        )
    }
}

module.exports = Button