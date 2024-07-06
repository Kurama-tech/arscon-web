import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Contactus() {
    
    return (
        <div
            id="contact"
            className="relative border-t border-solid border-indigo-500">
            <Container>
                <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-0 mx-auto mt-0 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-2">
                    <div className="lg:col-span-1">
                        <div>
                            {" "}
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                            
                                <img
                                    src={"/img/arscon.png"}
                                    className="w-20 h-auto"
                                    alt="logo"
                                />
                                <span className="font-bold text-indigo-500 dark:text-gray-100">
                                    Arscon Connect
                                </span>
                            </Link>
                        </div>

                        <div className="max-w-md ms-4 text-gray-500 dark:text-gray-400">
                            7, KNO-12/10, LBS NAGAR, K. NARAYANAPURA, Kothanur, Bangalore
                            North, Bangalore- 560077, Karnataka
                        </div>

                        {/* <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44">
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div> */}
                    </div>

                    <div className="flex items-center justify-center w-full -mt-2 -ml-3 lg:ml-0">
                       <div>ddddd</div>
                       <div>dgdeded</div>
                    </div>

                    
                </div>

                <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                    {/* Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Glazestock
          </a> */}
                    © 2024 Arscon Connect. All rights reserved. Made with ❤️ by mamun.ae
                </div>
            </Container>
           
        </div>
    );
}
