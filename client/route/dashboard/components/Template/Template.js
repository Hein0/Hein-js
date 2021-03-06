import React, { PropTypes, Component } from 'react'
import { Motion, spring } from 'react-motion'
import style from './Template.less'

class Template extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
			{ process =>
				<div>
					{process.x}
				</div>
			}
			</Motion>
		)
	}

}

export default Template
