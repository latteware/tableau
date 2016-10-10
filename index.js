const React = require('react')
const _ = require('lodash')

const Tableau = {}
Tableau._widgets = {}
Tableau._layouts = {}

class Builder extends React.Component {
	constructor(props) {
		super(props)

		if(this.props.layout){
			this.layout = this.getLayoutByType(this.props.layout)
		}

		if(!this.layout){
			throw new Error('No layout defined')
		}
	}

	getLayoutByType(type) {
		return Tableau._layouts[type]
	}

	render() {
		const Tableau = this.layout

		return (
			<div>
				<Tableau
					{...this.props}
				/>
			</div>
		)
	}
}

class Component extends React.Component {
	constructor(props) {
		super(props)
	}

	getWidget(type) {
		return Tableau._widgets[type]
	}

	buildSection(sectionName) {
		var self = this
		var section = this.props.sections[sectionName]

		if(!section){
			return console.warn('Section '+ sectionName +' not defined')
		}

		return section.map(function (item) {
			const Element = self.getWidget(item.widget)
			if(!Element){
				console.warn('Widget '+ item.widget +' not defined')
				return <div key={item.name}></div>
			}

			var globals = self.props.data
			var data = {}

			if(item.data){
				if(_.isFunction(item.data)){
					data = item.data(globals)
				} else if(_.isObject(item.data)){
					data = item.data
				}

				data.globals = globals
			}else{
				data.globals = globals
			}

			const content = React.createElement(Element, data)

			return <div key={item.name}>
				{content}
			</div>
		})
	}
}

Tableau.registerLayout = function (name, layout) {
	this._layouts[name] = layout
}

Tableau.registerWidget = function (name, widget) {
	this._widgets[name] = widget
}

Tableau.link = function(attr){
	return function(globalData){
		return globalData[attr]
	}
}

Tableau.Builder = Builder
Tableau.Component = Component

module.exports = Tableau
