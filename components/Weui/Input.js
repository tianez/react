'use strict'

class Input extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('section', {},
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 表单'),
                React.createElement('div', {
                        className: 'weui_cells weui_cells_form'
                    },
                    React.createElement('div', {
                            className: 'weui_cell'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_hd'
                            },
                            React.createElement('label', {
                                className: 'weui_label weui_cell_hd'
                            }, ' qq')
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('input', {
                                className: 'weui_input',
                                type: 'text',
                                placeholder: this.props.placeholder
                            })
                        )
                    )
                )
            )
        )
    }
}
Input.defaultProps = {
    placeholder: '请输入qq号'
}
module.exports = Input