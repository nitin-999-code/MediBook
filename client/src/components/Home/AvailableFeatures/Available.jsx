import React from 'react';
import img from '../../../images/features/feature.png';
import './index.css';
import AvailableServiceContent from './AvailableServiceContent';
import useScrollReveal from '../../../hooks/useScrollReveal';

const Available = () => {
	const [visualRef, visualVisible] = useScrollReveal();
	const [contentRef, contentVisible] = useScrollReveal();

	return (
		<section className="available-section">
			<div className="container">
				<div className="row align-items-center g-4 g-lg-5">
					<div
						ref={visualRef}
						className={`col-lg-5 reveal-fade-up ${visualVisible ? 'reveal-active' : ''}`}
					>
						<div className="available-section__visual">
							<img src={img} className="img-fluid" alt="Clinic facilities" />
						</div>
					</div>
					<div
						ref={contentRef}
						className={`col-lg-7 reveal-fade-up ${contentVisible ? 'reveal-active' : ''}`}
					>
						<div className="available-section__header text-center text-lg-start">
							<span className="available-section__label">Facilities</span>
							<h2>Available services</h2>
							<p className="available-section__lead">
								Modern facilities and dedicated spaces for your care.
							</p>
						</div>
						<AvailableServiceContent />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Available;

