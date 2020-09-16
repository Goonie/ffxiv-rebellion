import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<React.Fragment>
		<Head>
			<meta charSet="utf-8"/>
			<title>FFXIV Help</title>
			<link rel="icon" href="/favicon.png" />
		</Head>

		<Component {...pageProps}/>
	</React.Fragment>
);

export default App;
