import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

class MyApp extends React.Component{
	render(){
		return(
			<div id="myApp">
				<Clock />
			</div>
		);
	}
}

ReactDOM.render(<MyApp />,document.getElementById("root"));
