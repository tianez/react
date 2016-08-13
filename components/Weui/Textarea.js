'use strict'

class Textarea extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('section', {},
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 文本域'),
                React.createElement('div', {
                        className: 'weui_cells weui_cells_form'
                    },
                    React.createElement('div', {
                            className: 'weui_cell'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('textarea', {
                                className: 'weui_textarea',
                                rows: 3,
                                placeholder: '请输入意见反馈'
                            }),
                            React.createElement('div', {
                                    className: 'weui_textarea_counter'
                                },
                                React.createElement('span', {}, 0),
                                '/200'
                            )
                        )
                    )
                )
            )
        )
    }
}

module.exports = Textarea