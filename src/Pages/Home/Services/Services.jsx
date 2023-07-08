import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../Shared/CommonStyle/SectionTitle';
import SectionHeading from '../../Shared/CommonStyle/SectionHeading';
import Text from '../../Shared/CommonStyle/Text';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${ascending ? "ascending" : "descending"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [ascending, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div className='mt-8'>
            <div className='text-center'>
                <SectionTitle>Our Services</SectionTitle>
                <SectionHeading>Our Service Area</SectionHeading>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eius, nulla quaerat cupiditate alias sunt?<br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, temporibus?</Text>
                <div className="join my-4">
                    <input ref={searchRef} className="input input-bordered focus:outline-0 join-item" placeholder="Search" />
                    <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
                </div>
                <button
                    className='btn btn-link btn-xs'
                    onClick={() => setAscending(!ascending)}
                >{ascending ? "Price: High to Low" : "Price: Low to High"}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;