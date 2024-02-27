import FieldSet from "./FieldSet";
import Field from "./Field";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useBalanceRequestListQuery,
  useBalanceRequestMutation,
} from "../../redux/api/agentApi";

const RechargeFrom = ({ tab }) => {
  const [balanceRequest] = useBalanceRequestMutation();
  const { data } = useBalanceRequestListQuery();
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
      if (tab === "Balance-recharge") {
        res = await balanceRequest({ ...formData }).unwrap();
      }
      if (res?.success) {
        toast.success(res?.message);
      }
      reset();
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log("Toast", data);
  return (
    <div className="">
      <form action="" className="mt-5" onSubmit={handleSubmit(submitForm)}>
        <div className="">
          <FieldSet label={tab}>
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
            <div className="mt-4">
              <button
                type="submit"
                className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
              >
                Request Money
              </button>
            </div>
          </FieldSet>
        </div>
      </form>

      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-3">Transaction List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.data?.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RechargeFrom;
