import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='yt_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/adarshgupta404", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Videos with <br className='max-md:hidden' />
        <span className='orange_gradient '>YouTube Transcript Summarizer</span>
      </h1>
      <h2 className='desc'>
      Simplify YouTube content with Summize: An open-source tool that condenses extensive video transcripts into clear and concise summaries for effortless understanding.
      </h2>
    </header>
  );
};

export default Hero;
