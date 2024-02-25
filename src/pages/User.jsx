import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { TbDeviceMobileDollar } from "react-icons/tb";

const User = () => {
  return (
    <>
      <section className="min-h-screen w-screen flex  gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <h3 className=" font-bold text-lg text-primary-text">
              Your Balance <span className="text-primary-color">200Tk</span>
            </h3>

            <a
              href="/history"
              className="flex flex-col items-center gap-1 hover:text-primary-color"
            >
              <MdManageHistory className="text-2xl" />
              <span className="text-xs font-medium">History</span>
            </a>
          </div>

          {/* tab */}
          <div className="grid grid-cols-3 tab:grid-cols-5 items-center gap-3">
            {/* item */}
            <div className="text-center cursor-pointer">
              <div className="bg-primary-color text-white p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <IoIosSend />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Send Money
              </h5>
            </div>
            {/* item */}
            <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <GiReceiveMoney />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Cash out
              </h5>
            </div>
            {/* item */}
            <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <TbDeviceMobileDollar />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Recharge
              </h5>
            </div>
            {/* item */}
            <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <GiTakeMyMoney />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Add Money
              </h5>
            </div>
            {/* item */}
            <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <SiMoneygram />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Transfer
              </h5>
            </div>
          </div>

          {/* tab form  */}
          <div className="">
            <form action="" className="mt-5">
              <div className="">
                <div className="mt-4">
                  <label
                    htmlFor=""
                    className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
                  >
                    Mobile number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor=""
                    className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor=""
                    className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
                  >
                    Pin number
                  </label>
                  <div className="flex items-center justify-between gap-3">
                    <input
                      type="text"
                      className="w-full py-2 px-3 text-center rounded-md text-sm tab:text-base border border-secondary-text"
                    />
                    <input
                      type="text"
                      className="w-full py-2 px-3 text-center rounded-md text-sm tab:text-base border border-secondary-text"
                    />
                    <input
                      type="text"
                      className="w-full py-2 px-3 text-center rounded-md text-sm tab:text-base border border-secondary-text"
                    />
                    <input
                      type="text"
                      className="w-full py-2 px-3 text-center rounded-md text-sm tab:text-base border border-secondary-text"
                    />
                    <input
                      type="text"
                      className="w-full py-2 px-3 text-center rounded-md text-sm tab:text-base border border-secondary-text"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
