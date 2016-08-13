'use strict'

class Select2 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('section', {},
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 选择'),
                React.createElement('div', {
                        className: 'weui_cells'
                    },
                    React.createElement('div', {
                            className: 'weui_cell weui_cell_select'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('select', {
                                    className: 'weui_select',
                                    name: 'select'
                                },
                                React.createElement('option', {
                                    value: '1'
                                }, '微信号'),
                                React.createElement('option', {
                                    value: '2'
                                }, '+85')
                            )
                        )
                    )
                )
            )
        )
    }
}

module.exports = Select2