'use strict'

class Home extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        let audio = this.refs.audio;
        ConfigActions.update('title', 'roles')
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
    }
}

module.exports = Home
