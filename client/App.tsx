import React from 'react';

const App = () => {
	let test = () => {
		//@ts-ignore
		window.session.test('hello');
	};

	return (
		<div>
			<h1>Test</h1>
			<button onClick={test}>Test</button>
		</div>
	);
};

export default App;
