import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "../public/img/logo-new.png";

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
      <nav>
        <div className="header">
          <Image src={logo} width={80} height={80} alt="Logo" />
          <h1>Filiaedison International</h1>
          <h2>Measure, Analyze, Innovate & Improve</h2>
        </div>
      </nav>
      <main>
        <div className="grid">
          <div className="img-container">
            <Image src="/img/3.png" fill alt="Img" />
            <div className="centered">Power</div>
          </div>
          <div className="img-container">
            <Image src="/img/4.webp" alt="Img" fill />
            <div className="centered">Energy Monitoring</div>
          </div>
          <div className="img-container">
            <Image src="/img/5.jpg" fill alt="Img" />
            <div className="centered">Efficiency Improvement Experts</div>
          </div>
          {/* <Image src="/img/4.webp" width={500} height={500} alt="Img"/>
      <Image src="/img/5.jpg" width={500} height={500} alt="Img"/> */}
        </div>
        {isSubmitted ? (
          <div className="center margin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="green"
              class="bi bi-envelope-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
            <h1>Message Received</h1>
            <p>
              Thanks {name}. We have received your mail, we will try to response
              you as soon as possible.
            </p>
            <button onClick={resetForm}>Reset</button>
          </div>
        ) : (
          <form onSubmit={HandleSubmit}>
            <h3 className="center">Contact Us</h3>
            <input
              type="hidden"
              name="access_key"
              value="a191d630-fc98-416e-a064-7622db492db7"
            />
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Name"
            />
            <input
              name="phone"
              type="number"
              className="feedback-input"
              placeholder="Phone No"
            />
            <input
              name="email"
              type="text"
              className="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="text"
              className="feedback-input"
              placeholder="Message"
            ></textarea>
            {isLoading ? (
              <div className="center">
                <span className="loader"></span>
              </div>
            ) : (
              <input type="submit" value="SUBMIT" />
            )}
          </form>
        )}
      </main>
      <footer>
        <small>
          &copy;{new Date().getFullYear()}{" "}
          <strong>Filiaedison International</strong>, All Rights Reserved
        </small>
      </footer>
    </>
  );
}
