import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Empty } from 'antd';
import { useGetAllBlogsQuery } from '../../../redux/api/blogApi';
import { Link } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { safeArray } from '../../../utils/safeData';
import { mockBlogPosts } from '../../../config/demoMode';
import { SkeletonCard } from '../../UI';
import useScrollReveal from '../../../hooks/useScrollReveal';
import './Blog.css';

const Blog = () => {
	const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 3 });
	const apiBlogData = data?.blogs;
    const blogData = safeArray(apiBlogData, mockBlogPosts.slice(0, 3));
    const [showLoading, setShowLoading] = useState(true);
    const [headerRef, headerVisible] = useScrollReveal();
    const [gridRef, gridVisible] = useScrollReveal();

    useEffect(() => {
        const timer = setTimeout(() => setShowLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

	let content = null;
	if (isLoading && showLoading) {
		content = (
			<div className="row justify-content-center w-100">
				<SkeletonCard count={3} className="col-md-4 col-sm-12 mb-4" />
			</div>
		);
	} else if (blogData?.length > 0) {
		content = blogData.map((item) => (
			<div className="col-md-4 col-sm-12 mb-4 stagger-item" key={item?.id}>
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
	} else {
		content = (
			<div className="col-12 py-5">
				<Empty description="No available data right now" />
			</div>
		);
	}

	return (
		<section className="blog-section">
			<div className="container">
				<div
                    ref={headerRef}
                    className={`blog-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
                >
					<h2 className="blog-title">From the MediBook blog</h2>
					<p className="blog-sub">
						Health tips, doctor Q&As, and updates from our team.
					</p>
				</div>
				<div
                    ref={gridRef}
                    className={`row justify-content-center reveal-stagger-parent ${gridVisible ? 'reveal-active' : ''}`}
                >
					{content}
				</div>
				<div className="text-center mt-4 mt-md-5">
					<Link to="/blog" className="blog-section__cta">View all posts</Link>
				</div>
			</div>
		</section>
	);
};

export default Blog;
