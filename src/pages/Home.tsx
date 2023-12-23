// import { useState } from "react";
import customer from "../assets/customer.jpg";
import shopping from "../assets/shopping.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
              With Algo Escrow, your transactions are protected by airtight
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
          <div className="bg-accent p-10 text-teal-800 text-xl">
            <p className="text-2xl mb-3">
              In today's digital age, buyers and sellers face challenges
              establishing trust in their online exchanges. Fraudulent
              activities, delayed deliveries, and payment disputes have become
              common pitfalls. Algo Escrow is the solution to these issues,
              providing a secure space for seamless transactions
            </p>
            <p className="text-2xl mb-3">
              Algo Escrow employs cutting-edge smart contract technology to
              create a binding agreement between buyers and sellers. Funds are
              held securely in escrow until both parties fulfill their
              obligations, eliminating the risk of fraud and ensuring a fair
              deal.
            </p>
            <p className="text-2xl mb-3">
              Our platform operates on a decentralized network, promoting
              transparency throughout the entire transaction process. Every step
              is recorded on the blockchain, providing an immutable and
              accessible ledger for both buyers and sellers.
            </p>
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
          <div className="bg-accent p-5 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-teal-800">
              How it works
            </h3>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Register/Create an account</li>
              <li className="step step-primary">
                Verify your account and connect your wallet
              </li>
              <li className="step step-primary">
                As a vendor, initiate a transaction
              </li>
              <li className="step step-primary">Your buyer makes payment</li>
              <li className="step step-primary">
                The payment is kept secure by the Algo Escrow smart contract
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

      <div className="bg-teal-800 px-20 py-16">
        <h2 className="text-3xl font-semibold text-accent mb-5">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-4">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How does Algo Escrow work?
            </div>
            <div className="collapse-content">
              <p>
                Algo Escrow utilizes a decentralized network to record each
                transaction on the blockchain, creating an accessible,
                tamper-proof ledger. This transparency builds trust between
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
                On Algo Escrow, buyers can pay for products with Algo or stable
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
                between the buyer and the seller.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What type of products can i buy on the Algo Escro marketplace?
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
                In the event where a buyer does not like the product he received
                or claims not to have received it at all, the buyer can open a
                dispute and our moderators will be sure to review the dispute
                between the buyer and the seller.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-20 py-10">
        <div>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
        <div>

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
