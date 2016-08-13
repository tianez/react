'use strict'

class Switch extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('section', {},
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 开关'),
                React.createElement('div', {
                        className: 'weui_cells weui_cells_form'
                    },
                    React.createElement('div', {
                            className: 'weui_cell weui_cell_switch'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_hd weui_cell_primary'
                            },
                            '声音'
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('input', {
                                className: 'weui_switch',
                                type: 'checkbox',
                            })
                        )
                    )
                )
            )
        )
    }
}

module.exports = Switch