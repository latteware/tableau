const React = require('react')
const Tableau = require('../../')

class Alert extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'Alert'
	}
	render() {
		return <div className="alert alert-info" role="alert">
			<strong>{this.props.verb}</strong> {this.props.content}
		</div>
	}
}

Tableau.registerWidget('alert', Alert)

module.exports = Alert