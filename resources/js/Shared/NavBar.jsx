import React from 'react';
import Link from './NavBar/Link';

export default function NavBar() {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-8">
          <a
            id="brand"
            className="text-dark font-weight-bold text-decoration-none"
            href={route('blog.index')}
          >
            Lenin Paulino
          </a>
        </div>
        <ul className="col-4 d-flex justify-content-between align-items-center list-inline">
          <Link href="home" text="Blog" />
          <Link href="about" text="About" />

          <a
            href="https://twitter.com/leninpaulinon"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              viewBox="0 0 24 20"
            >
              <path
                d="M21.173 3.162A5.038 5.038 0 0023.338.37a9.698 9.698 0 01-3.129 1.223A4.856 4.856 0 0016.616 0c-2.718 0-4.922 2.26-4.922 5.049 0 .396.042.78.126 1.15C7.728 5.988 4.1 3.979 1.67.922a5.14 5.14 0 00-.666 2.54c0 1.751.87 3.297 2.19 4.203a4.834 4.834 0 01-2.23-.63v.062c0 2.447 1.697 4.488 3.951 4.95a4.695 4.695 0 01-1.297.178c-.317 0-.627-.03-.927-.09.626 2.006 2.444 3.466 4.599 3.505A9.722 9.722 0 010 17.733 13.71 13.71 0 007.548 20c9.058 0 14.01-7.692 14.01-14.365 0-.22-.005-.439-.013-.654A10.1 10.1 0 0024 2.368a9.617 9.617 0 01-2.827.794z"
                fill="#A0AEBF"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/leninpaulino"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 12.305c0 5.435 3.438 10.047 8.207 11.674.6.113.82-.267.82-.593 0-.292-.011-1.066-.017-2.093-3.339.744-4.043-1.65-4.043-1.65-.545-1.42-1.332-1.798-1.332-1.798-1.09-.764.083-.749.083-.749 1.203.087 1.837 1.268 1.837 1.268 1.071 1.88 2.809 1.338 3.493 1.022.109-.795.42-1.337.762-1.645-2.665-.31-5.466-1.365-5.466-6.08 0-1.343.467-2.442 1.235-3.302-.123-.311-.535-1.562.117-3.256 0 0 1.008-.33 3.3 1.261a11.241 11.241 0 013.005-.414c1.019.005 2.046.141 3.004.414 2.29-1.592 3.297-1.261 3.297-1.261.654 1.694.242 2.945.119 3.256.77.86 1.234 1.959 1.234 3.302 0 4.726-2.806 5.767-5.48 6.071.431.38.815 1.13.815 2.279 0 1.645-.015 2.971-.015 3.375 0 .329.216.712.825.591 4.765-1.63 8.2-6.239 8.2-11.672C24 5.508 18.627 0 12 0S0 5.508 0 12.305z"
                fill="#A0AEBF"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/leninpaulino"
            className="text-decoration-none"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="#A0AEBF"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </ul>
      </div>
    </header>
  );
}
