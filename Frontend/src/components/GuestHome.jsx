import React from "react";
import AnimatingSpan from "./LandingPage/AnimatingSpan";
import { Link } from "react-router-dom";
import Feature from "./LandingPage/Feature";

const GuestHome = () => {
  return (
    <>
      <main className="size-full">
        <section className="1st bg-gradient-to-r from-[#5f78d4] to-[#3657cd] grow w-full h-screen hero">
          <div className="flex justify-between mt-7 items-center h-3/5">
            <div className=" h-1/2 w-1/2 mx-10 flex justify-center">
              <img
                className=" h-[550px] w-[550px]"
                src="https://cycure-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbanner%2Fbanner_img02.png&w=1920&q=75"
                alt="image"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-start mt-48 pr-5 pt-28">
              <p className=" text-[80px] leading-none font-bold text-white  ">
                Defend Your <br /> <span className="text-[#F9C747]">Business</span> Against <br />{" "}
                the Counterfeit <br /> Threats
              </p>
              <p className="text-white my-8 text-xl font-bold">
                CPV is Vision Project for Verify Counterfeit Products in the Market Based on <br />
                <span className="text-[#F9C747]">Blockchain Technology</span> to Protect Brand
                Products and Give a trustable Trading Market
              </p>

              <Link to={"/scan"} className=" z-0">
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all duration-[1000ms] bg-[#F9C747] tracking-wide group py-3 px-5">
                  <span className="w-0 h-0 rounded-3xl bg-[#00172F] absolute -bottom-5 -left-5 ease-out duration-[800ms] transition-all group-hover:w-64 group-hover:h-64 -z-1"></span>
                  <span className="w-full text-lg flex items-center justify-center text-black transition-colors duration-[350ms] ease-in-out group-hover:text-white z-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-qr-code-scan mr-3 mb-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
                      <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                      <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                      <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                      <path d="M12 9h2V8h-2z" />
                    </svg>
                    <span className=" mt-1">SCAN QR CODE</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="uppercase flex justify-center items-center space-x-36 h-2/5 pb-12">
            <div className="text-yellow-500 flex items-center text-6xl">
              <div>100+</div>
              <div className="text-white text-sm ml-2">
                <div className="">worldwide</div> clients
              </div>
            </div>
            <div className="text-yellow-500 flex items-center text-6xl">
              <div>150+</div>
              <div className="text-white text-sm ml-2">
                <div>cybersecurity</div> experts
              </div>
            </div>
            <div className="text-yellow-500 flex items-center text-6xl">
              <div>99%</div>
              <div className="text-white text-sm ml-2">
                <div>retention</div> rate
              </div>
            </div>
          </div> */}
        </section>

        <section className="2nd bg-[#00172F] text-white p-16 ">
          <div className="head text-center mt-16 font-bold">
            <div className="flex flex-col">
              <h1 className="text-5xl">
                Effective Approach for Your <br /> Product Authenticity
              </h1>
            </div>
          </div>
        </section>

        <section className="3rd text-white h-fit bg-[#00172F] flex items-center justify-center mb-32">
          <div className="flex flex-wrap w-[67%]">
            {/* 1th */}
            <div className="w-1/2 text-right p-2 border-r-2 border-b-2 border-gray-800 pb-12 flex items-start justify-center">
              <div>
                <p className="text-2xl font-bold py-2">QR Code Based Validation </p>
                <p className="py-3 text-gray-400">
                  Verify Product Authenticity and get instant Product details by Scanning Unique QR
                  Code attached to the Product.
                </p>
                <a
                  href="#"
                  className="font-semibold uppercase underline underline-offset-[4px] transition-all duration-[500ms] hover:text-[#F9C747]"
                >
                  learn more
                </a>
              </div>
              <div className="p-4 rounded-lg ml-12 mr-12 mt-3 bg-[#3141533b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F9C747"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-qr-code"
                >
                  <rect width="5" height="5" x="3" y="3" rx="1" />
                  <rect width="5" height="5" x="16" y="3" rx="1" />
                  <rect width="5" height="5" x="3" y="16" rx="1" />
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                  <path d="M21 21v.01" />
                  <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                  <path d="M3 12h.01" />
                  <path d="M12 3h.01" />
                  <path d="M12 16v.01" />
                  <path d="M16 12h1" />
                  <path d="M21 12v.01" />
                  <path d="M12 21v-1" />
                </svg>
              </div>
            </div>

            {/* 2th */}
            <div className="w-1/2 text-left p-2 border-b-2 border-gray-800 flex items-start justify-center pb-12">
              <div className="p-4 rounded-lg ml-12 mr-12 mt-3 bg-[#3141533b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F9C747"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-badge-check"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold py-2">Verified Brands and Products</p>
                <p className="py-3 text-gray-400">
                  All brands are required to review their identity and register themselves, ensuring
                  that their products are genuine.
                </p>
                <a
                  href="#"
                  className="font-semibold uppercase underline underline-offset-[4px] transition-all duration-[500ms] hover:text-[#F9C747] "
                >
                  learn more
                </a>
              </div>
            </div>

            {/* 3th */}
            <div className="w-1/2 text-right p-2 border-r-2  border-gray-800 pt-12 flex items-start justify-center">
              <div>
                <p className="text-2xl font-bold py-2">Utilizes Blockchain Technology</p>
                <p className="py-3 text-gray-400">
                  Powered by Blockchain Technology ensures Authenticity and Integrity of Product in
                  more Secured and Decentralized manner.
                </p>
                <a
                  href="#"
                  className="font-semibold uppercase underline underline-offset-[4px] transition-all duration-[500ms] hover:text-[#F9C747]"
                >
                  learn more
                </a>
              </div>

              <div className="p-4 rounded-lg ml-12 mr-12 mt-3 bg-[#3141533b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F9C747"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </div>

            {/* 4th */}
            <div className="w-1/2 text-left p-2 pt-12 flex items-start justify-center">
              <div className="p-4 rounded-lg ml-12 mr-12 mt-3 bg-[#3141533b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F9C747"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shield-plus"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>

              <div>
                <p className="text-2xl font-bold py-2">Phishing Attack Protection</p>
                <p className="py-3 text-gray-400">
                  By utilizing our platforms, Customers can be completely protected from phishing
                  attacks and obtain accurate results.
                </p>
                <a
                  href="#"
                  className="font-semibold uppercase underline underline-offset-[4px] transition-all duration-[500ms] hover:text-[#F9C747]"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="4th bg-[#00172F] grow">
          <div className="flex">
            <div className=" h-1/2 w-1/2 mx-10 flex justify-center">
              <img
                className=" w-[500px]"
                src="https://cycure-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fothers%2Fsecurity_img.png&w=1920&q=75"
                alt="banner"
              />
            </div>
            <div className="flex flex-col text-white w-1/2 items-center">
              <div className="text-5xl">
                <h1 className="font-bold pr-9">Powerful Anti-Counterfeiting Mechanism</h1>
              </div>
              <div className="pt-10 text-gray-400 mr-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat accusamus
                ea distinctio iusto eaque dignissimos iure dolore minima hic?
              </div>
              <div className="flex mt-10 mr-32">
                <ul className="text-lg mr-8 font-semibold ">
                  <Feature title="Managed Web Application" />
                  <Feature title="Blockchain Technology" />
                  <Feature title="Secure Chain Transactions" />
                  <Feature title="User Convenient" />
                  <Feature title="Manageable Dashboard" />
                </ul>
                <ul className="text-lg font-semibold">
                  <Feature title="Verified Brands" />
                  <Feature title="Unique QR Codes" />
                  <Feature title="Phishing Proof Solution" />
                  <Feature title="Secure APIs" />
                  <Feature title="Trusted Trade Market" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="5th bg-[#00172F] mt-24 py-10">
          <div className="bg-[#3657cd] py-4 rotate-[-3deg] flex">
            <AnimatingSpan />
            <AnimatingSpan />
            <AnimatingSpan />
          </div>
        </section>

        <section className="6th bg-[#00172F] text-white py-14">
          <div className="py-20 w-full">
            <h1 className="text-center font-semibold text-5xl">
              Become Totally Secured by Following 3 Steps
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="h-[420px] w-[420px] flex flex-col items-center justify-center">
              <img
                className="h-[260px] w-[260px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/steps_01.png"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-5 ">Verify Your Brand</div>
              <div className="text-gray-400 text-lg text-center w-[260px] capitalize">
                SignUp and prove your Brand's Identity to get verified.
              </div>
              <div className="text-yellow-500 text-lg text-center uppercase py-5">step one</div>
            </div>
            <div className="h-[420px] w-[420px] flex flex-col items-center justify-center">
              <img
                className="h-[260px] w-[250px] "
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/steps_02.png"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-5 ">Register Your Products</div>
              <div className="text-gray-400 text-lg text-center w-[260px] capitalize">
                Give necessary Product details and confirm the Transactions on Chain
              </div>
              <div className="text-yellow-500 text-lg text-center uppercase py-5">step two</div>
            </div>
            <div className="h-[420px] w-[420px] flex flex-col items-center justify-center">
              <img
                className="h-[260px] w-[250px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/steps_03.png"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-5 ">
                Attach QR Code on Products
              </div>
              <div className="text-gray-400 text-lg text-center w-[260px] capitalize">
                Get QR Codes by Registering Product and attach it to your products
              </div>
              <div className="text-yellow-500 text-lg text-center uppercase py-5">step three</div>
            </div>
          </div>
        </section>

        <section className=" 7th w-screen bg-[#00172F] overflow-hidden relative">
          <h1 className="text-5xl text-white text-center my-12 ">Experience the Working Demo</h1>
          <div className="px-40">
            <video
              id="videoElement"
              className="w-full h-[720px] object-cover"
              src="https://youtu.be/VgDytOsG6Xo?si=3lJhZbV0foZjAlxz"
              controls
            ></video>
          </div>
        </section>

        <section className="8th bg-[#00172F] text-white mb-16">
          <div className="py-20 w-full">
            <h1 className="text-center font-semibold text-5xl">
              Get the Latest Articles and News From Our Blog
            </h1>
          </div>
          <div className="flex justify-center items-center  ">
            <div className=" flex flex-col items-start justify-center px-4">
              <img
                className="h-[300px] w-[300px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/standard_thumb01.jpg"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-4 ">
                <a href="#">Verify Your Brand</a>
              </div>

              <div className="text-yellow-500 text-lg text-center uppercase py-4">step one</div>
            </div>
            <div className="flex flex-col items-start justify-start px-4">
              <img
                className="h-[300px] w-[300px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/standard_thumb02.jpg"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-4 ">
                <a href="#">Register Your Products</a>
              </div>

              <div className="text-yellow-500 text-lg text-center uppercase py-4">step one</div>
            </div>
            <div className=" flex flex-col items-start justify-center px-4">
              <img
                className="h-[300px] w-[300px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/standard_thumb03.jpg"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-4 ">
                <a href="#">Attach QR Code on Product</a>
              </div>

              <div className="text-yellow-500 text-lg text-center uppercase py-4">step one</div>
            </div>
            <div className=" flex flex-col items-start justify-center px-4">
              <img
                className="h-[300px] w-[300px]"
                src="https://themedox.com/cycure/wp-content/uploads/2023/03/standard_thumb04.jpg"
                alt=""
              />
              <div className="font-semibold text-2xl text-center py-4 ">
                <a href="#">Choose Security Package</a>
              </div>

              <div className="text-yellow-500 text-lg text-center uppercase py-4">step one</div>
            </div>
          </div>
        </section>

        <hr />

        <footer className=" text-white pt-16 mb-10">
          <div className="container mx-[100px] px-4">
            <div className="flex flex-wrap -mx-4 ">
              <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                <h4 className="text-xl mb-4 font-semibold">Quick Links</h4>
                <ul className="uppercase">
                  <Link to={"/"}>
                    <li>
                      <span className="text-gray-300 hover:text-yellow-500">Home</span>
                    </li>
                  </Link>
                  <li>
                    <Link to={"/scan"}>
                      <span className="text-gray-300 hover:text-yellow-500">SCAN</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <span className="text-gray-300 hover:text-yellow-500">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>
                      <span className="text-gray-300 hover:text-yellow-500">Signup</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-300">
                  Email: cpv.gec@gmail.com
                  <br />
                  Phone: +123456789
                </p>
              </div>
              <div className="w-full md:w-1/3  mb-6 md:mb-0">
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <ul className="flex justify-start">
                  <li className="hover:scale-110 hover:text-yellow-500 cursor-pointer pt-1 mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </li>
                  <li className="hover:scale-110 hover:text-yellow-500 cursor-pointer pt-1 mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                  <li className="hover:scale-110 hover:text-yellow-500 cursor-pointer pt-1 mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default GuestHome;
