'use strict'

const classNames = require('classNames')

class Reload extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('section', {}, this.props.title)
        )
    }
}
Reload.defaultProps = {
    title: '刷新'
}
module.exports = Reload