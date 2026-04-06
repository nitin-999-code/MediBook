import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import SearchSidebar from './SearchSidebar';
import SearchContent from './SearchContent';
import { useDebounced } from '../../../utils/hooks/useDebounced';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';
import { Pagination } from 'antd';
import Header from '../../Shared/Header/Header';
import { SkeletonCard, EmptyState } from '../../UI';
import { mockDoctors } from '../../../data/mockDoctors';
import { safeArray } from '../../../utils/safeData';
import './SearchDoctor.css';

const SearchDoctor = () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortByGender, setSortByGender] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [priceRange, setPriceRange] = useState({});

    const specialtiesList = ['All', 'Cardiologist', 'Neurologist', 'Orthopedic', 'Dentist', 'Urology'];

    const handlePillClick = (spec) => {
        if (spec === 'All') setSpecialist('');
        else setSpecialist(spec);
        setPage(1);
    };

    const query = {
        limit: size,
        page,
        ...(sortBy && { sortBy }),
        ...(sortOrder && { sortOrder }),
        ...(sortByGender && { gender: sortByGender }),
        ...(specialist && { specialist: specialist }),
    };

    const priceDebounced = useDebounced({ searchQuery: priceRange, delay: 600 });
    const debouncedSearch = useDebounced({ searchQuery: searchTerm, delay: 600 });

    if (priceDebounced && typeof priceDebounced === 'object' && Object.keys(priceDebounced).length > 0 && priceDebounced.min != null && priceDebounced.max != null) {
        query.min = priceDebounced.min;
        query.max = priceDebounced.max;
    }
    if (debouncedSearch) {
        query.searchTerm = debouncedSearch;
    }

    const resetFilter = () => {
        setPage(1);
        setSize(12);
        setSortBy('');
        setSortOrder('');
        setSearchTerm('');
        setSortByGender('');
        setSpecialist('');
        setPriceRange({});
    };

    const { data, isLoading, isError } = useGetDoctorsQuery(query);
    const doctorsData = Array.isArray(data?.doctors) ? data.doctors : [];
    
    console.log("API response:", data);
    console.log("Doctors count:", doctorsData.length);
    
    const meta = data?.meta;
    const total = meta?.total || 0;

    let content = null;
    if (isLoading) {
        content = (
            <div className="row g-4 mt-2">
                <SkeletonCard count={6} className="col-lg-4 col-md-6" />
            </div>
        );
    } else if (isError) {
        content = <div className="text-center text-danger mt-5">Error loading data.</div>;
    } else if (doctorsData.length === 0) {
        content = (
            <div className="mt-5">
                <EmptyState type="generic" title="No data available" onAction={resetFilter} actionText="Reset Filters" />
            </div>
        );
    } else {
        content = (
            <div className="row g-4 mt-2">
                {doctorsData.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.id}>
                        <SearchContent data={item} />
                    </div>
                ))}
            </div>
        );
    }


    const onPageChange = (newPage, newPageSize) => {
        setPage(newPage);
        if (newPageSize !== size) setSize(newPageSize);
    };

    const currentSpecialty = specialist || 'All';

    return (
        <div className="search-doctor-page">
            <Header />
            <div className="search-doctor-hero">
                <div className="container text-center">
                    <h1>Find Your Doctor</h1>
                    <p>Browse verified specialists by specialty, availability, and fee.</p>
                </div>
            </div>
            
            <div className="container my-5">
                <div className="specialty-pills-row text-center mb-5">
                    {specialtiesList.map(spec => (
                        <button 
                            key={spec}
                            className={`specialty-pill ${currentSpecialty === spec ? 'active' : ''}`}
                            onClick={() => handlePillClick(spec)}
                        >
                            {spec}
                        </button>
                    ))}
                </div>

                <div className="row g-4">
                    <SearchSidebar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        sortByGender={sortByGender}
                        setSortByGender={setSortByGender}
                        specialist={specialist}
                        setSpecialist={setSpecialist}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        setSortBy={setSortBy}
                        setSortOrder={setSortOrder}
                        resetFilter={resetFilter}
                        query={query}
                    />
                    <div className="col-12 col-lg-8 col-xl-9">
                        {content}
                        {!isLoading && !isError && doctorsData.length > 0 && total > 0 && (
                            <div className="search-doctor-pagination mt-5 text-center">
                                <Pagination
                                    current={page}
                                    pageSize={size}
                                    total={total}
                                    onChange={onPageChange}
                                    showSizeChanger
                                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} doctors`}
                                    pageSizeOptions={[6, 12, 18, 24]}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchDoctor;
