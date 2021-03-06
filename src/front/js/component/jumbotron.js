import React from "react";
import { Link } from "react-router-dom";
import "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/styles/jumbotron.scss";
import Skyline from "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/img/skylineR33.jpg";
import Nissan from "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/img/nissan.jpeg";
import Supra from "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/img/supra.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap";

export const Jumbo = () => {
	return (
		<>
			{/* <Container className="banner">
				<h1 className="jumboTitle">JDM Inspo ❤️</h1>
			</Container> */}
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img className="d-block w-100" src={Skyline} alt="First slide" />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Nissan} alt="Second slide" />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Supra} alt="Third slide" />

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};
