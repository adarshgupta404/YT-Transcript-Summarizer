import React, { useState } from "react";
import axios from "axios";
import { linkIcon } from "../assets";
import Typewriter from 'typewriter-effect/dist/core';

const Demo = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [Summary, setSummary] = useState("");
  var typewriter = new Typewriter(document.getElementById('text'), {
    loop: false,
    delay: 75,
  });
  
  typewriter
    .pauseFor(2000)
    .typeString(Summary)
    .start()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://yt-transcript-summarizer.vercel.app/getSummary", {
        url: inputUrl,
      });
      const summary = response.data.data;
      // const summary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laudantium."
      setSummary(summary);
      console.log(summary)
    } catch (error) {
      console.error("Error processing text:", error);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
          action="post"
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Paste the youtube link"
            name="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>
      {/* Display the 'sum' state value here */}
      <div id="text" className="bg-white rounded p-1 my-2 font-semibold"></div>
    </section>
  );
};

export default Demo;
