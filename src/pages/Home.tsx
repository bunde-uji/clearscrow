// import { useState } from "react";
import customer from "../assets/customer.jpg";
import shopping from "../assets/shopping.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import mockupPic from "../assets/mockup3.png";
import ease from "../assets/call-to-action.png";
import coorperation from "../assets/cooperation.png";
import secure from "../assets/secure.png";
import tracking from "../assets/tracking.png";
import negotiation from "../assets/negotiation.png";
import prevention from "../assets/prevention.png";


function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-teal-800">
        <div className="hero-content text-center font-mono">
          <Navbar />

          <div className="max-w-5xl">
            <h1 className="text-7xl font-bold text-[#FBFFF4] mb-6">
              Revolutionizing the way you buy and sell online securely
            </h1>
            <h3 className="text-2xl text-accent mb-10">
              With Clearscrow, your transactions are protected by airtight
              agreements, giving you peace of mind while navigating the digital
              marketplace.
            </h3>
            <Link
              to="/signup"
              className="py-5 px-12 text-lg rounded-full font-semibold bg-yellow-200 cursor-pointer"
            >
              Get Started!
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2">
          <div className="bg-accent px-20 py-14 text-teal-800 text-xl">
            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={ease} alt="" className="h-10 mr-3" />
                <span>Ease of use</span>
              </h3>
              <p className="text-lg">With Trustap, it only takes a matter of seconds to open your account. Download the app or create an account here and get transacting with Peace of Mind right away.</p>
            </div>

            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={coorperation} alt="" className="h-10 mr-3" />
                <span>Transparency</span>
              </h3>
              <p className="text-lg">Clearscrow’s service is completely transparent. Both parties know exactly what stage the transaction is at, and who needs to do what, so there’s no ambiguity.</p>
            </div>

            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={secure} alt="" className="h-10 mr-3" />
                <span>Risk-free transactions</span>
              </h3>
              <p className="text-lg">Clearscrow’s service is completely transparent. Both parties know exactly what stage the transaction is at, and who needs to do what, so there’s no ambiguity.</p>
            </div>
          </div>

          <div className="w-full h-full relative overflow-hidden">
            <img
              src={shopping}
              alt=""
              className="absolute object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 relative">
          {/* <div> */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={customer}
              alt=""
              className="absolute object-cover w-full h-full"
            />
          </div>
          {/* </div> */}
          <div className="bg-accent px-20 py-14 text-teal-800 text-xl">
            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={tracking} alt="" className="h-10 mr-3" />
                <span>Tracked delivery</span>
              </h3>
              <p className="text-lg">When using Clearscrow’s Online model, both the buyer and the seller can track the package from door to door. With over 640 couriers supported, you can send your package your way.</p>
            </div>

            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={negotiation} alt="" className="h-10 mr-3" />
                <span>Negotiation</span>
              </h3>
              <p className="text-lg">When using Clearscrow’s Face to Face model, the total amount is set after the buyer has inspected the item. The buyer and seller can negotiate in person to set the fairest price possible.</p>
            </div>

            <div className="mb-10">
              <h3 className="flex items-center mb-2 font-medium">
                <img src={prevention} alt="" className="h-10 mr-3" />
                <span>Proactive conflict prevention</span>
              </h3>
              <p className="text-lg">Most escrow-style apps are reactive, you have to lodge a complaint to retrieve your funds if something goes wrong. Clearscrow’s process is entirely preventative, you never lose your money in the first place.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-800 px-20 py-16">
        <h2 className="text-3xl font-semibold text-accent mb-5">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-4">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How does Clearscrow work?
            </div>
            <div className="collapse-content">
              <p>
                Clearscrow utilizes state-of-the-art technological infrastructure to secure payment for goods till they reach the buyer. This transparency builds trust between
                buyers and sellers, fostering a secure and cooperative digital
                marketplace.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What method of payment is allowed?
            </div>
            <div className="collapse-content">
              <p>
                On Clearscrow, buyers can pay for products through a variety of ways including debit/credit cards, bank transfer, or even crypto with stable
                coins such as USDC, USDT etc.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What happens if the buyer does not receive the product or does not
              like the product?
            </div>
            <div className="collapse-content">
              <p>
                In the event where a buyer does not like the product he received
                or claims not to have received it at all, the buyer can open a
                dispute and our moderators will be sure to review the dispute
                between the buyer and the seller to ensure all parties are duly satisfied.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What type of products can i buy on the Clearscrow marketplace?
            </div>
            <div className="collapse-content">
              <p>
                In the event where a buyer does not like the product he received
                or claims not to have received it at all, the buyer can open a
                dispute and our moderators will be sure to review the dispute
                between the buyer and the seller.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can a vendor also buy from other vendors on the platform?
            </div>
            <div className="collapse-content">
              <p>
                Yes. A single person can be a vendor in one transaction and be a buyer in a different transaction. There are no restrictions in this regard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 px-40 py-16">
        <div className="flex justify-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img src={mockupPic} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div>
              <h3 className="text-2xl font-semibold text-teal-800">
                Use Clearscrow in these easy steps
              </h3>
              <ul className="steps steps-vertical">
                <li className="step step-primary">Register/Create an account</li>
                <li className="step step-primary">
                  Verify your account and connect your bank details
                </li>
                <li className="step step-primary">
                  As a vendor, initiate a transaction
                </li>
                <li className="step step-primary">Your buyer makes payment</li>
                <li className="step step-primary">
                  The payment is kept secure by Clearscrow
                </li>
                <li className="step step-primary">Send product to the buyer</li>
                <li className="step step-primary">
                  Buyer receives product and acknowledges receipt
                </li>
                <li className="step step-primary">Withdraw your funds</li>
              </ul>
            </div>
        </div>
      </div>

      <div className="bg-accent flex flex-col items-center p-20 gap-5">
        <h2 className="text-6xl font-semibold text-teal-800">
          Ready to step up?
        </h2>
        <h5 className="text-2xl font-normal">
          Join 100+ businesses and customers who have chosen us to safeguard the
          integrity of their transactions
        </h5>
        <button className="py-4 px-10 text-lg rounded-full font-semibold bg-yellow-300 cursor-pointer">
          Get Started!
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
