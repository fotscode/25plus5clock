import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

class MyApp extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="myApp">
				<Clock />
			</div>
		);
	}
}

ReactDOM.render(<MyApp />,document.getElementById("root"));
