'use strict'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: ''
        }
    }
    _onChange() {
        let config = ConfigStore.getAll()
        console.log(config)
        window.document.title = config.title
        this.setState(config)
    }
    componentDidMount() {
        ConfigStore.addChangeListener(this._onChange.bind(this))
    }
    componentWillUnmount() {
        ConfigStore.removeChangeListener(this._onChange.bind(this))
    }
    render() {
        return (
            React.createElement('div', {
                id: 'warper',
                className: 'pure-g',
            },
                React.createElement('section', {
                    id: 'main'
                },
                    React.createElement('section', {
                        id: 'content',
                        className: 'pure-u-1'
                    }, this.props.children)
                )
            )
        )
    }
}
module.exports = Layout
