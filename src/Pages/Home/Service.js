import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Service = ({ service }) => {

    return (
        <div class="card w-30 bg-base-100 shadow-xl width: 8rem;">
            <figure class="px-10 pt-10">
                <img src={service.img} alt="" class="rounded" />
            </figure>
            <div class="card-body">


                <ul class="list-group list-group-flush">
                    <li class="list-group-item  bg-black text-blue-800">{service.price}</li>
                    <li class="list-group-item  font-weight: 300; text-black text-2xl">{service.name}</li>

                    <li class="list-group-item">{service.color}</li>
                    <li class="list-group-item"><FontAwesomeIcon icon={faHeart} />
                        <br />
                        <button>  <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>




                            <label for="my-modal-3" class="">See More</label>

                            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box relative">
                                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    <div className='text-start'>
                                        <h1 class='text-blue bold'>{service.name}</h1>
                                        <h2>{service.color}</h2>
                                    </div>
                                    <div className='text-end mt-3'>
                                        <button class=" btn btn-secondary btn-btn-rounded bg-gray-400  ">Offer</button>  <button class=" btn btn-secondary btn-btn-rounded bg-black text-white ">Checkout</button>
                                    </div>

                                    <img src={service.img} alt="" />
                                    <br />
                                    <button class=" btn btn-secondary btn-btn-rounded bg-blue-400 text-white text-start ">Details
                                    </button>
                                    <br />
                                    <br />
                                    <br />

                                    <ul class="list-group text-start">
                                        <li class="list-group-item list-group-item-primary"> Condition:          Pre-Owned</li>

                                        <li class="list-group-item list-group-item-primary">Color: Black</li>
                                        <li class="list-group-item list-group-item-primary">Storage: 64gb</li>
                                        <li class="list-group-item list-group-item-primary">Provider: Verizon [SM-G965U]</li>
                                        <li class="list-group-item list-group-item-primary">Original box</li>
                                        <li class="list-group-item list-group-item-primary">Listing posted:3 years ago</li>
                                        <li class="list-group-item list-group-item-primary">Listing bumped:1  week ago</li>
                                        <br />
                                        <p>Notes: Very lightly used. Only used to test device for 1 month.</p>
                                    </ul>


                                </div>
                            </div>
                        </button>
                    </li>


                </ul>

            </div>
        </div >
    );
};

export default Service;