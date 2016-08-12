'use strict'

const {
    Tab
} = require('../components/Forms')

class Post extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        ConfigActions.update('title', 'post')
        storedb('article').insert({ 'id': 1, 'value': '23232323' })
        let res = storedb('article').find({ 'id': 1 })
        console.log(res)
        let timestamp = res[0]['_id'];
        // var timestamp = '1425553097';
        let d = new Date(timestamp);    //根据时间戳生成的时间对象
        let date = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + " " + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds())
        console.log(date)
    }
    render() {
        return (
            React.createElement('div', {
                className: 'form-group'
            },
                React.createElement(Tab, {
                    className: 'form-control'
                },
                    React.createElement('div', {
                        className: 'form-control',
                        title: 'title'
                    },
                        '1111111111111111111111111'
                    ),
                    React.createElement('div', {
                        className: 'form-control',
                        title: 'title22'
                    },
                        '2222222222222222222222'
                    ),
                    React.createElement('div', {
                        className: 'form-control',
                        title: 'title22'
                    },
                        '333333333333333333333333'
                    ),
                    React.createElement('div', {
                        className: 'form-control',
                        title: 'title22'
                    },
                        '44444444444444444444'
                    )
                )
            )
        )
    }
}

module.exports = Post
