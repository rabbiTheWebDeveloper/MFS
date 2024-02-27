import { useHistoryQuery } from "../redux/api/commonApi";

const History = () => {
  const {data }=useHistoryQuery()
  const history = data?.data
  return (
    <>
      <section className="min-h-screen w-screen flex flex-wrap gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <h3 className=" font-bold text-lg text-primary-text">
              Payment History
            </h3>
          </div>

          <div className="">
            <ul>
              {
                history?.map((item)=>{
                  return(
                    <li key={item._id} className="flex items-start justify-between border-b border-secondary-text pb-2 mb-2 last:pb-0 last:mb-0 last:border-none">
                    <div className="flex flex-col gap-.5">
                      <h5 className="text-lg text-secondary-text font-semibold">
                       {item?.transactionType}
                      </h5>
                      <p className="text-sm font-bold text-primary-text">{item?.receiver?.name}</p>
                      <p className=" text-sm font-bold text-primary-text">
                       {item?.receiver?.phone}
                      </p>
                    </div>
                    <h4 className="text-lg font-bold text-primary-color">{item?.amount} tk</h4>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
