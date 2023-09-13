import React from 'react';
import { Header } from 'pragmate-ui-docs/header';
import { Navbar } from 'pragmate-ui-docs/navbar';
import { Footer } from 'pragmate-ui-docs/footer';
export function Page() {
	return (
		<main className='page__home-container'>
			<Navbar />
			<div className='content'>
				<Header />
				<Footer />
			</div>
		</main>
	);
}
