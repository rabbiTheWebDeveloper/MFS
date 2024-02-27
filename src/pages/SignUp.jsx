import { useForm } from "react-hook-form";
import FieldSet from "../components/Form/FieldSet";
import Field from "../components/Form/Field";
import {
  useAgentRegisterMutation,
  useUserRegisterMutation,
} from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
  const [userRegister] = useUserRegisterMutation();
  const [agentRegister] = useAgentRegisterMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      let res;
      if (formData.accountType === "User") {
        res = await userRegister({ ...formData }).unwrap();
      } else {
        res = await agentRegister({ ...formData }).unwrap();
      }
      if (res?.success) {
        toast.success("User registered in successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] tab:w-[500px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-text">
          Registration
        </h2>

        <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
          <FieldSet>
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                {...register("name", { required: "Name is required." })}
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>
            <Field label="Pin number" error={errors.pin}>
              <input
                {...register("pin", {
                  required: "Pin Number is required.",
                })}
                type="password"
                id="pin"
                name="pin"
                placeholder="Enter your pin"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>

            <Field label=" Mobile number" error={errors.mobileNumber}>
              <input
                {...register("mobileNumber", {
                  required: " Phone is required.",
                })}
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>
            <Field label="Enter your Email" error={errors.email}>
              <input
                {...register("email", {
                  required: "Email is required.",
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>
            <Field label="Account Type" error={errors.accountType}>
              <select
                {...register("accountType", {
                  required: "Account Type is required.",
                })}
                name="accountType"
                id="accountType"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              >
                <option value="">Select account type</option>
                <option value="User">User</option>
                <option value="Agent">Agent</option>
              </select>
            </Field>

            {/* <div className="mt-4">
              <label
                htmlFor=""
                className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
              >
                Enter your Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </div> */}

            {/* <div className="mt-4">
              <label
                htmlFor=""
                className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
              >
                Account Type
              </label>

              <select
                name=""
                id=""
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              >
                <option value="">User</option>
                <option value="">Agent</option>
              </select>
            </div> */}
            <Field label="Enter your NID" error={errors.nid}>
              <input
                {...register("nid", {
                  required: "NID is required.",
                })}
                type="text"
                id="nid"
                name="nid"
                placeholder="Enter your NID"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>
            {/* <div className="mt-4">
              <label
                htmlFor=""
                className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
              >
                Enter your NID
              </label>
              <input
                type="text"
                placeholder="Enter your NID"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </div> */}

            <div className="mt-4">
              <button
                type="submit"
                className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
              >
                Registration
              </button>
            </div>
          </FieldSet>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
