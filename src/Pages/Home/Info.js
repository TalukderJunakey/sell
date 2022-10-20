import React from 'react';
import InfoCard from './InfoCard';


import doller from "../../assets/doller.jpg";
import right from "../../assets/rightt.png";
import profile from "../../assets/profile.png";

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  my-5'>
            <InfoCard cardTitle="Transact safely" bgClass="bg-[#3A4256]" description="Slang works as a money middleman to ensure you get exactly what you ordered." img={doller}></InfoCard>
            <InfoCard cardTitle="Join a vibrant community" bgClass="bg-[#3A4256]" description="Top retailers and individual sellers communicate and transact on Slang." img={right}></InfoCard>
            <InfoCard cardTitle="Sell like a pro" bgClass="bg-[#3A4256]" description="Open your Slang storefront and build your brand to enjoy increased visibility and sales." img={profile}></InfoCard>
        </div>
    );
};

export default Info;