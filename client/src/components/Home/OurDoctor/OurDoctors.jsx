import React from 'react';
import './index.css';
import { FaUserMd, FaStar } from 'react-icons/fa';
import { Empty } from 'antd';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';
import { Link } from 'react-router-dom';
import { safeArray } from '../../../utils/safeData';
import { mockDoctors } from '../../../data/mockDoctors';
import { SkeletonCard } from '../../UI';

const OurDoctors = () => {
    const { data, isLoading, isError } = useGetDoctorsQuery({ limit: 10 });
    const apiDoctors = Array.isArray(data?.doctors) ? data.doctors.slice(0, 4) : [];

    const renderContent = () => {
        if (isLoading) return (
            <div className="row justify-content-center w-100">
                <SkeletonCard count={4} className="col-sm-6 col-lg-3 mb-4" />
            </div>
        );
        if (isError) {
            console.error("API failed:", isError);
            return <div className="col-12 text-center text-danger">Error loading data.</div>;
        }
        if (apiDoctors.length === 0) {
            return (
                <div className="col-12 py-5">
                    <Empty description="No data available" />
                </div>
            );
        }

        return apiDoctors.map((item) => {
            const fullName = `${item?.firstName || ''} ${item?.lastName || ''}`.trim() || 'Doctor';
            return (
                <div className="col-sm-6 col-lg-3 mb-4" key={item.id}>
                    <div className="doctor-card-modern">
                        <div className="doctor-card-avatar-wrap">
                            {item?.img ? (
                                <img src={item.img} className="doctor-card-avatar" alt={fullName} />
                            ) : (
                                <div className="doctor-card-avatar-placeholder">
                                    <FaUserMd />
                                </div>
                            )}
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
    };

    return (
        <section id="doctors" className="our-doctors-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-heading">Our Doctors</h2>
                    <p className="text-muted">Meet our experienced and caring specialists.</p>
                </div>
                <div className="row justify-content-center">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;
