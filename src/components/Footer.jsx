import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import insta from '@/assets/instagram.png';
import facebook from '@/assets/facebook.png';
import twitter from '@/assets/twitter.png';
const Footer = () => {
    return (
        <div className='bg-red-100 '>
            <div className='w-11/12 mx-auto py-10 '>
                <div className='text-center flex flex-col items-center'>
                <div className = "flex gap-4 items-center justify-between">
               
                        <Image src={logo} alt='logo' width={60} height={60}/>
                       <Link href="/" className="text-2xl font-bold">
                         QurbaniHat
                       </Link>
                       </div>

                <p className='text-gray-400'> A modern livestock booking platform where users can
            explore healthy cows and goats for Qurbani easily.</p>
            </div>

             <div className='text-center flex flex-col items-center mt-7'>
                <h2 className=' text-gray-700 font-bold text-2xl mb-4'>Social Links</h2>

                <div className='flex gap-3'>
                    <Image src={insta} alt='instagram' width={30} height={30}/>

                    <Image src={facebook} alt='facebook' width={30} height={30}/>

                    <Image src={twitter} alt='twitter' width={30} height={30}/>

                </div>
             </div>

                </div>
             

            <div className='text-gray-600 mt-5'>
                <hr />
            </div>

            <div className='text-gray-500 flex justify-between mt-3.5 '>
                <p>© 2026 QurbaniHat. All rights reserved.</p>

                <div className='flex justify-between gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            </div>
          
           
        
    );
};

export default Footer;