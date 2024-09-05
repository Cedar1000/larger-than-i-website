import Image from "next/image";
import Nav from "@/app/component/section/Nav"; // Adjust the path according to your project structure
import { donate, volunteer, sponsor } from "@/public/icons";
import { img1, img2, img3, img4, img5, img6, img7, banner2  } from "@/public/images";
import {events} from "@/app/component/section/dummy"
import Button from "./component/element/Button";
import EventCarousel from "./component/section/Carousel";

const Home = () => {

   const galleryImages = [img2, img3, img2, img1, img5, img4, img5, img7];

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" banner ">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 hidden -z-10 xl:block"></div> */}
        <div className="bg-black bg-opacity-60 ">
          <Nav />
          <div className="text-center  mt-72 ">
            <h1 className="text-white text-[40px] md:w-[633px] md:mx-auto md:text-[50px]">
              Caring for children with special needs
            </h1>
            <div className="mt-7 flex flex-col md:flex-row gap-6 pb-44 justify-center items-center">
              <Button className={`bg-primary hover:bg-opacity-70 `}>
                About Us
              </Button>
              <Button className={`bg-secondary hover:bg-opacity-70  `}>
                About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Call to Action Section */}
      <section className="bg-white py-8 md:py-16 relative">
        <div className="container mx-auto px-[30px] md:px-[100px] lg:px-36 grid relative md:h-[188px] -top-36 grid-cols-1 lg:grid-cols-3 text-center lg:text-start">
          <div className=" bg-accent-green text-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold">Served Over</h2>
            <p className="text-4xl font-bold mt-4">200+</p>
            <p className="mt-2">Children In Nigeria</p>
          </div>
          <div className="bg-accent-green-2 text-black p-6 shadow-lg">
            <h2 className="text-xl font-bold">Donate Money</h2>
            <p className="mt-4 mb-2 w-[218px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              className={` shadow-dark bg-white font-light hover:bg-opacity-70 `}
            >
              Donate Now
            </Button>
          </div>
          <div className="bg-primary text-black p-6 shadow-lg ">
            <h2 className="text-xl font-bold">Be a Volunteer</h2>
            <p className="mt-4 mb-2 w-[218px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button
              className={` shadow-dark font-light bg-white hover:bg-opacity-70 `}
            >
              Be A Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className=" md:mt-36 lg:mt-0 px-8 md:px-[100px] lg:px-36 ">
        <div className="container relative mx-auto px-4 md:px-6 grid gap-20 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center md:pt-36 lg:pt-0 lg:-top-20">
          <div className="grid items-center justify-center">
            <Image
              src={donate}
              alt="Make Donation"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Make Donation</h3>
            <p className="mt-2 text-gray-600">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="grid items-center justify-center">
            <Image
              src={volunteer}
              alt="Become A Volunteer"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Become A Volunteer</h3>
            <p className="mt-2 text-gray-600">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="grid items-center justify-center">
            <Image
              src={sponsor}
              alt="Sponsorship"
              className="place-self-center"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-bold">Sponsorship</h3>
            <p className="mt-2 text-gray-600 ">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col pb-14 md:pb-20 lg:pt-16 mt-[160px] md:mt-[178px] px-8 md:px-[100px] lg:px-36 lg:flex-row justify-center items-center lg:justify-between space-y-16 md:space-y-24 lg:space-y-0 lg:gap-10 xl:gap-20 lg:bg-[#FFF7DD] ">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center lg:text-left">
            About Us
          </h2>
          <p className="text-gray-600 text-center lg:text-left">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center items-center lg:justify-start">
            <Button className={` bg-secondary hover:bg-opacity-70`}>
              See More
            </Button>
            <Button className={` bg-primary hover:bg-opacity-70`}>
              Contact Us
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-6 md:mt-0 ">
          <Image
            src={img1}
            alt="About Us"
            // width={500}
            // height={300}
            className=""
            priority
          />
        </div>
      </section>

      {/* Donation Section */}
      <section className="relative banner2 text-white text-center py-20 xl:pt-56 xl:pb-32 ">
        <div className="absolute inset-0 bg-black opacity-60 -z-20"></div>
        <div className="relative z-10 space-y-4 px-10">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Make A Donation Today
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button
            className={`bg-secondary hover:bg-opacity-50`}
            id={"donate-button"}
          >
            Donate
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="space-y-4 pt-36 md:pt-28 pb-16 md:pb-20">
        <div className=" flex gap-4 items-center px-8 md:px-[73px] ">
          <div className="w-16 h-0 border-secondary border-2"></div>
          <h2 className="md:text-xl md:font-bold font-medium">Our Gallery</h2>
        </div>

        <p className="text-3xl md:text-5xl px-8 md:px-[73px] pb-11 ">
          Take a look at our gallery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[57px] xl:px-0 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-0 justify-center items-center">
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={360}
              height={230}
              className="mx-auto md:mx-0"
            />
          ))}
        </div>
      </section>
      <section className="px-4 py-8 md:px-14 lg:px-36">
        <div className=" flex gap-4 items-center justify-end mb-8">
          <h2 className="md:text-xl md:font-bold font-medium">Events</h2>
          <div className="w-16 h-0 border-secondary border-2"></div>
        </div>
        <EventCarousel head={"Our Latest Events"} events={events} />
      </section>

      {/* Volunteer Section */}
      <section className="relative banner3 text-white mt-16 text-center py-20 xl:pt-56 xl:pb-32 ">
        <div className="absolute inset-0 bg-black opacity-70 -z-20"></div>
        <div className="relative z-10 space-y-4 px-10">
          <h2 className="text-3xl lg:text-5xl font-bold">Want to Volunteer?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button className={`bg-primary hover:bg-opacity-50`}>
            Volunteer
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
