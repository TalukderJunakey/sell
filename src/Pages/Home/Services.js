import { getQueriesForElement } from '@testing-library/react';
import React from 'react';


import airpods from '../../assets/airpod.jpg'
import seven from '../../assets/seven.jpg'
import three from '../../assets/three.jpg'
import u from '../../assets/U.jpg'



import Service from './Service';
const Services = () => {

    const services = [
        {
            id: 1,
            name: 'Apple . Airpods',
            price: '$400',
            color: 'Pre-Owned',
            img: airpods
        },
        {
            id: 2,
            name: 'Apple . IPhone 7 Plus',
            price: '$500',
            color: 'Pre-Owned-Black',
            img: seven

        },
        {
            id: 3,
            name: 'Google Pixel 2 Version Edition',
            price: '$700',
            color: 'Pre-Owned-Black',
            img: three,

        },
        {
            id: 4,
            name: 'Samsung Galaxy S9 Plus',
            price: '$700',
            color: 'Pre-Owned-Black',
            img: u,

        },


    ]
    return (
        <div>
            <div className='my-10'>
                <h1 className=' text-xl font-bold accent'>Featured listings</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;