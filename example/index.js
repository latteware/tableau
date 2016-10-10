import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Tableau from '..'

require('./layouts/two-columns')
require('./layouts/single-column')

require('./widgets/alert')
require('./widgets/content')
require('./widgets/panel')

// Some markdown content for the layout
const content = require('./content');

class App extends Component {
	render() {
		const layoutData = {
			// Set layout name
			// Change to 'single-column' to use another template
			// layout: 'single-column',
			layout: 'two-columns',

			// Set sections and widgets
			sections: {
				sidebar: [
					{
						name:'heads-up',
						widget:'alert',
						// Data can be defined by a function
						data: Tableau.link('alert')
					},
					{
						name:'useful-links',
						widget:'panel',
						// Data can be defined by a function
						data: {
							title: 'Useful links',
							content: content.usefulLinks
						}
					}
				],
				content: [
					{
						name:'main',
						widget:'content'
					}
				]
			},

			// Add data that will be used in the widgets
			data:{
				title:'Tableau docs',
				content: content.main,
				projectName: 'Tableau hello world',
				navBar:{
					links :[
						{href:'/', label:'Home', active: true},
						{href:'/about', label:'About'},
						{href:'/contact', label:'Contact'}
					]
				},
				alert:{
					verb:'Read the docs!',
					content:'This is a nice repo, check the docs and collaborate'
				}
			}
		}

		return <div>
			<Tableau.Builder {...layoutData}/>
		</div>
	}
}


ReactDOM.render(<App />, document.querySelector('#app'))