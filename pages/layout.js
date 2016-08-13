'use strict'
const {
    Link
} = ReactRouter

const {
    Header,
    Content,
    Footer,
    Reload
} = require('../components/Layout')
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
        // ConfigStore.removeChangeListener(this._onChange.bind(this))
    }
    render() {
        return (
            React.createElement('div', {
                    id: 'warper',
                },
                React.createElement(Header),
                this.props.children,
                React.createElement(Footer)
            )
        )
    }
}
module.exports = Layout