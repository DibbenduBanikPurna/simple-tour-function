import React from 'react';
import { useState } from 'react/cjs/react.development';

const TourDetail = ({tour,removePost}) => {
    const [readMore,showReadMore]=useState(false)
    return (
        <div className="col-md-5 m-auto">
            <div className="card mt-3">
                <img className="img-fluid" src={tour.image} alt=""/>
                <div className="card-body">
                    <h4 style={{textAlign:'left',color:'#3C3E48'}}>{tour.name} <span style={{float:'right',color:'#6DAEDD'}} >${tour.price}</span></h4>
                    <h4></h4>
                    <p style={{color:'#616B76',textAlign:'justify'}}>{readMore ? tour.info:tour.info.substring(0,200)}.....
                    <button className="btn btn-sm" style={{backgroundColor:'#E1EDFF'}} onClick={()=>showReadMore(!readMore)}>{readMore? 'show less' : 'read-more'}</button>
                    </p>
                    <button onClick={()=>removePost(tour.id)} className="btn btn-outline-danger btn-lg">Not Interted</button>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;