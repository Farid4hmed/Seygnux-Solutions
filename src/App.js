
function App() {
  return (
    <div className="h-screen w-screen">
      {/* navbar */}
      <nav className=" h-20 bg-white fixed w-screen min-w-[45rem] py-6 mr-0 flex justify-between items-center">
        <h1 className="px-14 font-bold text-4xl font-sans">M</h1>
        <ul className=" flex font-mono pr-8">
          <li className="pr-8 hover:cursor-pointer hover:font-bold">Sample</li>
          <li className="pr-8 hover:cursor-pointer hover:font-bold">Features</li>
          <li className="pr-8 hover:cursor-pointer hover:font-bold">Layouts</li>
          <li className="pr-8 hover:cursor-pointer hover:font-bold">Our Shop</li>
          <li className="pr-8 hover:cursor-pointer hover:font-bold">Buy Theme</li>
          <li className="pr-8 hover:cursor-pointer"><svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9EAAB7" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.0001 14L11.1001 11.1" stroke="#9EAAB7" stroke-linecap="round" stroke-linejoin="round" />
          </svg></li>
        </ul>
      </nav>

      {/* First Part */}
      <div className="h-100 w-screen min-w-[700px] bg-[url('https://wallpaperaccess.com/full/1204963.jpg')]">
        <div className="h-full w-full min-w-screen pt-56 bg-opacity">
          <div className=" w-1/4 md:ml-48 ml-20">
            <h1 className="text-white text-6xl font-bold">We crush minimal design.</h1>
            <p className="text-white pt-3 text-sm leading-6"><strong>MONOCHROME</strong> is a creative agency based in Chicago. We developed the Genesis Framework and build mobile-optimized themes for WordPress.</p>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="h-100 min-w-[700px] w-screen flex pt-10 md:pl-44 pl-20 pr-20  flex-col justify-evenly">
        <div>
          <p className="text-5xl font-bold">We build experience.</p>
          <p className="pt-3 text-lg leading-6 tracking-wider font-light">A minimalist approach is the only way to design a website.</p>
        </div>
        <div className="h-0.1 w-7 bg-black border-black"></div>


        <div className="h-1/2 w-10/12 min-w-[20rem] md:flex grid grid-flow-col md:flex-row md:justify-between justify-between">
          <div className="w-1/4 pb-5 pl-2 min-w-[10rem] flex flex-col bg-white items-start justify-evenly">
            <div>
              <h1 className=" text-xl tracking-tight font-semibold mb-2">DESIGN</h1>
              <p className="leading-6 font-light tracking-wide">With an emphasis on typography, white-space and mobile-optimized design, your website will look absolutely breathtaking.</p>
            </div>
            <button className="h-11 w-32 rounded bg-black flex items-center justify-center hover:w-36 hover:h-12">
              <p className="text-white text-sm tracking-tight font-light">LEARN MORE</p>
            </button>
          </div>

          <div className="w-1/4 pb-5 pl-2 min-w-[10rem] flex flex-col bg-white items-start justify-evenly">
            <div>
              <h1 className=" text-xl tracking-tight font-semibold mb-2">CONTENT</h1>
              <p className="leading-6 font-light tracking-wide">Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve.</p>
            </div>
            <button className="h-11 w-32 rounded bg-black flex items-center justify-center hover:w-36 hover:h-12">
              <p className="text-white text-sm tracking-tight font-light">LEARN MORE</p>
            </button>
          </div>

          <div className="w-1/4 pb-5 pl-2 min-w-[10rem] flex flex-col bg-white items-start justify-evenly">
            <div>
              <h1 className=" text-xl tracking-tight font-semibold mb-2">STRATEGY</h1>
              <p className="leading-6 font-light tracking-wide">We help creative entrepreneurs build their digital business by focusing on three key elements of a successful online platform.</p>
            </div>
            <button className="h-11 w-32 rounded bg-black flex items-center justify-center hover:w-36 hover:h-12">
              <p className="text-white text-sm tracking-tight font-light">LEARN MORE</p>
            </button>
          </div>
        </div>
      </div>

      {/* Third Part */}
      <div className="h-99 w-screen min-w-[700px] bg-[url('https://wallpaperaccess.com/full/1204963.jpg')]">
        <div className="h-full w-full min-w-screen md:pl-48 pl-20 bg-opacity flex flex-col justify-evenly">
          <div>
            <p className="text-5xl text-white font-bold">We design brands.</p>
            <p className="pt-3 text-lg text-white leading-6 tracking-wider font-light">A simple look is all you need to crush your competition.</p>
          </div>
          <div className="h-0.1 w-9 bg-white border-white"></div>

          <div className="w-10/12 grid md:grid-cols-6 grid-cols-3 mb-4">
            <p className="text-white text-xl pb-5 font-sans">les aveneris</p>
            <p className="text-white text-xl pb-5 font-serif">avec'simple</p>
            <p className="text-white text-xl pb-5 font-mono">WHITESPACE</p>
            <p className="text-white text-xl pb-5 font-sans">m*n*mal*ism</p>
            <p className="text-white text-xl pb-5 font-serif">barcelona33</p>
            <p className="text-white text-xl pb-5 font-mono">smoothVANILLA</p>
          </div>
        </div>
      </div>

      {/* Forth Part */}
      <div className="md:h-101 md:w-screen w-[700px] bg-white md:pl-48 pl-20 bg-opacity flex flex-col justify-around mt-10">
        <div className="mb-2">
          <p className="text-5xl text-black font-bold mt-10">We create stories.</p>
          <p className="pt-3 text-lg text-black leading-6 tracking-wider font-light">A killer narrative will turn your readers into raving fans.</p>
        </div>
        <div className="h-0.1 w-9 bg-black border-black mb-10"></div>
        <div className="w-11/12 grid md:grid-cols-2 grid-cols-1">
          <div className="mb-20">
          <img className="max-h-[17rem] w-10/12 hover:cursor-pointer" src="https://www.latuilerie.com/wp-content/uploads/2018/09/pexels-photo-262367-1.jpeg" alt="bwimg" />
          <p className=" text-lg tracking-tighter font-medium mb-1 pt-4">OVERCOMING CREATIVE BLOCK</p>
          <p className="text-gray-800 font-extralight">Brian Gardner. May 1, 2017</p>
          </div>
          <div className="mb-20">
          <img className="max-h-[17rem] w-10/12 hover:cursor-pointer" src="https://usabilitygeek.com/wp-content/uploads/2016/04/less-is-more-minimalist-web-design.jpg" alt="bwimg" />
          <p className=" text-lg tracking-tighter font-medium mb-1 pt-4">WHY COMMUNICATION IS KEY</p>
          <p className="text-gray-800 font-extralight">Brian Gardner. May 1, 2017</p>
          </div>
          <div className="mb-20">
          <img className="max-h-[17rem] w-10/12 hover:cursor-pointer" src="https://images.squarespace-cdn.com/content/v1/52593244e4b0e9bbe4c579d5/1640159937549-26PNMEZ279V9OY2AMEZ3/murray-hotel-minimalist-architecture-black-white-9142.jpg?format=1500w" alt="bwimg" />
          <p className=" text-lg tracking-tighter font-medium mb-1 pt-4">THE PATH OF LEAST RESISTANCE</p>
          <p className="text-gray-800 font-extralight">Brian Gardner. May 1, 2017</p>
          </div>
          <div className="mb-20">
          <img className="max-h-[17rem] w-10/12 hover:cursor-pointer" src="https://img.freepik.com/premium-photo/black-white-abstract-highrise-building-gray-background-with-blur-architectural-abstract-minimalism-highrise-building-black-white-skyscraper-gray-background-3d-render_507676-1181.jpg" alt="bwimg" />
          <p className=" text-lg tracking-tighter font-medium mb-1 pt-4">HOW TO REACH NEW HEIGHTS</p>
          <p className="text-gray-800 font-extralight">Brian Gardner. May 1, 2017</p>
          </div>
          </div>
      </div>

        {/* Fifth Part */}
      <div className="h-32 w-screen min-w-[700px] bg-blue-400 flex justify-center items-center">
        <p className="text-white font-normal text-2xl tracking-wide mr-4">Hit the ground running with a minimalist look.</p>
        <button className="h-11 w-32 rounded bg-white flex items-center justify-center hover:w-36 hover:h-12">
              <p className="text-black text-sm tracking-tight font-light">LEARN MORE</p>
            </button>
      </div>

      {/* Footer */}
      <footer className="h-44 w-screen min-w-[700px] bg-black flex justify-center items-center">
          <div className="h-36 flex flex-col items-center mb-3">
          <h1 className="pt-5 font-semibold text-5xl font-sans text-white mb-3">M</h1>
          <p className="text-white mb-2 font-light">Handcrafted with ♥︎ in Chicago. Powered by StudioPress</p>
          <div className="flex justify-evenly items-center">
                <p className="text-white hover:cursor-pointer font-light">FACEBOOK</p>
                <div className="h-0.1 w-4 bg-gray-500 border-gray-500"></div>
                <p className="text-white hover:cursor-pointer font-light">TWITTER</p>
                <div className="h-0.1 w-4 bg-gray-500 border-gray-500"></div>
                <p className="text-white hover:cursor-pointer font-light">INSTAGRAM</p>
          </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
