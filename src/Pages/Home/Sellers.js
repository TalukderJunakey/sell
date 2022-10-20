import React from 'react';
import Seller from './Seller';

import five from '../../assets/5.jpg'
import six from '../../assets/six.jpg'
import seven from '../../assets/sevven.jpg'


import profileone from '../../assets/profile1.jpg'
import profiletwo from '../../assets/profile2.jpg'
import profilethree from '../../assets/profile3.jpg'



const Sellers = () => {

    const sellers = [
        {

            id: 1,
            name: '@kate_austin',
            list: '0 listing for sale',
            img: five,
            picture: profileone,


        },

        {

            id: 2,
            name: 'kevin',
            list: '0 listing for sale',
            img: six,
            picture: profiletwo,



        },
        {

            id: 3,
            name: 'michealyoungg',
            list: '0 listing for sale',
            img: seven,
            picture: profilethree,



        },

        {

            id: 3,
            name: 'supdisJason',
            list: '0 listing for sale',
            img: five,
            picture: profileone,



        },


    ]
    return (
        <div>
            <div className='my-10'>
                <h1 className=' text-xl font-bold accent'>Featured Sellers</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    sellers.map(seller => <Seller
                        key={seller.id}
                        seller={seller}


                    ></Seller>)
                }

            </div>
        </div>
    );
};

export default Sellers;