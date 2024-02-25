const SignUp = () => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] tab:w-[500px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-text">
          Registration
        </h2>

        <form action="" className="mt-5">
          <div className="">
            <label
              htmlFor=""
              className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
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
              Enter your Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor=""
              className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
            >
              Account Type
            </label>

            <select
              name=""
              id=""
              className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
            >
              <option value="">User</option>
              <option value="">Agent</option>
            </select>
          </div>

          <div className="mt-4">
            <label
              htmlFor=""
              className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
            >
              Enter your NID
            </label>
            <input
              type="text"
              placeholder="Enter your NID"
              className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
            >
              Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
