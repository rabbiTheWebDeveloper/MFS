import { toast } from "react-toastify";
import {
  useWithdrowAminListQuery,
  useWithdrowApproveMutation,
} from "../../redux/api/adminApi";

const AdminWidthForm = () => {
  const { data } = useWithdrowAminListQuery();
  const [withdrowApprove] = useWithdrowApproveMutation();
  // const  rechargeList = data.data

  const handleChange = async (event, id) => {
    try {
      const { value } = event.target;
      const data = {
        withdrawStatus: value,
      };
      const response = await withdrowApprove({ id, body: data }).unwrap();

      if (response?.success) {
        toast.success(response.message);
      }
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error occurred:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="">
      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-3">Transaction List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.data?.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      onChange={(e) => handleChange(e, transaction._id)}
                      name="accountType"
                      defaultValue={transaction?.withdrawStatus}
                      id="accountType"
                      className="w-50 py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
                    >
                      <option value="">Select</option>
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.amount}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(transaction.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminWidthForm;
