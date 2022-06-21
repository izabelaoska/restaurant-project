import React from "react"

export const Philosophy = () => {
  return (
    <div className="container pb-5 mx-auto mt-20 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] py-14 lg:gap-20">
        <div className="container top-0 bottom-0 flex flex-col lg:relative">
          <img
            className=" lg:w-[330px] lg:h-[495px] lg:absolute lg:top-16 "
            src={
              "https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-gXmCinze3k8-unsplash-370x555.jpg"
            }
          />
          <img
            className="object-cover lg:w-[420px] lg:h-[550px] lg:absolute bottom-4 left-28 mb-4"
            src={
              "https://patiotime.loftocean.com/wp-content/uploads/2022/03/chef-1-550x687.jpg"
            }
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-5 lg:text-xl text-[#DD5903]">
            QUALITY & BALANCE
          </h2>
          <h1 className="pb-2 mb-6 text-2xl t-2 lg:text-6xl philosophy-title">
            OUR FOOD PHILOSOPHY
          </h1>
          <p className="mb-8 text-sm text-left md:text-md md:text-justify lg:text-justify lg:text-lg">
            Simple and balanced. Alexander Petillo brings
            together flavors and specialties from Italy and
            beyond to create his own culinary world, full of
            surprising artistry.
          </p>
          <button className="px-7 py-2 mb-4 text-white  bg-[#DD5903] hover:scale-110 duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  )
}
