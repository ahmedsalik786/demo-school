import React from "react";

function Principal() {
  return (
    <div className=" mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-6">
          From the Principal's Desk
        </h1>
        <p className="italic text-green-700 text-center border-l-4 border-blue-500 pl-4 my-4">
          "Flowers leave part of their fragrance in the hand that bestows them"
        </p>
        <div className="flex flex-wrap md:flex-nowrap items-start mt-6">
          <div className="md:w-1/4 flex justify-centre md:justify-start mt-4 md:mt-0 pr-2 pl-3">
            <img
              src="src/Pictures/picturesoftheweb/Fr Hemanta Pegu.JPG"
              alt="Principal"
              className="w-96 h-40 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 size-max rounded-3xl"
            />
          </div>
          <div className="md:w-3/4 pl-4">
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Holy Name HS School, Cherekapar Sivasagar, has been renowned not
              only for its academic excellence but also for its focus on moral
              and character development, a concept we refer to as "holistic
              formation". Our mission is to provide education that fosters
              intellectual growth, discipline, moral integrity, and social
              responsibility in our students. Education is a lifelong journey,
              and we strive to lay a strong foundation for our students from
              early years through secondary levels.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Our curriculum adheres to the academic framework set by SEBA for
              high school and AHSEC for senior secondary education. We aim to
              cultivate an environment of excellence and dedication, believing
              in every student's potential to grow and excel. We are committed
              to helping our students contribute positively and productively to
              society.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              With the support of the management, staff, students, and our
              dedicated parents, we will continue to thrive and reach new
              heights. Parents play a crucial role in shaping our children's
              future, and their support is invaluable. I am deeply grateful for
              their trust and partnership.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Education is not merely about preparing for future jobs but about
              instilling moral and ethical values that guide one’s life. As
              Mahatma Gandhi wisely said, "The best way to find yourself is to
              lose yourself in the service of others." I am honored to lead this
              esteemed institution with sincerity and dedication, and I promise
              to work diligently to elevate our school to new levels of
              excellence.
            </p>
            <p className="text-gray-700 text-center italic font-semibold mt-6">
              Aristotle once said, "Educating the mind without educating the
              heart is no education at all."
            </p>
          </div>
        </div>
        <footer className="mt-8 flex flex-col items-center italic text-gray-600 text-center">
          <img
            src="https://via.placeholder.com/150" // Replace with the actual URL for the signature
            className="h-12 mb-2"
            alt="Signature"
          />
          <span className="text-lg font-semibold">Fr. Hemanta Pegu</span>
          <span>(Principal)</span>
        </footer>
      </div>
    </div>
  );
}

export default Principal;
