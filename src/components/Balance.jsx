import  { useState, useEffect } from "react";
import { useBalanceMutation } from "../redux/api/commonApi";

const Balance = () => {
  const [balanceMutation] = useBalanceMutation();
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const { data } = await balanceMutation();
      setBalance(data.data.balance);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBalance("");
    }, 20000);

    return () => clearTimeout(timeoutId);
  }, [balance]);

  return (
    <div>
      <button className="font-bold text-lg text-primary-text" onClick={fetchBalance} disabled={loading}>
        Your Balance{" "}
        <span className="text-primary-color">
          {loading ? "Loading..." : error ? "***" : balance? balance : "***"}
        </span>
      </button>
    </div>
  );
};

export default Balance;
