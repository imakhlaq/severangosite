import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">About Us</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Our NGO, Savera, is committed to making a positive impact in the lives of individuals and
                communities across the globe. We focus on areas such as education, healthcare, and environmental
                conservation to bring about sustainable change.
              </p>
              <p>
                Founded in 2022, our team is made up of passionate individuals from diverse backgrounds
                who share a common goal: to create a better, more equitable world for future generations.
              </p>
              <p>
                We believe that every person deserves the opportunity to thrive, and we strive to empower
                marginalized communities by providing them with the resources and support they need to achieve
                their full potential.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700 mt-2">
                Our mission is to create lasting change in the lives of underserved populations by focusing on
                sustainable programs that drive education, health, and community development.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li className="text-lg text-gray-700">
                  <strong>Integrity:</strong> We maintain the highest ethical standards in all of our work.
                </li>
                <li className="text-lg text-gray-700">
                  <strong>Compassion:</strong> We care deeply about the well-being of others and act with empathy.
                </li>
                <li className="text-lg text-gray-700">
                  <strong>Collaboration:</strong> We work together with local communities, partners, and volunteers.
                </li>
                <li className="text-lg text-gray-700">
                  <strong>Sustainability:</strong> We focus on creating long-term, impactful solutions.
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">Get Involved</h3>
              <p className="text-lg text-gray-700 mt-4">
                Join us in our mission to create a positive change in the world. Your support, whether through
                donations, volunteering, or spreading the word, helps us continue our vital work.
              </p>
              <button

                  className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
    )

};

export default page;
