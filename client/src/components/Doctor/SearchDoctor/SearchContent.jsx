import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaStar } from 'react-icons/fa';

const SearchContent = ({ data }) => {
    const fullName = `${data?.firstName || ''} ${data?.lastName || ''}`.trim() || 'Doctor';

    return (
        <div className="doctor-card-modern">
            <div className="doctor-card-avatar-wrap">
                {data?.img ? (
                    <img src={data.img} className="doctor-card-avatar" alt={fullName} />
                ) : (
                    <div className="doctor-card-avatar-placeholder">
                        <FaUserMd />
                    </div>
                )}
            </div>
            <div className="doctor-card-info">
                <Link to={`/doctors/profile/${data?.id}`} className="doctor-card-name">
                    {fullName}
                </Link>
                <div className="doctor-card-specialty mb-2">
                    <span className="specialty-badge">{data?.specialization || 'General Practice'}</span>
                </div>
                <div className="doctor-card-rating mb-3">
                    <FaStar className="star-icon" /> <strong>4.8</strong> <span>(120 reviews)</span>
                </div>
                <Link to={`/booking/${data?.id}`} className="btn-book-outline w-100 mt-auto">
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default SearchContent;
