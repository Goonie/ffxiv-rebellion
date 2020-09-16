import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Page from 'components/layout/Page';

import 'styles/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Page>
		<Head>
			<meta charSet="utf-8"/>
			<title>FFXIV Help</title>
			<link rel="icon" href="/favicon.png" />
			<link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" />
		</Head>

		<Component {...pageProps}/>
	</Page>
);

export default App;
