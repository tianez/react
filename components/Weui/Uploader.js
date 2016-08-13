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
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('div', {
                                    className: 'weui_uploader'
                                },
                                React.createElement('div', {
                                        className: 'weui_uploader_hd weui_cell',
                                    },
                                    React.createElement('div', {
                                        className: 'weui_cell_bd weui_cell_primary',
                                    }, '图片上传'),
                                    React.createElement('div', {
                                        className: 'weui_cell_ft',
                                    }, '0/2')
                                ),
                                React.createElement('div', {
                                        className: 'weui_uploader_bd',
                                    },
                                    React.createElement('ul', {
                                            className: 'weui_uploader_files',
                                        },
                                        React.createElement('li', {
                                            className: 'weui_uploader_file',
                                            style: {
                                                backgroundImage: 'url(images/app-icon.png)'
                                            }
                                        }),
                                        React.createElement('li', {
                                                className: 'weui_uploader_file weui_uploader_status',
                                                style: {
                                                    backgroundImage: 'url(images/app-icon.png)'
                                                }
                                            },
                                            React.createElement('div', {
                                                    className: 'weui_uploader_status_content'
                                                },
                                                React.createElement('i', {
                                                    className: 'weui_icon_warn'
                                                })
                                            )
                                        ),
                                        React.createElement('li', {
                                                className: 'weui_uploader_file weui_uploader_status',
                                                style: {
                                                    backgroundImage: 'url(images/app-icon.png)'
                                                }
                                            },
                                            React.createElement('div', {
                                                className: 'weui_uploader_status_content'
                                            }, '50%')
                                        )
                                    ),
                                    React.createElement('div', {
                                            className: 'weui_uploader_input_wrp',
                                        },
                                        React.createElement('input', {
                                            className: 'weui_uploader_input',
                                            type: 'file',
                                            accept: 'image/*',
                                            multiple: false
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    }
}

module.exports = Input