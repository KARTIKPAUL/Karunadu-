import React from "react";
import { motion } from "framer-motion";
import HeaderTitle from "../components/Common/HeaderTitle";

const testimonials = [
  {
    id: 1,
    quote:
      "Oltowns has made sourcing products much easier and more cost-effective for our store. The B2B app is a game changer!",
    author: "Retailer, Bengaluru",
  },
  {
    id: 2,
    quote:
      "The quality of the products is exceptional, and the streamlined delivery process ensures we always have fresh stock on hand.",
    author: "Supermarket Chain, Karnataka",
  },
];

const Testimonials = () => {
  return (

    <>

    <hr className="mx-10"/>
    <section className="py-12 bg-customBlue1">

      <div className="container mx-auto px-4">
        <HeaderTitle
              Heading={"What Our Retailers Are Saying?"}
              SubHeading={"Don’t just take our word for it. Hear from our satisfied retailers and partners"}

          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-semibold">– {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;