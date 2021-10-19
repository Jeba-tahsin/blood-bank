import React from "react";
import {FaHeartbeat} from 'react-icons/fa';
import {FaStethoscope} from 'react-icons/fa';
import {BsFillAwardFill} from 'react-icons/bs';

const About = () => {
  return (
    <div>
        <div className='p-5'>
            <h1>Who we are?</h1>
            <p>Blood Buddies is for public donation center with blood donation members in the changing health care system.</p>
            <li>Specialist blood donors and clinical supervision.</li>
            <li>Increasing communication with our members.</li>
            <li>High quality assessment, diagnosis and treatment.</li>
            <li>Examine critically to ensure alignment.</li>
            <li>The extra care of a multi-disciplinary team.</li>
        </div>
      <div className='p-5'>
      <h2>Helpful Information</h2>
      <li>Maintain a healthy iron level by eating iron rich foods.</li>
      <li>Drink an extra 16 oz. of water prior to your donation.</li>
      <li>Avoid alcohol consumption before your blood donation.</li>
      <li>Remember to bring the donor card or national ID/Passport.</li>
      <li>Finally, Try to get a good night sound sleep after donation.</li>
      </div>
      <div className='p-5'>
          <h4>OUR ACHIEVEMENTS</h4>
          <p>We have been working since 1973 with a prestigious vision to helping patient to provide blood.</p>
          <div className='d-flex justify-content-center'>
            <div className='pe-4'>
              <small>Happy soul</small><br />
              <small>2578</small><br />
              <FaHeartbeat></FaHeartbeat>
            </div>
            <div className='pe-4'>
              <small>Happy donar</small><br />
              <small>3235</small><br />
              <FaStethoscope></FaStethoscope>
            </div>
            <div>
              <small>Awards</small><br />
              <small>1953</small><br />
              <BsFillAwardFill></BsFillAwardFill>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
