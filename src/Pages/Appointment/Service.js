import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card w-[369px] mx-auto lg:max-w-lg shadow-xl text-center">
        <div className="card-body">
          <h2 className="card-title mx-auto text-secondary ">{name}</h2>
          <p>
              {
                  slots.length>0 ? <span>{slots[0]}</span>:<span className='text-red-500'>Try Another Date</span>
              }
          </p>
          <p>{slots.length}  {slots.length > 1?'spaces':'space'} available </p>
          <div className="card-actions justify-center">
            <label onClick={()=>setTreatment(service)} disabled={slots.length === 0}  htmlFor="booking-modal" className="btn btn btn-secondary uppercasetext-white modal-button">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;