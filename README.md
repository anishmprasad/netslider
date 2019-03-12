# react-custom-dropdown

Simple Dropdown component for React.

### Installation

```
// with npm
$ npm install @react-compounds/dropdown  --save

// with yarn
$ yarn add @react-compounds/dropdown
```

### Usage

This is the basic usage of react-dropdown

```Javascript
import Dropdown from '@react-compounds/dropdown';

const InputSample = {
	simpleDropDown: [
		{ label: 'MicroSoft Word', value: 'Microsoft Word', subMenu: [{ label: 'sdsd', value: 'sdsdd' }] },
		{ label: 'PageMaker', value: 'PageMaker' },
		{ label: 'Different', value: 'Different' }
	],
	groupingDropDown: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First', disabled: true },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today', disabled: true },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	],
	groupingAcceptOnlyOne: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First' },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today' },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	],
	groupingAcceptOne_Multiple: [
		{
			title: 'SORT BY',
			data: [
				{ label: 'Latest First', value: 'Latest First', disabled: true },
				{ label: 'Oldest Frist', value: 'Oldest Frist' },
				{ label: 'Different', value: 'Different' }
			]
		},
		{
			title: 'Timeframe filter',
			data: [
				{ label: 'Today', value: 'Today' },
				{ label: 'Yesterday', value: 'Yesterday' },
				{ label: 'This week', value: 'This week' }
			]
		}
	]
};

<DropDown
	ref={this.child}
	option={InputSample.groupingDropDown}
	multiSelect={true}
	isRequiredDefaultMultiselectDesign={false}
	multiselectHeaderRenderer={() => <div />}
    onSelect={selectedObj => {
        console.log('On select ', selectedObj);
    }}
    multiselectBtnClass={'apply-btn'} // 'apply-btn' already defined in the 'SmartUpload' component
    multiselectBtnLabel={'Apply Filter'}
    multiselectBtnRenderer={() => (
        <div onClick={() => this.child.current.onMultiSelectDone()} style={applyFilter}>
            Apply Filter
        </div>
    )}
/>
```

**Options**

sample option 1

```JavaScript

const options = [
  'one', 'two', 'three'
];
```

sample option 2

```JavaScript

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'Three', className: 'myOptionClassName' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
];
```

### TODO

-   [x] Production Level
-   [ ] CSS Polishing and Transitions
-   [ ] Documentation
-   [ ] etc..

**Run example**

```
$ npm start
```

### License

MIT
