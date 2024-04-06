// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LatestDestinationCard";

import { useNavigate } from "react-router-dom";

const Home = () => {
  // const { data: hotels } = useQuery("fetchQuery", () =>
  //   apiClient.fetchHotels()
  // );

  // const topRowHotels = hotels?.slice(0, 2) || [];
  // const bottomRowHotels = hotels?.slice(2) || [];
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/form");
  };
  return (
    <div className=" h-full">
      <div className="mb-2 mt-2">
        <h1 className="text-5xl text-center font-bold mb-5">
          Welcome to UniMarker
        </h1>

        <p>
          Unlock the Power of Unified Grading Are you tired of struggling to
          understand and compare grades across different educational systems?
          Say goodbye to confusion and hello to simplicity with UniMarker, your
          one-stop destination for converting grades seamlessly, regardless of
          the board, state, or country.
        </p>
      </div>

      <div className="mb-2 mt-2">
        <h3 className="font-bold">Why UniMarker?</h3>
        <p>
          <ul>
            <li>
              <b className="font-semibold">Universal Compatibility:</b> Whether
              you're a student, parent, educator, or employer, our platform
              caters to everyone, ensuring that grades are easily translatable
              across diverse educational systems.
            </li>
            <li>
              <b className="font-semibold">Accuracy Guaranteed:</b> Our
              sophisticated algorithms and extensive data ensure precise grade
              conversions, so you can trust the results every time.
            </li>
            <li>
              <b className="font-semibold">Effortless and Intuitive:</b> With a
              user-friendly interface, converting grades has never been easier.
              Simply input your grades, select the desired system, and voila!
              Instantly view the equivalent grades in other systems.
            </li>
            <li>
              <b className="font-semibold">Comprehensive Coverage:</b> We cover
              a wide range of educational systems, including but not limited to
              international boards, national curricula, and state-specific
              grading systems, providing you with comprehensive solutions.
            </li>
          </ul>
        </p>
      </div>
      <div className="mb-2 mt-2">
        <h3 className="font-bold">How It Works?</h3>
        <p>
          <ul>
            <li>
              <b className="font-semibold">Input Grades:</b> Enter your grades
              in the provided fields.
            </li>
            <li>
              <b className="font-semibold">Select System:</b> Choose the grading
              system you wish to convert from.
            </li>
            <li>
              <b className="font-semibold">View Equivalents:</b> Instantly see
              the equivalent grades in other systems.
            </li>
            <li>
              <b className="font-semibold">Explore Details:</b> Dive deeper into
              grading scale comparisons and educational system nuances.
            </li>
          </ul>
        </p>
      </div>

      <div className="mb-2 mt-2">
        <h3 className="font-bold">Who Benefits from UniMarker?</h3>
        <p>
          <ul>
            <li>
              <b className="font-semibold">Students:</b> Simplify the process of
              applying to universities or institutions abroad by accurately
              translating your grades into the required format.
            </li>
            <li>
              <b className="font-semibold">Parents:</b> Easily track and
              understand your child's academic progress, even if they are
              studying in a different educational system.
            </li>
            <li>
              <b className="font-semibold">Educators:</b> Facilitate seamless
              communication and understanding among students from diverse
              backgrounds with our unified grading system.
            </li>
            <li>
              <b className="font-semibold">Employers:</b> Assess the
              qualifications of job candidates with confidence, regardless of
              their educational background or origin.
            </li>
          </ul>
        </p>
      </div>

      <div className="mb-2 mt-2">
        <h3 className="font-bold">Join the UniMarker Community Today</h3>
        <p>
          Empower yourself with the tools and resources needed to navigate the
          complexities of global education effortlessly. Whether you're
          embarking on a new academic journey, evaluating candidates for
          employment, or simply seeking clarity in the educational landscape,
          [Your Website Name] is here to support you every step of the way.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Get Started Now</h3>
        <p>
          Experience the convenience and reliability of unified grading. Sign up
          for free today and unlock a world of educational possibilities with
          UniMarker.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleButton}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Home;
