import React from 'react';
import SignUp from '../Signup/SignUp';

const Contacts = () => {
    return (
        <div className='m-6'>
            {/* <h1>Official e-mail</h1>
            <p>bd.destination@gmail.com</p> 
            <h1>Phone number</h1>
            <p>+880101010101</p> */}
            <div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>E-mail</th>
        <th>Phone Number</th>
        <th>Social Media</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td>bd.destination@gmail.com</td>
        <td>+880101010101s</td>
        <td>instagram youtube</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Contacts;