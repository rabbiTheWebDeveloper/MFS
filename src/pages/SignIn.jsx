const SignIn = () => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] tab:w-[500px] p-5 tab:p-10 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-text">
          Login
        </h2>

        <form action="" className="mt-5">
          <div className="mt-2">
            <label
              htmlFor=""
              className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text"
            >
              Phone number or Email
            </label>
            <input
              type="text"
              placeholder="Enter phone number or email"
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
            <input
              type="password"
              placeholder="Enter your pin"
              className="w-full py-2 px-4 rounded-md text-sm tab:text-base border border-secondary-text"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-primary-color py-2 tab:py-2.5 px-5 rounded-lg text-white font-medium text-lg w-full hover:bg-hover-color"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
