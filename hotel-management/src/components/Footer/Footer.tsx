import Link from 'next/link';
import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          4B Hotel
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>Ho Chi Minh City</p>

            <div className="flex items-center py-4">
              <BsTelephoneOutbound />
              <p className="mr-2">&nbsp;0903.762.463</p>
            </div>
            <div className="flex items-center py-4">
              <BiMessageDetail />
              <p className="mr-2">Contact me.</p>
            </div>
          </div>

          <div className="flex-1 text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get In Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of Service</p>
            <p>Cutomer Assistance</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Dinning Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Event</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0">

      </div>
    </footer>
  );
};

export default Footer;
