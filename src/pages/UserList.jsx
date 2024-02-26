const UserList = () => {
  return (
    <>
      <section className="min-h-screen w-screen flex flex-wrap gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <h3 className=" font-bold text-lg text-primary-text">User List</h3>
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
                {/* <h4 className="text-lg font-bold text-primary-color">244 tk</h4> */}

                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
                </label>
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
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
                </label>
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
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
