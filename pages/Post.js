'use strict'

class Post extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() { 
        ConfigActions.update('title', 'post')
    }
    render() {
        return (
            React.createElement('div', {
                className: 'form-group'
            },
                React.createElement('div', {
                    className: 'form-control'
                },
                    'Post'
                )
            )
        )
    }
}

module.exports = Post
