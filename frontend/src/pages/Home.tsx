import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/form");
  };

  return (
    <div className="bg-[#090717] text-white min-h-screen py-10 px-5 md:px-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Welcome to UniMarker
      </h1>

      <p className="text-lg md:text-xl mb-8">
        Simplify the process of grade conversion and ensure fair evaluation with UniMarker. Our platform provides a comprehensive solution for converting grades from diverse educational systems, ensuring transparency and consistency in the evaluation process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-semibold">Grade Conversion:</span> Convert grades from various educational systems accurately and efficiently.
            </li>
            <li>
              <span className="font-semibold">Transparent Evaluation:</span> Ensure fairness in the evaluation process by providing converted marks in a standardized format.
            </li>
            <li>
              <span className="font-semibold">User-Friendly Interface:</span> Our platform offers an intuitive interface for easy grade input and conversion.
            </li>
            <li>
              <span className="font-semibold">Customizable Settings:</span> Customize conversion settings to meet specific requirements and preferences.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Who Benefits?</h2>
          <ul className="list-disc pl-4">
            <li>
              <span className="font-semibold">Educators:</span> Ensure standardized evaluation criteria for students from diverse educational backgrounds.
            </li>
            <li>
              <span className="font-semibold">Employers:</span> Evaluate job candidates fairly and accurately, regardless of their educational history.
            </li>
            <li>
              <span className="font-semibold">Students:</span> Simplify the process of applying to educational institutions and job opportunities worldwide.
            </li>
            <li>
              <span className="font-semibold">Institutions:</span> Streamline admission processes and ensure fairness in student selection.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-4">
          Get Started with UniMarker
        </h3>
        <p className="mb-8">
          Experience the convenience and reliability of grade conversion. Sign up now to unlock a fairer evaluation process with UniMarker.
        </p>
        <button
          type="button"
          onClick={handleButton}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-8 py-3"
        >
          Generate Your Unified Marking Result
        </button>
      </div> <header>
      <SignedOut>
        <SignInButton /><p>fhdjsbfhdsagfuhkjdashbfhg</p>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  );
};

export default Home;
