import * as React from 'react';
import { Nav } from '@bgroup/simply-docs/nav';
import { Button } from 'simply-ui/form';

export /*bundle*/
function Page(): JSX.Element {
	return (
		<>
			<Nav />
			<div className="hero">
				<div className="container">
					<h1 className="hero__title">simply-ui</h1>
					<p className="hero__description mt-30">
						Welcome to simply-ui, the home of intuitive and reusable UI components. Our library has been
						crafted with care to streamline your development process, providing a diverse range of
						components that are easy to implement. Explore, import, and create with simply-ui.
					</p>
				</div>
			</div>
			{/* <div className="hero__terminal">
				<pre>
					<code className="shell-session demo">Lorem ipsum dolor ~ $ </code>
				</pre>
			</div> */}
			<div className="wrapper-home">
				<div className="installation">
					<h3 className="section__title">Installation</h3>
					<div className="tab__container">
						<ul className="tab__menu">
							<li className="tab active" data-tab="mac">
								npm
							</li>
							<li className="tab" data-tab="linux">
								yarn
							</li>
						</ul>
						<pre className="nohighlight code">
							<code className="tab__pane active mac">npm i @bgroup/ui</code>
							<code className="tab__pane linux">npm i @bgroup/ui</code>
						</pre>
					</div>
				</div>
				<div className="feature">
					<div className="feature__item">
						<h3 className="section__title">REUTILIZABLES😃</h3>
						<p>
							BeyondUI proporciona componentes reutilizables que se pueden usar para crear una variedad de
							interfaces de usuario diferentes. Esto puede ahorrarle tiempo y esfuerzo, y también puede
							ayudar a garantizar que sus interfaces de usuario sean coherentes y estén bien diseñadas.
						</p>
					</div>
					<div className="feature__item">
						<h3 className="section__title">MODULARIDAD💪</h3>
						<p>
							Los componentes que tenemos integrados son modulares, lo que significa que se pueden
							combinar fácilmente para crear interfaces de usuario nuevas y complejas. Esto le brinda
							mucha flexibilidad al diseñar sus interfaces de usuario y también puede ayudar a que su
							código sea más fácil de mantener.
						</p>
					</div>
					<div className="feature__item">
						<h3 className="section__title">ELEGANTES🎩</h3>
						<p>
							Los componentes de su marco son elegantes y modernos, lo que puede ayudar a que sus
							interfaces de usuario se vean geniales. Esto puede mejorar la experiencia del usuario y
							hacer que su sitio web o aplicación sea más atractivo para los usuarios.
						</p>
					</div>
					<div className="feature__item">
						<h3 className="section__title">FACILES DE USAR🏹</h3>
						<p>
							Los componentes de su marco son fáciles de usar, incluso para principiantes. Esto facilita
							comenzar con su marco y crear interfaces de usuario atractivas de forma rápida y sencilla.
						</p>
					</div>
					<div className="feature__item">
						<h3 className="section__title">Variedad🎨</h3>
						<p>
							Los componentes son variados, cuenta con gran cantidad de componentes que puede escoger para
							su proyecto en particular, todo para la especialidad de su necesidad.
						</p>
					</div>
					<div className="feature__item">
						<h3 className="section__title">ESENCIALES⭐</h3>
						<p>
							Componentes vitales intregrados con los que puede tener la seguridad que estan al dia en el
							estandar de funcionamiento y perfomance en su aplicacion que enrriqueceran su aplicacion o
							pagina web y que por tanto muy esenciales para usar.
						</p>
					</div>
				</div>

				<div className="callout">
					<p>Read our documentation for advanced keybindings and customization</p>
					<button className="btn btn-primary">Documentation</button>
				</div>
			</div>
			<div className="changelog">
				<div className="changelog__wrapper">
					<h3 className="section__title">Changelog</h3>
					<div className="changelog__item">
						<div className="changelog__meta">
							<h4 className="changelog__title">v0.7</h4>
							<small className="changelog__date">10/12/2017</small>
						</div>
						<div className="changelog__detail">
							<ul>
								<li>Improving the writing workflow with better key bindings</li>
								<li>Design updates</li>
								<li>SSL Verification for web hooks</li>
								<li>Render Emoji</li>
							</ul>
						</div>
					</div>
					<div className="changelog__item">
						<div className="changelog__meta">
							<h4 className="changelog__title">v0.6</h4>
							<small className="changelog__date">7/30/2017</small>
						</div>
						<div className="changelog__detail">
							<ul>
								<li>Adding Unicode support</li>
								<li>Basic text highlighting</li>
								<li>Fresh Design</li>
							</ul>
						</div>
					</div>
					<div className="changelog__item">
						<div className="changelog__meta">
							<h4 className="changelog__title">v0.5</h4>
							<small className="changelog__date">5/10/2017</small>
						</div>
						<div className="changelog__detail">
							<ul>
								<li>Save default md file in new folders</li>
								<li>Ability to quick search on existing notes</li>
							</ul>
						</div>
					</div>
					<div className="changelog__callout">
						<a href="#" className="button--secondary">
							Checkout Full Log
						</a>
					</div>
				</div>
			</div>
			<section className="container-contributions">
				<h3 className="contributions__h3">
					Si deseas colaborar o aportar ideas interesantes puedes contribuir y ayudarnos💓 &#128147;
				</h3>
				Directamente aqui
				<Button variant="primary" className="contributions__button">
					<a href="https://github.com/balearesg/bgroup-ui">
						<img className="contributions__img" src="assets/github.png" alt="icon githhub" />
					</a>
				</Button>
				<div>
					<span>Here Click 🎵</span>
				</div>
			</section>
			t<footer className="footer">simply-ui MIT license </footer>
		</>
	);
}
