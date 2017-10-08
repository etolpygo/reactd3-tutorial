import React from 'react';

import PreloaderImg from '../assets/preloading.png';

const Preloader = () => (
	<div className="App container">
		<h1>This is some sample data</h1>
		<p className="lead">Lorem ipsum</p>
		<img src={PreloaderImg} style={{width: '100%'}} role="presentation" />
        <h2 className="text-center">Loading data ...</h2>
	</div>
);

export default Preloader;