import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";

export function Contactus() {
  return (
    <div className="relative ">
      <Container>

        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-0 mx-auto mt-0  lg:grid-cols-2">
          <div className="lg:col-span-1">
            <div
              className="text-secondary-900 "
              style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4896433244967!2d77.6470045!3d13.068124700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19fbd6d5c2a5%3A0x1bc11859d70a3ea7!2s1st%20Cross%20St%2C%20DR%20Bendre%20Layout%2C%20Narayanapura%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1720273684390!5m2!1sen!2sin"
                //   width="600"
                height="400"
                className="w-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="flex flex-col w-full -mt-2 -ml-3 lg:ml-0">
            <div className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 ">
              <div>
                <MapPinIcon className="w-8 text-indigo-500"/>
              </div>
              <div className="ms-4">
                7, KNO-12/10, LBS NAGAR, K. NARAYANAPURA, Kothanur, Bangalore
                North, Bangalore- 560077, Karnataka
              </div>
            </div>
            <div className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 ">
              <span>
                <PhoneIcon className="w-8 text-indigo-500" />
              </span>
              <span className="ms-4">+91 8884646746</span>
            </div>
            <div className="flex px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 ">
              <span>
                <EnvelopeIcon className="w-8 text-indigo-500" />
              </span>
              <span className="ms-4">info@arscon.co.in</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
