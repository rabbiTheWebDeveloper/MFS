import Field from "../components/Form/Field";
import FieldSet from "../components/Form/FieldSet";
import { useForm } from "react-hook-form";
import { useUserLoginMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { storeUserInfo } from "../services/auth.service";

const SignIn = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();
  const submitForm = async (formData) => {
    console.log(formData);
    try {
      const res = await userLogin({ ...formData }).unwrap();
      if (res?.status) {
        toast.success("User logged in successfully!");
        navigate("/");
      }
      storeUserInfo("token", res?.token);
      storeUserInfo("user", JSON.stringify(res?.data));
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] tab:w-[500px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-text">
          Login
        </h2>

        <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
          <FieldSet>
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
            <div className="mt-4">
              <button
                type="submit"
                className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
              >
                Login
              </button>
            </div>
          </FieldSet>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
