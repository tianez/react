'use strict'
// const {
//     Form,
//     Input
// } = require('../components/Forms')

const {
    Input,
    Textarea,
    Checkbox,
    Checkbox2,
    Radio,
    Select,
    Select2,
    Select3,
    Switch,
    Uploader,
    Button,
    Grid
} = require('../components/Weui')

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
                    reLoad: this.reLoad.bind(this)
                },
                React.createElement(Input),
                React.createElement(Uploader),
                React.createElement(Switch),
                React.createElement(Checkbox),
                React.createElement(Checkbox2),
                React.createElement(Select),
                React.createElement(Select2),
                React.createElement(Select3),
                React.createElement(Radio),
                React.createElement(Textarea),
                React.createElement(Button),

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
                        }, '亲 您的浏览器不支持html5的audio标签')
                    )
                )
            )
        )
    }
}

module.exports = Home