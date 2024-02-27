import { GiReceiveMoney, } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
// import { SiMoneygram } from "react-icons/si";
// import { TbDeviceMobileDollar } from "react-icons/tb";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Balance from "../components/Balance";
import { isRole } from "../services/auth.service";
import { useState } from "react";

const User = () => {
  const [tab , setTab ] =useState("Send")
  const role = isRole();
  return (
    <>
      <section className="min-h-screen w-screen flex  gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <div className="mb-7 flex items-center justify-between">
            <Balance />
            {role === "Admin" && (
              <>
                <Link
                  to="/users-list"
                  className="flex flex-col items-center gap-1 hover:text-primary-color"
                >
                  <FaRegUserCircle className="text-2xl" />
                  <span className="text-xs font-medium">User</span>
                </Link>
                <Link
                  to="/agents-list"
                  className="flex flex-col items-center gap-1 hover:text-primary-color"
                >
                  <MdOutlineRealEstateAgent className="text-2xl" />
                  <span className="text-xs font-medium">Agent</span>
                </Link>
              </>
            )}

            <Link
              to="/history"
              className="flex flex-col items-center gap-1 hover:text-primary-color"
            >
              <MdManageHistory className="text-2xl" />
              <span className="text-xs font-medium">History</span>
            </Link>
          </div>

          {/* tab */}
          <div className="grid grid-cols-3 tab:grid-cols-5 items-center gap-3">
            {/* item */}
            <div className="text-center cursor-pointer" onClick={() => setTab("Send Money")}>
              <div className={`${tab === "Send Money" ? "bg-primary-color text-white" : "bg-light-color text-primary-color "} p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}>
                <IoIosSend />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Send Money
              </h5>
            </div>
            {/* item */}
            <div className="text-center cursor-pointer" onClick={() => setTab("Cash Out Agent")}>
              <div className={`${tab === "Cash Out Agent" ? "bg-primary-color text-white" : "bg-light-color text-primary-color "} p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}>
                <GiReceiveMoney />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Cash out Agent
              </h5>
            </div>
            <div className="text-center cursor-pointer" onClick={() => setTab("Cash Out Admin")}>
              <div className={`${tab === "Cash Out Admin" ? "bg-primary-color text-white" : "bg-light-color text-primary-color "} p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}>
                <GiReceiveMoney />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Cash out Admin
              </h5>
            </div>
            {/* item */}
            {/* <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <TbDeviceMobileDollar />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Recharge
              </h5>
            </div> */}
            {/* item */}
            {/* <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <GiTakeMyMoney />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Add Money
              </h5>
            </div> */}
            {/* item */}
            {/* <div className="text-center cursor-pointer">
              <div className="bg-light-color p-2 rounded-lg text-primary-color  w-20 h-16 text-4xl flex items-center justify-center m-auto">
                <SiMoneygram />
              </div>
              <h5 className="text-xs font-bold mt-2 text-primary-text">
                Transfer
              </h5>
            </div> */}
          </div>

          {/* tab form  */}
          <Form tab={tab} />
        </div>
      </section>
    </>
  );
};

export default User;
