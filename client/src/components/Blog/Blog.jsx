import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { useDebounced } from '../../redux/hooks';
import { Pagination, Input } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { SkeletonCard, EmptyState } from '../UI';
import { mockBlogs } from '../../data/mockBlogs';
import { safeArray } from '../../utils/safeData';
import { truncate } from '../../utils/truncate';
import { FaUser, FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import moment from 'moment';
import './Blog.css';

const Blog = () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(9);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

    const query = {
        limit: size,
        page,
        ...(debouncedTerm && { searchTerm: debouncedTerm })
    };

    const { data, isError, isLoading } = useGetAllBlogsQuery(query);
    const blogData = Array.isArray(data?.blogs) ? data.blogs : [];
    
    console.log("API response:", data);
    console.log("Blogs count:", blogData.length);

    const meta = data?.meta;
    const total = meta?.total || 0;

    const onPageChange = (newPage, newPageSize) => {
        setPage(newPage);
        if (newPageSize !== size) setSize(newPageSize);
    };

    let content = null;
    if (isLoading) {
        content = (
            <div className="row w-100">
                <SkeletonCard count={3} className="col-lg-4 col-md-6 mb-4" />
            </div>
        );
    } else if (isError) {
        content = <div className="text-center text-danger w-100 mt-5">Error loading data.</div>;
    } else if (blogData.length === 0) {
        content = (
            <div className="w-100 mt-5">
                <EmptyState type="generic" title="No data available" />
            </div>
        );
    } else {
        content = blogData.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="blog-card-modern">
                    <Link to={`/blog/${item.id}`} className="blog-card-img-wrap">
                        {item.img ? (
                            <img src={item.img} alt={item.title} className="blog-card-img" />
                        ) : (
                            <div className="blog-card-placeholder text-center">MediBook Blog</div>
                        )}
                    </Link>
                    <div className="blog-card-body">
                        <div className="blog-card-meta mb-2">
                            <span><FaUser /> {item.user?.firstName} {item.user?.lastName}</span>
                            <span><FaCalendarAlt /> {moment(item.createdAt).format('MMM D, YYYY')}</span>
                        </div>
                        <Link to={`/blog/${item.id}`} className="blog-card-title d-block mb-3">
                            {truncate(item.title, 60)}
                        </Link>
                        <p className="blog-card-text text-muted mb-4">{truncate(item.description, 100)}</p>
                        <Link to={`/blog/${item.id}`} className="blog-card-link">
                            Read more <FaArrowRight className="ms-1" />
                        </Link>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="blog-page-modern">
            <Header />

            <section className="blog-hero">
                <div className="container text-center">
                    <h1 className="blog-hero-title">Health Insights & News</h1>
                    <div className="title-underline"></div>
                    <p className="blog-hero-subtitle">Health tips, news, and insights from our team of experts.</p>
                </div>
            </section>

            <section className="blog-content-section py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 col-lg-6">
                            <Input
                                size="large"
                                placeholder="Search articles..."
                                prefix={<FaSearch className="text-muted" />}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="blog-search-box"
                                allowClear
                            />
                        </div>
                    </div>

                    <div className="row">
                        {content}
                    </div>

                    {!isLoading && !isError && blogData && blogData.length > 0 && total > 0 && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                current={page}
                                pageSize={size}
                                total={total}
                                onChange={onPageChange}
                                showSizeChanger
                                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} posts`}
                                pageSizeOptions={[6, 9, 12, 18]}
                            />
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
