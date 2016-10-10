const React = require('react')
const Tableau = require('../../')

class SingleColumnLayout extends Tableau.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const data = this.props.data
		const content = this.buildSection('content')

		var links
		if(data.navBar && data.navBar.links){
			links = this.props.data.navBar.links.map( (item, i) => {
				if(item.active){
					return <li key={i} role="presentation" className="active">
						<a href={item.link}>{item.label}</a>
					</li>
				}else{
					return <li key={i} role="presentation">
						<a href={item.link}>{item.label}</a>
					</li>
				}
			})
		}

		return (
			<div className="container container-narrow">
				<div className="header clearfix">
					<nav>
						<ul className="nav nav-pills pull-right">
							{ links }
						</ul>
					</nav>
					<h3 className="text-muted">{ data.projectName }</h3>
				</div>

				<div className="row">
					<div className="col-xs-12">
						{content}
					</div>
				</div>
			</div>
		)
	}
}

Tableau.registerLayout( 'single-column', SingleColumnLayout, {
	sections: ['content']
})

module.exports = SingleColumnLayout