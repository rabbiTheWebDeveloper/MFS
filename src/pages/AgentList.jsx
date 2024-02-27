import { toast } from "react-toastify";
import {
  useAgentApproveMutation,
  useAgentListQuery,
} from "../redux/api/adminApi";

const AgentList = () => {
  const { data } = useAgentListQuery();
  const agentList = data?.data;
  const [agentApprove] = useAgentApproveMutation();
  const handleChange = async (event, id) => {
    try {
      const { value } = event.target;
      const data = {
        approvalStatus: value,
      };
      const response = await agentApprove({ id, body: data }).unwrap();

      if (response?.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred while processing your request.");
    }
  };
  return (
    <>
      <section className="min-h-screen w-screen flex flex-wrap gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <h3 className=" font-bold text-lg text-primary-text">Agent List</h3>
          </div>

          <div className="">
            <ul>
              {agentList?.map((item) => {
                return (
                  <li
                    key={item._id}
                    className="flex items-start justify-between border-b border-secondary-text pb-2 mb-2 last:pb-0 last:mb-0 last:border-none"
                  >
                    <div className="flex flex-col gap-.5">
                      <h5 className="text-lg text-secondary-text font-semibold">
                        {item?.name}
                      </h5>
                      <p className="text-sm font-bold text-primary-text">
                        {item?.email}
                      </p>
                      <p className=" text-sm font-bold text-primary-text">
                        {item?.mobileNumber}
                      </p>
                    </div>
                    <h4 className="text-lg font-bold text-primary-color">
                      {item?.balance} tk
                    </h4>
                    {/* <h4 className="text-lg font-bold text-primary-color">244 tk</h4> */}

                    <label className="inline-flex items-center cursor-pointer">
                      <select
                        // {...register("accountType", {
                        //   required: "Account Type is required.",
                        // })}
                        onChange={(e) => handleChange(e, item._id)}
                        name="accountType"
                        defaultValue={item?.approvalStatus}
                        id="accountType"
                        className="w-50 py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
                      >
                        <option value="">Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentList;
