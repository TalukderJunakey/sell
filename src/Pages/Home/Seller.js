import React from 'react';

const Seller = ({ seller }) => {
    return (
        <div class="card w-55 h-30  shadow-xl image-full">



            <figure className=''><img src={seller.img} alt="" /></figure>


            <div class="card-body">
                <h2 class="card-title">{seller.name}</h2>
                <p>{seller.list}</p>


                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={seller.picture} />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Seller;