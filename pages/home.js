'use strict'
const {
    Form,
    Input
} = require('../components/Forms')

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