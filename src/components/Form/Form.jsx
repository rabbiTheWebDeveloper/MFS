import FieldSet from "./FieldSet";
import Field from "./Field";
import { useForm } from "react-hook-form";
import {
  useCashInAgentToUserMutation,
  useCashOutAdminMutation,
  useCashOutAgentMutation,
  useSendMoneyMutation,
} from "../../redux/api/commonApi";
import { toast } from "react-toastify";
import {
  useCashOutAdminTOAgentMutation,
  useCashOutAdminTOUserMutation,
} from "../../redux/api/adminApi";

const Form = ({ tab }) => {
  const [sendMoney] = useSendMoneyMutation();
  const [cashOutAgent] = useCashOutAgentMutation();
  const [cashOutAdmin] = useCashOutAdminMutation();
  const [cashInAgentToUser] = useCashInAgentToUserMutation();
  const [cashOutAdminTOAgent] = useCashOutAdminTOAgentMutation();
  const [cashOutAdminTOUser] = useCashOutAdminTOUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      let res;
      if (tab.length === "") {
        return toast.error("Select an option Tab");
      }
      if (tab === "Send Money") {
        res = await sendMoney({ ...formData }).unwrap();
      } else if (tab === "Cash Out Agent") {
        res = await cashOutAgent({ ...formData }).unwrap();
      } else if (tab === "Cash Out Admin") {
        res = await cashOutAdmin({ ...formData }).unwrap();
      } else if (tab === "Transfer from User") {
        res = await cashInAgentToUser({ ...formData }).unwrap();
      } else if (tab === "Transfer from Agent") {
        res = await cashOutAdminTOAgent({ ...formData }).unwrap();
      } else if (tab === "Transfer from Admin to User") {
        res = await cashOutAdminTOUser({ ...formData }).unwrap();
      }
      if (res?.success) {
        toast.success(res?.message);
      }
      reset();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="">
      <form action="" className="mt-5" onSubmit={handleSubmit(submitForm)}>
        <div className="">
          <FieldSet label={tab}>
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
