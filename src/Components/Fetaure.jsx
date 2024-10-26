import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
const Fetaure = ({features}) => {
    return (
        <div className='mt-2'>
            <p className='flex gap-2 items-center'> <IoIosCheckmarkCircle className='text-2xl' /> {features}</p>
        </div>
    );
};

export default Fetaure;