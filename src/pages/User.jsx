import { GiReceiveMoney } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Balance from "../components/Balance";
import { getUserInfo, isRole } from "../services/auth.service";
import { useEffect, useState } from "react";
import LogOut from "../components/LogOut";
import RechargeFrom from "../components/Form/RechargeFrom";
import RechargeFromList from "../components/Form/RechargeFromList";
import CashInRequest from "../components/Agent/CashInRequest";
import AgentWithFormList from "../components/Agent/AgentWithFormList";
import AdminCashIn from "../components/Admin/AdminCashIn";
import AdminWidthForm from "../components/Admin/AdminWidthForm";

const User = () => {
  const [tab, setTab] = useState("");
  const role = isRole();
  const user = getUserInfo();

  useEffect(() => {
    if (role === "Agent") {
      setTab("Transfer from User");
    } else if (role === "User") {
      setTab("Send Money");
    }else if (role === "Admin") {
      setTab("Transfer from User");
    }
  }, []);
  return (
    <>
      <section className="min-h-screen w-screen flex  gap-2 items-center justify-center">
        <div className="w-[90%] tab:w-[550px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
          <h3 className=" font-bold text-lg text-primary-text text-center">
            Welcom To {role} In MFS
          </h3>
          <h3 className=" font-bold text-lg text-primary-text text-center">
            {user?.name}
          </h3>
          <LogOut />
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
            {role === "Agent" && (
              <>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Transfer from User")}
                >
                  <div
                    className={`${
                      tab === "Transfer from User"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <SiMoneygram />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Transfer from User
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Balance-recharge")}
                >
                  <div
                    className={`${
                      tab === "Balance-recharge"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <MdOutlineAccountBalance />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Balance-recharge
                  </h5>
                </div>

                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Cash Request")}
                >
                  <div
                    className={`${
                      tab === "Cash Request"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <IoCashOutline />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Cash Request
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Withdraw request")}
                >
                  <div
                    className={`${
                      tab === "Withdraw request"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <BiMoneyWithdraw />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Withdraw request
                  </h5>
                </div>
              </>
            )}
            {role === "User" && (
              <>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Send Money")}
                >
                  <div
                    className={`${
                      tab === "Send Money"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <IoIosSend />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Send Money
                  </h5>
                </div>
                {/* item */}
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Cash Out Agent")}
                >
                  <div
                    className={`${
                      tab === "Cash Out Agent"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <GiReceiveMoney />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Cash out Agent
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Cash Out Admin")}
                >
                  <div
                    className={`${
                      tab === "Cash Out Admin"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg  w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <GiReceiveMoney />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Cash out Admin
                  </h5>
                </div>
              </>
            )}

            {role === "Admin" && (
              <>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Transfer from Admin to User")}
                >
                  <div
                    className={`${
                      tab === "Transfer from Admin to User"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <SiMoneygram />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Transfer Money User
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Transfer from Agent")}
                >
                  <div
                    className={`${
                      tab === "Transfer from Agent"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <SiMoneygram />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Transfer Money Agent
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Balance-recharge List")}
                >
                  <div
                    className={`${
                      tab === "Balance-recharge List"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <MdOutlineAccountBalance />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Balance-recharge
                  </h5>
                </div>

                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Cash Request Update")}
                >
                  <div
                    className={`${
                      tab === "Cash Request Update"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <IoCashOutline />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Cash Request Update
                  </h5>
                </div>
                <div
                  className="text-center cursor-pointer"
                  onClick={() => setTab("Withdraw request Update")}
                >
                  <div
                    className={`${
                      tab === "Withdraw request Update"
                        ? "bg-primary-color text-white"
                        : "bg-light-color text-primary-color "
                    } p-2 rounded-lg   w-20 h-16 text-4xl flex items-center justify-center m-auto`}
                  >
                    <BiMoneyWithdraw />
                  </div>
                  <h5 className="text-xs font-bold mt-2 text-primary-text">
                    Withdraw request Update
                  </h5>
                </div>
              </>
            )}
          </div>

          {/* tab form  */}
          {tab === "Balance-recharge List" && <RechargeFromList />}
          {tab === "Balance-recharge" ? (
            <RechargeFrom tab={tab} />
          ) : (
            !(
              tab === "Balance-recharge List" ||
              tab === "Cash Request" ||
              tab === "Withdraw request" ||
              tab === "Cash Request Update" ||
              tab === "Withdraw request Update"
            ) && <Form tab={tab} />
          )}

          {tab === "Cash Request" && <CashInRequest tab={tab} />}
          {tab === "Withdraw request" && <AgentWithFormList tab={tab} />}
          {tab === "Cash Request Update" && <AdminCashIn tab={tab} />}
          {tab === "Withdraw request Update" && <AdminWidthForm tab={tab} />}
        </div>
      </section>
    </>
  );
};

export default User;
