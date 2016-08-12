'use strict'

const classNames = require('classNames')

class Footer extends React.Component {
    constructor() {
        super()
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.info);
        if (this.props.onSubmit()) {
            this.props.onSubmit(e)
        }

    }
    render() {
        return (
            React.createElement('footer', {
                id: 'footer',
                className: 'footer',
            }, this.props.title)
        )
    }
}
Footer.defaultProps = {
    title: '底部'
}
module.exports = Footer