import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useGetAllReviewsQuery } from '../../../redux/api/reviewsApi';
import StarRatings from 'react-star-ratings';
import { truncate } from '../../../utils/truncate';
import { FaCheck, FaUser } from 'react-icons/fa';
import EmptyState from '../../UI/EmptyState';
import { Empty, Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Testimonial = () => {
	const { data, isLoading, isError } = useGetAllReviewsQuery({});
	let content = null;

	if (isLoading) {
		content = (
			<>
				{[1, 2].map((i) => (
					<SwiperSlide key={i}>
						<div className="testimonial-card testimonial-card--skeleton">
							<div className="testimonial-card__header">
								<div className="testimonial-card__avatar" />
								<div className="testimonial-card__meta-skeleton" />
							</div>
							<div className="testimonial-card__text-skeleton" />
						</div>
					</SwiperSlide>
				))}
			</>
		);
	} else if (!isLoading && isError) {
		content = (
			<div className="col-12 text-center py-5">
				<p className="testimonial-error">Unable to load reviews.</p>
			</div>
		);
	} else if (!isLoading && (!data || data.length === 0)) {
		content = (
			<div className="col-12 py-5 d-flex justify-content-center">
				<Empty
					description={
						<span>No reviews yet. Be the first to share your experience.</span>
					}
				>
					<Link to="/doctors">
						<button className="btn btn-primary" style={{ background: '#166534', borderColor: '#166534' }}>Write Review</button>
					</Link>
				</Empty>
			</div>
		);
	} else if (data?.length > 0) {
		content = data.slice(0, 10).map((item) => (
			<SwiperSlide key={item.id}>
				<div className="testimonial-card">
					<div className="testimonial-card__header">
						<div className="testimonial-card__avatar">
							{item?.patient?.img ? (
								<img src={item.patient.img} alt="" />
							) : (
								<span className="testimonial-card__avatar-placeholder"><FaUser /></span>
							)}
						</div>
						<div>
							<h5 className="testimonial-card__name">
								{item?.patient?.firstName} {item?.patient?.lastName}
							</h5>
							<p className="testimonial-card__badge"><FaCheck /> Recommended</p>
						</div>
					</div>
					<p className="testimonial-card__text">{truncate(item?.description, 150)}</p>
					<div className="testimonial-card__stars">
						<StarRatings
							rating={5}
							starRatedColor="#f4c150"
							numberOfStars={5}
							name="rating"
							starDimension="18px"
							starSpacing="2px"
						/>
					</div>
				</div>
			</SwiperSlide>
		));
	}

	const isEmpty = !isLoading && !isError && (!data || data.length === 0);
	const hasData = !isLoading && !isError && data?.length > 0;

	return (
		<section className="testimonial-section">
			<div className="container">
				<div className="testimonial-section__header text-center">
					<span className="testimonial-section__label">Reviews</span>
					<h2>Testimonials</h2>
					<p className="testimonial-section__lead">What our patients say about us</p>
				</div>

				{isLoading && (
					<div className="testimonial-swiper-wrap">
						<div className="d-flex gap-4 justify-content-center">
							{[1, 2].map((i) => (
								<div key={i} className="testimonial-card testimonial-card--skeleton" style={{ flex: '0 0 45%', maxWidth: 500 }}>
									<div className="testimonial-card__header">
										<div className="testimonial-card__avatar" />
										<div className="testimonial-card__meta-skeleton" />
									</div>
									<div className="testimonial-card__text-skeleton" />
								</div>
							))}
						</div>
					</div>
				)}

				{!isLoading && isError && (
					<div className="text-center py-5">
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description="Unable to load reviews right now."
						/>
					</div>
				)}

				{isEmpty && (
				<div className="testimonial-empty-state">
					<div className="testimonial-empty-card">
						<div className="testimonial-empty-illustration">
							<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="60" cy="60" r="58" fill="#f0fdf4" stroke="#166534" strokeWidth="2" strokeDasharray="6 4"/>
								<path d="M40 55c0-11.046 8.954-20 20-20s20 8.954 20 20c0 7.5-4.12 14.03-10.21 17.45" stroke="#166534" strokeWidth="2.5" strokeLinecap="round"/>
								<path d="M50 72c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round"/>
								<circle cx="52" cy="52" r="3" fill="#166534"/>
								<circle cx="68" cy="52" r="3" fill="#166534"/>
								<path d="M55 61c1.5 2 3.5 3 5 3s3.5-1 5-3" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
								<path d="M38 80l-6 12" stroke="#bbf7d0" strokeWidth="3" strokeLinecap="round"/>
								<path d="M82 80l6 12" stroke="#bbf7d0" strokeWidth="3" strokeLinecap="round"/>
								<path d="M30 45l-8-4" stroke="#dcfce7" strokeWidth="2" strokeLinecap="round"/>
								<path d="M90 45l8-4" stroke="#dcfce7" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</div>
						<h3 className="testimonial-empty-title">No reviews yet</h3>
						<p className="testimonial-empty-message">
							Be the first to share your experience with our doctors.<br/>
							Your feedback helps others make informed health decisions.
						</p>
						<Link to="/doctors">
							<Button type="primary" size="large" className="testimonial-empty-cta">
								Find a Doctor & Write Review
							</Button>
						</Link>
					</div>
				</div>
			)}

				{hasData && (
					<div className="testimonial-swiper-wrap">
						<Swiper
							spaceBetween={24}
							slidesPerView={1}
							modules={[Navigation, Autoplay]}
							navigation
							loop={data?.length > 1}
							autoplay={{ delay: 2500, disableOnInteraction: false }}
							breakpoints={{
								768: { slidesPerView: 2 },
							}}
							className="testimonial-swiper"
						>
							{data.slice(0, 10).map((item) => (
								<SwiperSlide key={item.id}>
									<div className="testimonial-card">
										<div className="testimonial-card__header">
											<div className="testimonial-card__avatar">
												{item?.patient?.img ? (
													<img src={item.patient.img} alt="" />
												) : (
													<span className="testimonial-card__avatar-placeholder"><FaUser /></span>
												)}
											</div>
											<div>
												<h5 className="testimonial-card__name">
													{item?.patient?.firstName} {item?.patient?.lastName}
												</h5>
												<p className="testimonial-card__badge"><FaCheck /> Recommended</p>
											</div>
										</div>
										<p className="testimonial-card__text">{truncate(item?.description, 150)}</p>
										<div className="testimonial-card__stars">
											<StarRatings
												rating={5}
												starRatedColor="#f4c150"
												numberOfStars={5}
												name="rating"
												starDimension="18px"
												starSpacing="2px"
											/>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</div>
		</section>
	);
};

export default Testimonial;
