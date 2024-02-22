import { useState, useEffect } from "react";
import "./index.css";

import "/public/listening.png";

function App() {

  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);


  const getStart = async () => {
    setIsLoading(true)
    const data = await fetch(
      `https://v1.nocodeapi.com/codedevta/spotify/wohCohWFpBssKuLL/usersTop?type=tracks&perPage=20&page=1`
    );
    const convertedData = await data.json();
    
    setTracks(convertedData.items)
    setIsLoading(false)
  };
  
  useEffect(() => {
    getStart();
  }, [])
  



  const getTracks = async () => {
    setIsLoading(true)
    const data = await fetch(
      `https://v1.nocodeapi.com/codedevta/spotify/wohCohWFpBssKuLL/search?q=${keyword}&type=track&perPage=20&page=1`
    );
    const convertedData = await data.json();
    console.log(convertedData.tracks.items);
    console.log();
    setTracks(convertedData.tracks.items);
    setIsLoading(false)
  };

  return (
    <>
      <div
        className="grid relative bg-gradient-to-br from-pink-700 to-purple-900 w-full grid-rows-[auto,1fr]  "
        id="circles-container"
      >
        <navbar>
          <header className=" z-50 fixed  w-full bg-black py-2 shadow-md">
            <div className="container mx-auto px-4  flex items-center">
              {/* logo */}
              <div className="mr-auto pl-1 md:pl-10 md:w-48 flex-shrink-0 flex flex-row items-center  gap-2">
                <img
                  className=" h-10 md:h-14 brightness-125 "
                  src="listening.png"
                  alt=""
                />
                <p className="text-xl md:text-4xl font-raleway font-bold text-white px-1">
                  Groovy
                </p>
              </div>
              {/* search */}
              <div className=" ml-3 w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100   rounded-md flex xl:flex items-center ">
                <input
                  value={keyword}
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
                  className=" p-2 w-32  mr-2  border-gray-300 bg-transparent font-semibold text-sm pl-4 md:w-full"
                  type="text"
                  placeholder="I'm searching for ..."
                />
                <button onClick={getTracks} className=" pl-2 md:pl-0 md:pr-2">
                  <svg
                    className=" h-5 pr-0  md:pr-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="https://www.buymeacoffee.com/ganesh_sharmaz"
                className="hidden md:block"
                target="_blank"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  className=" pl-4 w-[217px] h-[50px]"
                />
              </a>

              {/* buttons */}
              <nav className=" hidden md:block  ">
                <ul className=" px-3 flex items-center mr-4 lg:mr-6 xl:mr-8">
                  <li className="p-2">
                    <a
                      href=""
                      className=" text-white  hover:text-sky-400 transition"
                    >
                      <svg
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        className=" mb-1 scale-75 w-8 hover:scale-125 duration-200 hover:stroke-white"
                        // className="h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      href=""
                      className=" text-white  hover:text-sky-400 transition"
                    >
                      <svg
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        className=" mb-1 scale-75 w-8 hover:scale-125 duration-200 hover:stroke-white"
                        // className="h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className=" pt-2 pl-2">
                    <a
                      href="https://github.com/Ganesh-Sharmaz/"
                      className=" text-white  hover:text-sky-400 transition"
                    >
                      <button>
                        <svg
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                          class=" mb-1 scale-100 w-8 hover:scale-125 duration-200 hover:stroke-white"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </button>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </navbar>

        <div
          className=" hidden md:block absolute w-72 h-72 bg-purple-900 opacity-5 rounded-full  animate-wiggle "
          style={{ top: "20%", left: "20%" }}
        ></div>

        {/* Circle 2 */}
        <div
          className="hidden md:block absolute w-64 h-64 bg-purple-400 opacity-5 rounded-full  animate-tiggle"
          style={{ top: "50%", left: "50%" }}
        ></div>

        <div className={`${isLoading ? '': "hidden"}  grid gap-3 grid-cols-1 overflow-auto `}>
          <div className="flex space-x-2 justify-center items-center h-svh  dark:invert overflow-auto">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className=" mt-20 sm:mt-24 m-4 grid gap-3 grid-cols-1 sm:grid-cols-5">
          {/* <div
            className={`${
              expanded ? "h-40" : "h-16"
            } transition-all duration-500 md:h-[300px] bg-red-400 rounded shadow-xl`}
          >
            1
            <button
              onClick={toggleHeight}
              className="sm:hidden mt-4 px-4 py-2 bg-gray-800 text-white rounded"
            >
              {expanded ? "Shrink" : "Expand"}
            </button>
          </div> */}

          {/* CARD 1 */}
          {tracks.map((element) => {
            return (
              <div
                key={element.id}
                className="bg-gray-900 shadow-lg rounded p-3"
              >
                <div className="group relative">
                  <img
                    className="w-full md:w-72 flex overflow-hidden rounded"
                    src={element.album.images[1].url}
                    alt="images"
                  />
                </div>
                <div className=" focus-within:shadow-2xl p-5 content-center flex flex-col items-center justify-center">
                  <h3 className="text-white text-xl">{element.name}</h3>
                  <p className="text-gray-400 ">
                    Artist: {element.album.artists[0].name}
                  </p>
                  <p className="text-gray-400 pb-3">
                    Release Date: {element.album.release_date}
                  </p>
                  <audio
                    id="audio-player"
                    controls
                    src={element.preview_url}
                  ></audio>
                </div>
              </div>
            );
          })}

          {/* END OF CARD 1 */}
        </div>
        <footer className="bg-black h-12 sticky bottom-0  md:hidden flex justify-center items-center">
          <nav className=" ">
            <ul className=" px-3 flex items-center  lg:mr-6 xl:mr-8 scale-75">
              <li className="px-3 ">
                <a
                  href=""
                  className=" text-white  hover:text-sky-400 transition"
                >
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    className=" mb-1 scale-75 w-8 hover:scale-125 duration-200 hover:stroke-white"
                    // className="h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </a>
              </li>
              <li className="px-3">
                <a
                  href=""
                  className=" text-white  hover:text-sky-400 transition"
                >
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    className=" mb-1 scale-75 w-8 hover:scale-125 duration-200 hover:stroke-white"
                    // className="h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </li>
              <li className=" px-3">
                <a
                  href="https://github.com/Ganesh-Sharmaz/"
                  className=" text-white  hover:text-sky-400 transition"
                >
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class=" mb-1 scale-100 w-8 hover:scale-125 duration-200 hover:stroke-white"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/ganesh_sharmaz"
                  className=" w-[217px] md:hidden"
                  target="_blank"
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                    alt="Buy Me A Coffee"
                    className=" pl-4 h-[40px]"
                  />
                </a>
              </li>
            </ul>
          </nav>
          h1
        </footer>
      </div>
    </>
  );
}

export default App;
