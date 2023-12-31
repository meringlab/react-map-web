import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

	state = {}

	render() {
		return (
			<MyContext.Provider value={this.state}>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export { MyContext, MyProvider }