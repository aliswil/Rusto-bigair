import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto_Mono, Anton } from "next/font/google";
import styles from "@/styles/Home.module.css";
import bigair from "../../public/bigair.mp4";
import rustologo from "../../public/rusto-logo1.png";
import bigair2 from "../../public/video2.mp4";
import djknut from "../../public/djknut1.jpg";
import skistua1 from "../../public/bg3.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rusto Big Air</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rusto-logo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            //controls
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source src={bigair} type="video/mp4" />
          </video>
        </div>
        <div className="video-content space-y-2">
          <Image
            className="object-scale-down md:h-auto md:max-w-lg opacity-75 h-48 w-96"
            src={rustologo}
            alt=""
            layout=""
            objectFit=""
          />
          <h1 className="font-bold text-6xl animate-pulse opacity-90">X</h1>
          <h1 className="font-bold text-8xl font-display opacity-70">
            BIG AIR
          </h1>
          <h3 className=" font-bold text-3xl font-display opacity-70">
            07.04.2023
          </h3>
        </div>
      </section>
      <section className="relative  flex flex-col items-center justify-center text-center text-white py-0 px-3 bg-fixed bg-center bg-cover custom-img2">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"></div>
        <div className="video-content space-y-2">
          <h1 className="font-bold text-6xl mt-10 mb-10">Program</h1>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 bg-black bg-opacity-50 p-10">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                11:00 - Start!!!
              </h3>
              <p className="mb-4 text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                Den første pilsen skal knekkes, og Rusto Big Air 2023 er herved
                i gang! Kjøh
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                12:00 - DJ KNUT
              </h3>

              <p className="text-base font-normal text-gray-300  mb-5 flex sm:justify-start justify-center">
                La oss danse til noen frekke tunes fra Trøyms største helt: DJ
                KNUUUUUUUUUT
              </p>
              <Image
                className="object-scale-down md:h-auto md:max-w-lg"
                src={djknut}
                alt=""
                layout=""
                objectFit=""
              />
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                13:00 - First Runs
              </h3>

              <p className="text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                Promillen stiger, og det er klart for de første hoppene!! Praice
                the lord
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                13:45 - Toalettpause
              </h3>

              <p className="text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                Dust, du kan jo dra på dass når du vil. Sålenge du ikke pisser
                ut over hele gulvet.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                14:30 - Mingling
              </h3>

              <p className="text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                Promillen til DJ KNUT har blitt høyrere, noe som resulterer i
                enda frekkere låtvalg.
              </p>
              <p className="text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                La oss danse sammen til noen heftige tunes mens vi lapper sammen
                såra til de skadede!
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                15:50 - CHUG
              </h3>

              <p className="text-base font-normal text-gray-300 flex sm:justify-start justify-center">
                Nå er det ikke lenge igjen før noen skriker "TAXIEN ER HER FOR
                FAEN". Tid for å chugge!
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
              <h3 className="flex items-center mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
                16:00 - Skistua
              </h3>

              <p className="text-base font-normal text-gray-300 mb-5 flex sm:justify-start justify-center">
                Tid for å vise byfolk hvordan man fester. Måtte alle komme inn.
              </p>
              <Image
                className="object-scale-down md:h-auto md:max-w-lg"
                src={skistua1}
                alt=""
                layout=""
                objectFit=""
              />
            </li>
          </ol>
        </div>
      </section>

      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            //controls
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source src={bigair2} type="video/mp4" />
          </video>
        </div>
        <div className="video-content space-y-2">
          <h1 className="font-extrabold text-5xl sm:animate-ping animate-pulse font-display">
            ER NI KLARA!?!?!?!
          </h1>
        </div>
      </section>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-white z-[2]  mt-[-10rem]">
          <h2 className=" text-7xl font-bold animate-bounce">
            Det er hvertfall vi!
          </h2>
        </div>
      </div>
      <footer className=" shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src="/rusto-logo2.png" className="h-8 mr-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Hulbakvegen 168
              </span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://alis.dk/" className="hover:underline">
              developed by Alis W. Wilson
            </a>
            . Logo made by <></>
            <a
              href="https://www.linkedin.com/in/knuttroim/?originalSubdomain=no"
              className="hover:underline"
            >
              Knut Trøym
            </a>
            . Bar owned by Sindre Rusto
          </span>
        </div>
      </footer>
    </>
  );
}
