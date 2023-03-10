import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './About.scss';

const About = () => {
	return (
		<div id='about-wrapper'>
			<div className='woman-2'>
				<div className='woman-2-arrow'></div>
			</div>
			<Container>
				<Row>
					<Col lg='12' xl={{ span: 8, offset: 1 }}>
						<div className='about-arrow'></div>
						<h2>Малко повече за нас</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus excepturi vel modi
							debitis atque ut ex deleniti harum nobis dignissimos id pariatur aperiam inventore
							accusantium vero, nam eveniet voluptate blanditiis molestias. Mollitia praesentium est quo
							ab provident incidunt ullam iusto ea expedita molestias amet possimus commodi aliquam qui
							totam animi, adipisci, sequi architecto? Voluptatum, tempore? Nobis accusamus, enim minus
							architecto dolorum commodi aperiam eos officia debitis ex ipsa quibusdam eaque adipisci vero
							rem nemo itaque magnam quia explicabo illum laborum quaerat! In modi pariatur sit, facilis
							sunt quidem possimus! Incidunt adipisci vero facere eligendi eius repellendus nobis earum
							quam officiis blanditiis ab illo officia nam temporibus aperiam saepe, voluptates sed. Eius
							rem blanditiis deleniti facere dicta temporibus? Vero illum reprehenderit consectetur
							distinctio beatae. Facere fugiat sunt commodi fugit incidunt! Quae ipsum totam praesentium
							ducimus velit, laboriosam vitae eum unde quaerat assumenda fuga architecto blanditiis
							impedit, itaque facere nemo maxime eveniet voluptates? Modi molestiae repellendus, magnam
							ipsum odit error esse fugiat sapiente dolor tempora, est aspernatur. Sed inventore, optio
							cum quod sint facilis minima, nam neque ab dolorum provident accusantium expedita corrupti
							odit nostrum aspernatur voluptatem esse autem distinctio, deserunt et delectus libero.
							Necessitatibus eum odio consectetur suscipit in? Incidunt, odio.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
