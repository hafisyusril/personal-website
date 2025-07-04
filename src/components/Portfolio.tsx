import Link from "next/link";
import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 md:px-20 py-10">
      {/* Project 1 */}
      <div className="card bg-base-100 w-full shadow-md hover:scale-105 transition-transform duration-300">
        <figure className="relative w-full h-48">
          <Image src="/byu.png" alt="byU logo" fill className="object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Company Profile byU</h2>
          <p>
            byU's interactive and easily accessible company profile website,
            complete with digital service information search features.
          </p>
          <div className="card-actions justify-end">
            <div className="card-actions justify-end">
              <Link href="/portfolio/byu">
                <button className="btn btn-primary">Show Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="card bg-base-100 w-full shadow-md hover:scale-105 transition-transform duration-300">
        <figure className="relative w-full h-48">
          <Image
            src="/blu-logo.png"
            alt="Blu logo"
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Digital Banking Blu</h2>
          <p>
            A digital banking platform with a modern and responsive appearance
            that focuses on user experience and ease of transactions.
          </p>
          <div className="card-actions justify-end">
            <Link href="/portfolio/blu">
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="card bg-base-100 w-full shadow-md hover:scale-105 transition-transform duration-300 md:col-span-2 md:mx-auto md:w-1/2">
        <figure className="relative w-full h-48">
          <Image
            src="/blibli-logo.png"
            alt="Blibli logo"
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Blibli E-commerce</h2>
          <p>
            E-commerce platform with fast product search system and modern and
            responsive interface design.
          </p>
          <div className="card-actions justify-end">
            <Link href={"/portfolio/blibli"}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
