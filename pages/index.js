import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../public/img/logo-new.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setName(data.get("name"));
    var object = {};
    data.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          setSubmitted(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const resetForm = () => {
    setLoading(false);
    setSubmitted(false);
  };
  return (
    <>
      <Head>
        <title>Filiaedison International</title>
        <meta
          name="description"
          content="Measure, Analyze, Innovate & Improve"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div id="background" className="w-full bg-cover bg-center">
          <div className="flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 py-20">
            <div className="text-center">
              <div className="container mx-auto px-4">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                  <Image src={Logo} alt="logo" width={80} />
                  <h2 className="mb-6 mt-8 text-4xl font-bold text-gray-100 lg:text-6xl">
                    Filia Edison International
                  </h2>
                  <p className="mx-auto mb-10 max-w-3xl text-2xl text-gray-100">
                    Measure, Analyze, Innovate & Improve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mr-8 mt-4 grid gap-4 lg:grid-cols-3">
        <article className="mt-15 group relative isolate mx-4 flex w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60">
          <img
            src="/img/air.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:bg-gradient-to-t group-hover:from-gray-800 group-hover:via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white transition duration-200 group-hover:-translate-y-4">
            Industrial Equipments
          </h3>
        </article>
        <article className="mt-15 group relative isolate mx-4 flex w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60">
          <img
            src="img/efficient.png"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:bg-gradient-to-t group-hover:from-gray-800 group-hover:via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white transition duration-200 group-hover:-translate-y-4">
            Energy Monitoring & Efficiency Improvement
          </h3>
        </article>
        <article className="mt-15 group relative isolate mx-4 flex w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60">
          <img
            src="img/robo.png"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:bg-gradient-to-t group-hover:from-gray-800 group-hover:via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white transition duration-200 group-hover:-translate-y-4">
            Digitalisation & Automation
          </h3>
        </article>
      </div>

      <div className="container mx-auto my-10 max-w-2xl px-10">
        <h3 className="my-4 text-2xl font-bold">Contact Us</h3>

        {isSubmitted && (
          <div className="my-4 rounded-md bg-indigo-600 p-4 text-white">
            <p>
              Hello {name} ! Your message has been received. We will get back to
              you shortly.
            </p>
          </div>
        )}

        <form onSubmit={HandleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="ceb365a4-9a99-466f-98d2-23f4ced37a6c"
          />

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone No"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            className="w-full rounded-lg border px-4 py-2"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="w-full rounded-lg border px-4 py-2"
          ></textarea>

          {isLoading ? (
            <button
              type="submit"
              disabled
              className="flex items-center rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="mr-2 h-5 w-5 animate-spin text-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Submitting...
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Submit
            </button>
          )}
        </form>
      </div>

      <footer className="container mx-auto px-4 py-2 text-center">
        <span>
          ©2024 <span className="font-bold">Filiaedison International</span>,
          All Rights Reserved
        </span>
      </footer>
    </>
  );
}
