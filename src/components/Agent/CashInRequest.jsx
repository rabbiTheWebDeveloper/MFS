import { toast } from "react-toastify";
import {
  useCashInRequestListQuery,
  useCashInRequestMutation,
} from "../../redux/api/agentApi";
import FieldSet from "../Form/FieldSet";

const CashInRequest = ({ tab }) => {
  const [cashInRequest] = useCashInRequestMutation();
  const { data } = useCashInRequestListQuery();
  const handleSubmit = async () => {
    try {
      let res;
      if (tab?.length === "") {
        return toast.error("Select an option Tab");
      }
      if (tab === "Cash Request") {
        res = await cashInRequest({ }).unwrap();
      }
      if (res?.success) {
        toast.success(res?.message);
      }
     
    } catch (err) {
      // console.error(err.message);
    }
  };
  return (
    <div className="">
     
        <div className="">
          <FieldSet label={tab}>
          
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                // type="submit"
                className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
              >
                Cash Request 
              </button>
            </div>
          </FieldSet>
        </div>
     

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

export default CashInRequest;
