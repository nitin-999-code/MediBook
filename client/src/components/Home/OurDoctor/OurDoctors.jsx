import React, { useState, useEffect } from 'react';
import './index.css';
import { FaStar } from 'react-icons/fa';
import { Empty } from 'antd';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';
import { Link } from 'react-router-dom';
import { safeArray } from '../../../utils/safeData';
import { mockDoctors } from '../../../config/demoMode';
import { SkeletonCard } from '../../UI';
import useScrollReveal from '../../../hooks/useScrollReveal';

const OurDoctors = () => {
    const { data, isLoading, isError } = useGetDoctorsQuery({ limit: 4 });
    const apiDoctors = data?.doctors;
    const doctors = safeArray(apiDoctors, mockDoctors.slice(0, 4));
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
                <SkeletonCard count={4} className="col-sm-6 col-lg-3 mb-4" />
            </div>
        );
    } else if (doctors?.length > 0) {
        content = doctors.map((item) => {
            const fullName = `${item?.firstName || ''} ${item?.lastName || ''}`.trim() || 'Doctor';
            return (
                <div className="col-sm-6 col-lg-3 mb-4 stagger-item" key={item.id}>
                    <div className="doctor-card-modern">
                        <div className="doctor-card-avatar-wrap">
                            <img 
                                src={item?.img || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'} 
                                className="doctor-card-avatar" 
                                alt={fullName} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80';
                                }}
                            />
                        </div>
                        <div className="doctor-card-info">
                            <Link to={`/doctors/profile/${item?.id}`} className="doctor-card-name">
                                {fullName}
                            </Link>
                            <div className="doctor-card-specialty mb-2">
                                <span className="specialty-badge">{item?.specialization || 'General Practice'}</span>
                            </div>
                            <div className="doctor-card-rating mb-3">
                                <FaStar className="star-icon" /> <strong>4.8</strong> <span>(120 reviews)</span>
                            </div>
                            <Link to={`/booking/${item?.id}`} className="btn-book-outline w-100">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        content = (
            <div className="col-12 py-5">
                <Empty description="No available data right now" />
            </div>
        );
    }

    return (
        <section id="our-doctors" className="our-doctors-section py-5">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`doctors-header reveal-up ${headerVisible ? 'reveal-active' : ''}`}
                >
                    <h2 className="doctors-title">Doctors you can actually talk to</h2>
                    <p className="doctors-sub">A few of the specialists available to book right now.</p>
                </div>
                <div
                    ref={gridRef}
                    className={`row justify-content-center reveal-stagger-parent ${gridVisible ? 'reveal-active' : ''}`}
                >
                    {content}
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;
