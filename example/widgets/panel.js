const React = require('react')
const ReactMarkdown = require('react-markdown')
const Tableau = require('../../')

class Panel extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'Panel'
	}
	render() {
		return <div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">{ this.props.title }</h3>
			</div>
			<div className="panel-body">
				{ this.props.content && 
					<ReactMarkdown source={this.props.content} />
				}
			</div>
		</div>
	}
}

Tableau.registerWidget('panel', Panel)

module.exports = Panel