'use strict'
const {
    Form,
    Input
} = require('../components/Forms')

const wInput = require('../components/Weui/Input')
const Textarea = require('../components/Weui/Textarea')
const {
    Content
} = require('../components/Layout')
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            kk: '33333333333'
        }
    }
    componentDidMount() {
        ConfigActions.update('title', '首页')
        let audio = this.refs.audio;
        // audio.play()
        audio.addEventListener('timeupdate', function() { //剩余时间
            if (!isNaN(audio.duration)) {
                var surplus = audio.duration - audio.currentTime;
                console.log(surplus);
            }
        }, false);
    }
    componentWillReceiveProps() {
        console.log(ConfigStore.get('refresh'))
    }
    reLoad() {
        setTimeout(function() {
            ConfigActions.update('refresh', true)
            this.setState({
                kk: 'sdsdsdsd'
            })
        }.bind(this), 2000)
    }
    render() {
        return (
            React.createElement(Content, {
                    key: 'home',
                    nn: 'home',
                    reLoad: this.reLoad.bind(this)
                },
                React.createElement(wInput),
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 选择'),
                React.createElement('div', {
                        className: 'weui_cells'
                    },
                    React.createElement('div', {
                            className: 'weui_cell weui_cell_select weui_select_before'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_hd'
                            },
                            React.createElement('select', {
                                    className: 'weui_select',
                                    name: 'select2'
                                },
                                React.createElement('option', {
                                    value: '1'
                                }, '+86'),
                                React.createElement('option', {
                                    value: '2'
                                }, '+80')
                            )
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('input', {
                                className: 'weui_input',
                                type: 'text',
                                placeholder: '请输入qq号'
                            })
                        )
                    )
                ),
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 表单'),
                React.createElement('div', {
                        className: 'weui_cells weui_cells_radio'
                    },
                    React.createElement('label', {
                            className: 'weui_cell weui_check_label',
                            htmlFor: 'x11'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('div', {}, 'cell standard')
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('input', {
                                className: 'weui_check',
                                name: 'radio1',
                                id: 'x11',
                                type: 'radio',
                                value: 0
                            }),
                            React.createElement('span', {
                                className: 'weui_icon_checked'
                            })
                        )
                    ),
                    React.createElement('label', {
                            className: 'weui_cell weui_check_label',
                            htmlFor: 'x12'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('div', {}, 'cell standard')
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('input', {
                                className: 'weui_check',
                                name: 'radio1',
                                id: 'x12',
                                type: 'radio',
                                value: 1,
                                checked: 'checked'
                            }),
                            React.createElement('span', {
                                className: 'weui_icon_checked'
                            })
                        )
                    )
                ),
                React.createElement('div', {
                    className: 'weui_cells_title'
                }, ' 表单'),
                React.createElement('div', {
                        className: 'weui_cells weui_cells_radio'
                    },
                    React.createElement('label', {
                            className: 'weui_cell weui_check_label',
                            htmlFor: 'x13'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('div', {}, 'cell standard')
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('input', {
                                className: 'weui_check',
                                name: 'radio1',
                                id: 'x13',
                                type: 'checkbox',
                                value: 0
                            }),
                            React.createElement('span', {
                                className: 'weui_icon_checked'
                            })
                        )
                    ),
                    React.createElement('label', {
                            className: 'weui_cell weui_check_label',
                            htmlFor: 'x14'
                        },
                        React.createElement('div', {
                                className: 'weui_cell_bd weui_cell_primary'
                            },
                            React.createElement('div', {}, 'cell standard')
                        ),
                        React.createElement('div', {
                                className: 'weui_cell_ft'
                            },
                            React.createElement('input', {
                                className: 'weui_check',
                                name: 'radio1',
                                id: 'x14',
                                type: 'checkbox',
                                value: 1
                            }),
                            React.createElement('span', {
                                className: 'weui_icon_checked'
                            })
                        )
                    )
                ),
                React.createElement(Textarea),
                React.createElement('div', {
                        className: 'form-group animated bounceInRight'
                    },
                    React.createElement('div', {
                            className: 'form-control'
                        },
                        React.createElement('audio', {
                            ref: 'audio',
                            src: '1.mp3',
                            controls: 'controls',
                            loop: 'loop',
                            autoPlay: false
                        }, '亲 您的浏览器不支持html5的audio标签'),
                        React.createElement(Form, {
                                legend: '表单2',
                            },
                            React.createElement(Input),
                            React.createElement(Input),
                            this.state.kk
                        )
                    )
                )
            )
        )
    }
}

module.exports = Home