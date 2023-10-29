const Faq = () => {
  return (
    <div
      className="bg-black md:py-16 pb-20"
      style={{
        backgroundImage: "url(https://i.postimg.cc/Hs8q6hZj/blog6.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto">
          {" "}
          <h1 className="font-bold md:text-5xl text-[32px] text-mainColor md:text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base md:text-center text-left text-secondColor">
            Explore Our FAQs: Gain quick access to expert answers and insights
            into the frequently asked questions that arise in the realm of
            finance and investment. Your queries, our commitment to clarity.
          </p>
        </div>
        <div className="md:flex pt-10">
          <div className="space-y-10 max-w-xl mx-auto ">
            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  How do I make a deposit on the investment site?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                To make a deposit, log in to your account, navigate to the{" "}
                <b>Deposit</b> section, choose your preferred payment method,
                and follow the on-screen instructions to complete the
                transaction.
              </p>
            </details>

            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  What is the typical withdraw processing time?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                Withdrawal processing times vary by method. Typically,
                withdrawals are processed within 15 to 30 minutes, but this can
                vary based on the method and other factors.
              </p>
            </details>

            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  Are there any deposit fees?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                We do not charge any deposit fees. However, please be aware that
                your chosen payment method may have associated fees.
              </p>
            </details>
          </div>
          <div className="space-y-10 md:mt-0 mt-10 max-w-lg mx-auto ">
            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  What payment methods are accepted for deposits?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                We accept cryptocurrency. You can find a list of accepted
                methods in the <b>Deposit</b> section of your account.
              </p>
            </details>
            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  What is the typical deposit processing time?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                Deposit processing times vary depending on the payment method
                you choose. Typically, deposits are processed within 15 to 30
                minutes.
              </p>
            </details>

            <details
              className=" group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center border border-mainColor justify-between gap-1.5 rounded-lg bg-[#131a22] p-4 ">
                <h2 className="font-medium text-mainColor">
                  What withdrawal methods are available?
                </h2>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-mainColor"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 p-4 text-sm rounded-md leading-relaxed text-secondColor font-medium bg-[#131a22]">
                We offer withdrawal methods cryptocurrency. Fees may apply,
                depending on the method chosen of crypto network. You can find
                the specific details in the <b>Withdraw</b>section.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
