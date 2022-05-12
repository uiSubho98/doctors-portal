import React from 'react';
import baby from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row lg:px-36">
    <img className='h-96' src={baby} />
    <div>
      <h1 className="text-5xl lg:ml-32 font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 lg:ml-32">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary  lg:ml-32">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;