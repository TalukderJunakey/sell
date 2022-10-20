import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import List from './List';
import Sellers from './Sellers';
import Services from './Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Sellers></Sellers>
            <Services></Services>
            <br />
            <List></List>
            <br />
            <Footer></Footer>


        </div>
    );
};

export default Home;