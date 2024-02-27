import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUserInfo } from "../services/auth.service";
import { useUserLoginMutation, useAdminLoginMutation, useAgentLoginMutation } from "../redux/api/authApi";
import Field from "../components/Form/Field";
import FieldSet from "../components/Form/FieldSet";

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [userLogin] = useUserLoginMutation();
  const [adminLogin] = useAdminLoginMutation();
  const [agentLogin] = useAgentLoginMutation();

  const loginMutations = {
    User: userLogin,
    Admin: adminLogin,
    Agent: agentLogin,
  };

  const submitForm = async (formData) => {
    try {
      const { accountType, ...rest } = formData;
      const res = await loginMutations[accountType]({ ...rest }).unwrap();
      if (res?.status) {
        toast.success(res?.message);
        navigate("/");
      }
      storeUserInfo("token", res?.token);
      storeUserInfo("user", JSON.stringify(res?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const renderInputField = (name, label, type = "text") => (
    <Field label={label} error={errors[name]}>
      <input
        {...register(name, { required: `${label} is required.` })}
        type={type}
        id={name}
        name={name}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
      />
    </Field>
  );

  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] tab:w-[500px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-text">Login</h2>
        <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
          <FieldSet>
            {renderInputField("mobileNumber", "Mobile number", "text")}
            <Field label="Account Type" error={errors.accountType}>
              <select
                {...register("accountType", { required: "Account Type is required." })}
                name="accountType"
                id="accountType"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              >
                <option value="">Select account type</option>
                <option value="User">User</option>
                <option value="Agent">Agent</option>
                <option value="Admin">Admin</option>
              </select>
            </Field>
            {renderInputField("pin", "Pin number", "password")}
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
        <div className="text-center mt-5">
          <Link to="/signup" className="text-primary-color hover:text-hover-color">Create an account</Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
