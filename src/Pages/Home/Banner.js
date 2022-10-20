import React from 'react';
import cover from "../../assets/cover.png";
import apple from '../../assets/apple.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Banner.css'
import { } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">

                    <div class="row pt-10 pl-5 bg-dark bg-gradient d-flex ">
                        <div class="col-lg-7 mr-5 text-end my-5.5 ">

                            <div className='align-items-center'>

                                <h1 class='text-light fw-bold text-2xl'>Buy and Sell Mobile Devices</h1>

                                <br />
                                <div>
                                    <button
                                        class=" btn btn-secondary btn-btn-rounded  ">
                                        <FontAwesomeIcon icon="fa-brands fa-apple" />
                                        App Store
                                    </button>

                                </div>



                                <div >
                                    <img src={cover} class="d-block w-75" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Banner;