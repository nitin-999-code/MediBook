import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { Empty, message } from 'antd';
import { useGetAllBlogsQuery } from '../../../redux/api/blogApi';
import { Link } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { safeArray } from '../../../utils/safeData';
import { mockBlogs } from '../../../data/mockBlogs';
import { SkeletonCard } from '../../UI';
import './Blog.css';

const Blog = () => {
	const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 3 });
    const apiBlogData = Array.isArray(data?.blogs) ? data.blogs : [];

	const renderContent = () => {
		if (isLoading) return (
			<div className="row justify-content-center w-100">
				<SkeletonCard count={3} className="col-md-4 col-sm-12 mb-4" />
			</div>
		);
		if (isError) {
			console.error("API failed:", isError);
            return <div className="text-center text-danger">Error loading data.</div>;
		}
        if (apiBlogData.length === 0) {
            return (
                <div className="col-12 py-5">
                    <Empty description="No data available" />
                </div>
            );
        }
		
		return apiBlogData.map((item) => (
			<div className="col-md-4 col-sm-12 mb-4" key={item?.id}>
				<article className="blog-card">
					<Link to={`/blog/${item?.id}`} className="blog-card__img-link">
						<div className="blog-card__img">
							{item?.img ? (
								<img src={item.img} alt="" className="img-fluid" />
							) : (
								<div className="blog-card__img-placeholder">Blog</div>
							)}
						</div>
					</Link>
					<div className="blog-card__body">
						<Link to={`/blog/${item?.id}`} className="blog-card__title">
							{truncate(item?.title, 55)}
						</Link>
						<div className="blog-card__meta">
							<span><FaUser size={12} /> {item?.user?.firstName} {item?.user?.lastName}</span>
							<span><FaCalendarAlt size={12} /> {dayjs(item?.createdAt).format('MMM D, YYYY')}</span>
						</div>
						<p className="blog-card__excerpt">{truncate(item?.description, 140)}</p>
						<Link to={`/blog/${item?.id}`} className="blog-card__link">
							Read more <FaArrowRight className="ms-1" />
						</Link>
					</div>
				</article>
			</div>
		));
	};

	return (
		<section className="blog-section">
			<div className="container">
				<div className="blog-section__header text-center">
					<span className="blog-section__label">From our blog</span>
					<h2>Our blog</h2>
					<p className="blog-section__lead">
						Health tips, news, and updates from our team.
					</p>
				</div>
				<div className="row justify-content-center">
					{renderContent()}
				</div>
				<div className="text-center mt-4 mt-md-5">
					<Link to="/blog" className="blog-section__cta">View all posts</Link>
				</div>
			</div>
		</section>
	);
};

export default Blog;
