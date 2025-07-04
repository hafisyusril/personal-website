import React from "react";

const Experience = () => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="text-sm text-gray-400 mb-1">
              May 2021 - February 2023
            </time>
            <div className="text-2xl font-semibold text-green-500 mb-3">
              Homecredit Indonesia
            </div>
            <h3 className="text-lg font-semibold text-[#D6E1FF] mb-3">
              Fullstack Web Developer
            </h3>
            <p className="text-[#D6E1FF]">
              Build clean, responsive, and interactive web interfaces using
              modern frameworks such as React.js or Next.js, ensuring optimal
              performance across devices. Create scalable backend systems with
              technologies like Node.js, Express.js, and MongoDB, including
              RESTful or GraphQL APIs to support frontend applications.
            </p>
          </div>
          <hr className="bg-green-500" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="text-sm text-gray-400 mb-1">
              January 2020 - Februay 2021
            </time>
            <div className="text-2xl font-semibold text-green-500 mb-3">
              Unilever Indonesia
            </div>
            <h3 className="text-lg font-semibold text-[#D6E1FF] mb-3">
              Backend Developer
            </h3>
            <p className="text-[#D6E1FF]">
              Design, develop, and maintain efficient RESTful or GraphQL APIs
              that serve as the communication bridge between the frontend and
              backend. Design and optimize databases (e.g., MySQL, PostgreSQL,
              MongoDB) and configure server environments to ensure secure and
              reliable application performance.
            </p>
          </div>
          <hr className="bg-green-500" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="text-sm text-gray-400 mb-1">September 2019 - December 2019</time>
            <div className="text-2xl font-semibold text-green-500 mb-3">
              Deliveree
            </div>
            <h3 className="text-lg font-semibold text-[#D6E1FF] mb-3">
              Backend Engineer Intern
            </h3>
            <p className="text-[#D6E1FF]">
              Collaborate with senior developers to build and test RESTful APIs
              using technologies like Node.js, Express.js, and PostgreSQL. Help
              maintain and update database schemas, and document backend
              workflows and data structures for better team collaboration.
            </p>
          </div>
          <hr className="bg-green-500" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="text-sm text-gray-400 mb-1">May 2019 - August 2019</time>
            <div className="text-2xl font-semibold text-green-500 mb-3">
              Lalamove
            </div>
            <h3 className="text-lg font-semibold text-[#D6E1FF] mb-3">
              Frontend Developer Intern
            </h3>
            <p className="text-[#D6E1FF]">
              Collaborate with designers and senior developers to build
              responsive and accessible UI components using technologies like
              React.js, Next.js, and Tailwind CSS. Help identify and fix UI
              bugs, optimize performance, and improve overall user interaction
              across web pages and components.
            </p>
          </div>
          <hr className="bg-green-500" />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
