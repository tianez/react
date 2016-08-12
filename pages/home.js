'use strict'
const {
    Form,
    Input
} = require('../components/Forms')
class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        ConfigActions.update('title', '首页')
        let audio = this.refs.audio;
        // audio.play()
        audio.addEventListener('timeupdate', function () { //剩余时间
            if (!isNaN(audio.duration)) {
                var surplus = audio.duration - audio.currentTime;
                console.log(surplus);
            }
        }, false);
    }
    render() {
        return (
            React.createElement('div', {
                className: 'form-group'
            },
                React.createElement('div', {
                    className: 'form-control animated bounceInRight'
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
                        React.createElement(Input)
                    )
                )
            )
        )
    }
}

module.exports = Home
