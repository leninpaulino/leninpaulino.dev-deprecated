import React from 'react';
import Layout from '../Shared/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>

      <div className="row">
        <img
          className="img-fluid rounded-circle"
          alt="Profile pic"
          src="https://secure.gravatar.com/avatar/1e03fb997d888ed65445176b7428190f?s=300"
        />
      </div>
      <div className="row">
        <p className="text-justify post">
          I am a web developer from Dominican Republic, currently working for
          &nbsp;
          <a href="https://vivial.net">Vivial</a>.
        </p>
        <p className="text-justify post">
          I like to describe myself as a passionate, fast learner software
          developer who focuses on developing high-quality software products.
          <br />
          For years I've been working mostly with backend development, ensuring
          the persistence and availability of data.
        </p>
        <p className="text-justify post">
          I started my career as backend developer many years back, using PHP
          and Phalcon. Nowadays I still using PHP, but transitioned myself to
          the awesome Laravel world. For a while now, I've been expanding my
          skillset, to include technologies like Javascript, React, CSS, etc...
        </p>

        <p className="text-justify post">
          I'm always open to making new friends, so feel free to email me
          at&nbsp;
          <a href="mailto:leninpaulinon@gmail.com" target="_blank">
            leninpaulinon@gmail.com
          </a>
          , and you can also find me on: &nbsp;
          <a href="https://twitter.com/leninpaulinon">Twitter</a>,&nbsp;
          <a href="https://github.com/leninpaulino">GitHub</a>,&nbsp;
          <a href="https://linkedin.com/in/leninpaulino">LinkedIn</a>.
          <br />
          You can find a copy of my resumé &nbsp;
          <a href="/leninpaulino-cv.pdf">here</a>.
        </p>
      </div>
    </Layout>
  );
}
