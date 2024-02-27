import FieldSet from "./FieldSet";
import Field from "./Field";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    // const user = {email: 'x@example.com', password: '123456789'}

    // const found = formData.email === user.email && formData.password === user.password;

    // if (!found) {
    //     setError("root.random", {
    //         message: `User with email '${formData.email}' is not found`,
    //         type: "random"
    //     })
    // }
  };
  return (
    <div className="">
      <form action="" className="mt-5" onSubmit={handleSubmit(submitForm)}>
        <div className="">
          <FieldSet label="Mobile Recharge">
            <Field label=" Mobile number" error={errors.receiverId}>
              <input
                {...register("receiverId", {
                  required: "Receiver Phone is required.",
                })}
                type="number"
                id="receiverId"
                name="receiverId"
                placeholder="Enter mobile number"
                className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
              />
            </Field>

            <Field label="Amount" error={errors.amount}>
              <input
                 {...register("amount", {
                  required: "Receiver Phone is required.",
                })}
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter your amount "
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
                Pay
              </button>
            </div>
          </FieldSet>
        </div>
      </form>
    </div>
  );
};

export default Form;
