import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "react-query";
// import * as apiClient from "../api-client"; // import all the function from api client
// import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
export type RegisterFormData = {
  name: string;
  email: string;
  board: string;
  year_of_passing: number;
  
  math: number;
  science: number;
  english: number;
  total_marks: number;
  regional_language: string;
  regional_language_marks: number;
  computer_science?: number;

  obtain_number: number;
  totoal_number: number

};

const options = [
    { value: "UP Board", label: "UP Board"},
    { value: "ICSE Board", label: "ICSE Board"},
    { value: "CBSE Board", label: "CBSE Board"},
]
const language_options = [
    { value: "Hindi", label: "Hindi"},
    { value: "Tamil", label: "Tamil"},
    { value: "Telgu", label: "Telgu"},
]
const Register = () => {
//   const queryClient = useQueryClient();
  const navigate = useNavigate();
//   const { showToast } = useAppContext();
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

//   const mutation = useMutation(apiClient.register, {
//     onSuccess: async () => {
//       showToast({ message: "Registration Success!", type: "SUCCESS" });
//       queryClient.invalidateQueries("validateToken");
//       navigate("/");
//     },
//     onError: (err: Error) => {
//       showToast({ message: err.message, type: "ERROR" });
//     },
//   });
  const onSubmit = handleSubmit(() => {
    navigate("/result")
    // mutation.mutate(data);

  });
  return (
    <div className="bg-slate-200 p-8 rounded-lg">
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-center">Fill this form and get your Unified Percentage</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
            Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Board
        <Select options={options} />
        {errors.board && (
          <span className="text-red-500">{errors.board.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        year_of_passing
        <input
          type="number"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("year_of_passing", { required: "This field is required" })}
        />
        {errors.year_of_passing && (
          <span className="text-red-500">{errors.year_of_passing.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Math
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("math", { required: "This field is required" })}
        />
        {errors.math && (
          <span className="text-red-500">{errors.math.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Science
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("science", { required: "This field is required" })}
        />
        {errors.science && (
          <span className="text-red-500">{errors.science.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        English
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("english", { required: "This field is required" })}
        />
        {errors.english && (
          <span className="text-red-500">{errors.english.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Social Science
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("total_marks", { required: "This field is required" })}
        />
        {errors.total_marks && (
          <span className="text-red-500">{errors.total_marks.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Regional_language
        {/* <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        /> */}
        <Select options={language_options} />
        {errors.board && (
          <span className="text-red-500">{errors.board.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Regional_language_marks
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("regional_language_marks", { required: "This field is required" })}
        />
        {errors.regional_language_marks && (
          <span className="text-red-500">{errors.regional_language_marks.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Obtain Marks
        <input
          type="number"
          min={0}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("obtain_number", { required: "This field is required" })}
        />
        {errors.obtain_number && (
          <span className="text-red-500">{errors.obtain_number.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Total Marks
        <input
          type="number"
          min={0}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("total_marks", { required: "This field is required" })}
        />
        {errors.total_marks && (
          <span className="text-red-500">{errors.total_marks.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-[#33b249] text-[#F9F9F8] p-2 font-bold hover:bg-[#33c651] text-xl"
        >
          Submit
        </button>
      </span>
    </form>
    </div>
    
  );
};

export default Register;
