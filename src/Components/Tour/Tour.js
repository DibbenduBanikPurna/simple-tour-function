import React from 'react';
import TourDetail from './TourDetail';

const Tour = ({tour,removePost}) => {
    return (
        <div>
            <h2>Our Tours</h2>
            {
            tour.map(tour=>{
                return <TourDetail key={tour.id} removePost={removePost} tour={tour} />
            })}
            
        </div>
    );
};

export default Tour;