'use strict'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            help: props.help,
            length: props.value.length || 0
        }
    }
    _onChange(e) {
        let value = e.target.value
        this.setState({
            value: value
        })
        if (this.props.onChange) {
            this.props.onChange(this.props.name, value)
        }
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
                                value: this.state.value,
                                onChange: this._onChange.bind(this),
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
    value: '',
    name: 'test',
    placeholder: '请输入qq号'
}
module.exports = Input