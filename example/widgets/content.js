const React = require('react')
const ReactMarkdown = require('react-markdown')
const Tableau = require('../../')

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Content'
    }
    render() {
        return <div className="widget widget-1">
			<div className="widget-head">
				<h3 className="title">
					{this.props.globals.title}
				</h3>
				<hr/>
			</div>
			<div className="widget-body">
				{ this.props.globals.content && 
					<ReactMarkdown source={this.props.globals.content} />
				}
			</div>
		</div>
    }
}

Tableau.registerWidget('content', Content)

module.exports = Content