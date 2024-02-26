const AgentList = () => {
  return (
    <>
      <section className="min-h-screen w-screen flex flex-wrap gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <h3 className=" font-bold text-lg text-primary-text">
              Agent List
            </h3>
          </div>

          <div className="">
            <ul>
              <li className="flex items-start justify-between border-b border-secondary-text pb-2 mb-2 last:pb-0 last:mb-0 last:border-none">
                <div className="flex flex-col gap-.5">
                  <h5 className="text-lg text-secondary-text font-semibold">
                    Receive Money
                  </h5>
                  <p className="text-sm font-bold text-primary-text">Rasel</p>
                  <p className=" text-sm font-bold text-primary-text">
                    01683311917
                  </p>
                </div>
                <h4 className="text-lg font-bold text-primary-color">244 tk</h4>
              </li>
              <li className="flex items-start justify-between border-b border-secondary-text pb-2 mb-2">
                <div className="flex flex-col gap-.5">
                  <h5 className="text-lg text-secondary-text font-semibold">
                    Receive Money
                  </h5>
                  <p className="text-sm font-bold text-primary-text">Rasel</p>
                  <p className=" text-sm font-bold text-primary-text">
                    01683311917
                  </p>
                </div>
                <h4 className="text-lg font-bold text-primary-color">244 tk</h4>
              </li>
              <li className="flex items-start justify-between ">
                <div className="flex flex-col gap-.5">
                  <h5 className="text-lg text-secondary-text font-semibold">
                    Receive Money
                  </h5>
                  <p className="text-sm font-bold text-primary-text">Rasel</p>
                  <p className=" text-sm font-bold text-primary-text">
                    01683311917
                  </p>
                </div>
                <h4 className="text-lg font-bold text-primary-color">244 tk</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentList;