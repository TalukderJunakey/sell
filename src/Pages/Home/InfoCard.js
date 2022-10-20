import React from 'react';





const InfoCard = ({ img, cardTitle, description, bgClass }) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Movie" />


            </figure>
            <div class="card-body text-black">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;