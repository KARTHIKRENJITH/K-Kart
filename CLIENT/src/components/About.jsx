import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-20 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          About
        </h1>
        <p>
          redBus is India's largest brand for online bus ticket booking and offers an easy-to-use online bus ticket and train ticket booking service, With over 36 million satisfied customers, 3500+ bus operators to choose from, and plenty of offers on bus ticket booking, redBus makes road journeys super convenient for travelers. A leading platform for booking bus tickets, redBus has been the leader in online bus booking over the past 17 years across thousands of cities and lakhs of routes in India.

          Booking a bus ticket online on redBus app or website is very simple. You can download the redBus app or visit redbus.in and enter your source, destination & travel date to check the top-rated bus services available. You can then compare prices, ratings & amenities, select your preferred seat, boarding & dropping points and make the payment using multiple payment options like UPI, debit or credit card, net banking and more. With redBus you can be assured of safe & secure payment methods and guaranteed travel with the best seat and bus operator of your choice. Once the payment is confirmed, all you have to do is pack your bags and get ready to travel with the m-ticket which you can show to the bus operator on your mobile before boarding the bus. Online bus ticket booking with redBus is that simple!

          redBus also offers other exclusive benefits on online bus tickets like flexible ticket reschedule options, easy & friendly cancellation policies, instant payment refund. With live bus tracking feature, you can plan your travel and never miss the bus. You can get the cheapest bus tickets by availing the best discounts for new & existing customers. With redDeals, you can also get exclusive & additional discounts on your online bus ticket booking. You will get 24X7 customer support on call, chat & help to resolve all your queries in English & local languages.

          redBus offers Primo bus services which are specially curated by redBus with highly-rated buses with best-in-class service. With Primo by redBus, you can be assured of safe, comfortable & on-time bus service at no additional cost. With multiple boarding & dropping points available across all major cities in India, you can select as per your convenience and enjoy a smooth travel experience.

          redBus operates in 6 countries including India, Malaysia, Singapore, Indonesia, Peru, and Colombia and has sold over 220 million bus tickets worldwide through the redBus website and app. With over 36 million satisfied customers. redBus is committed to providing a world-class online bus booking experience to its users.

          redBus offers bus tickets from some of the top private bus operators like Orange Travels, VRL Travels, SRS Travels, Chartered Bus, Praveen Travels and state government bus operators like APSRTC , TSRTC , MSRTC , GSRTC , TNSTC, RSRTC , UPSRTC and more. With redBus, customers have the flexibility of booking bus tickets of different bus types like AC/non-AC, Sleeper, Seater, Volvo, Multi-axle, AC Sleeper, Electric buses and more.
        </p>

        
      </div>
    </div>
  );
};

export default About;
