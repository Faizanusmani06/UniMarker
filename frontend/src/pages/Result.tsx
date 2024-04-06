import TotalScore from "../components/TotalScore";

const Result = () => {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="flex flex-row border-solid border-black border-8 p-4 rounded-md bg-slate-200">
        <div className="flex flex-col w-1/3 border-r-8 border-solid border-black justify-between p-4">
          <h1 className="text-4xl font-bold mb-4">Percentile</h1>
          <p className="text-4xl font-bold mb-4 text-green-800">94</p>
        </div>
        <div className="flex flex-col w-1/3 p-4 border-r-8 border-solid border-black justify-between">
          <h1 className="text-4xl font-bold mb-4">Percentage</h1>
          <p className="text-4xl font-bold mb-4 text-green-800">97</p>
        </div>
        <div className="flex flex-col w-1/3 p-4 justify-between">
          <h1 className="text-4xl font-bold mb-4">
            Avg. of (Math, English, Science)
          </h1>
          <p className="text-4xl font-bold mb-4 text-green-800">94</p>
        </div>
      </div>
      <TotalScore />
    </div>
  );
};

export default Result;