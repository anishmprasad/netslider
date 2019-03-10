import React from 'react'
import TransitionGroup from 'react-addons-transition-group'

class HomePage extends Component {

	constructor(props) {
	    super(props);
	}

  render() {
  	return (
  		<div className="site-wrapper">
  			<TransitionGroup>
  				{this.props.children}
  			</TransitionGroup>
  		</div>
  	)
  }

}