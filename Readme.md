# Tableau

## Tableau components

### Data

Layouts need data to render, so we need to send a object with this attributes:

- **layout:** this choose a layout 
- **sections:** this is where we declare widgets to be used in every section
- **data:** this is the data that will be passed to every widget as a global prop

### Widgets

#### Registring a widget

```
Tableau.registerWidget('panel', Panel)
```

#### Using a widget in a section

In a section array, Add a widget object like this:

```
{
	name:'useful-links',
	widget:'panel',
	// Data can be defined by a function
	data: {
		title: 'Useful links',
		content: content.usefulLinks
	}
}
```

Widgets can also have data defined as a function that will get the global data and will need to return a object

```
{
	name:'heads-up',
	widget:'alert',
	// Data can be defined by a function
	data: Tableau.link('alert')
}
```

`Tableau.link('alert')` is function that takes the global data and makes a atribute the main data of the widget, you can create a new function and set it here.

This way by changing the data and the layout will update with out changing the section definition.


### Layouts

#### Registring a widget
```
Tableau.registerLayout( 'two-columns', TwoColumnsLayout)
```

#### Using a layout

```
<Tableau.Builder {...layoutData}/>
```
or

```
<Tableau.Builder layout='LAYOUT_NAME' sections={sections} data={data}/>
```

This way by changing the layout, sections definition or the data you can render a different page.

## Examples

Check the example/index.js to see a working example.

For questions open an issue or contact [@Siedrix](https://github.com/siedrix)

## Dev

Clone this and then run:

```
$ npm install
$ make start
```

### Help with:

- Create more examples
-- Add a redux example
-- Add a react router example with multiple layouts
-- Add a server side rendering example
- Create more layouts
- Create more widgets
- Use it for non production projects and share ideas on how to improve it

### Collaborators

> Daniel Zavala &nbsp;&middot;&nbsp;
> [Siedrix.com](http://siedrix.com) &nbsp;&middot;&nbsp;
> GitHub [@Siedrix](https://github.com/siedrix) &nbsp;&middot;&nbsp;
> Twitter [@Siedrix](https://twitter.com/siedrix)


