import { Link } from "react-router";
import MyContainer from "../Shared/MyContainer/MyContainer";

const Business = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 mt-20 dark:text-slate-100 font-display relative transition-colors duration-300">
      {/* Main Content */}
      <main className="relative">
        <div className=" w-full ">
          {/* Header with Background Image */}
          <div
            className="text-center space-y-6 py-20 px-8 relative overflow-hidden"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/GvmKTt1Z/360-F-562280804-e8-J1rdu-Svh-Tq-PFo5xamz-KWej-Ybxa-NBTg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 pb-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Solutions for Every <br /> Business Need.
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Power up your business with a full-stack online bank account
                that fits your needs.
              </p>
            </div>
          </div>

          {/* Cards - Positioned to overlap the background image */}
          <MyContainer className="relative -mt-30 px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Card 1 */}
              <div className="group bg-white dark:bg-card-dark rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-full mb-6">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4">Checking Account</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow">
                  Choose from our checking options that allow you to earn
                  interest, avoid fees, and easily manage your account.
                </p>

                <Link
                  to={"/register"}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Open Account →
                </Link>
              </div>

              {/* Card 2 */}
              <div className="group bg-white dark:bg-card-dark rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-full mb-6">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m9-6a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4">Savings Accounts</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow">
                  Save for your goals and watch your money grow with CDs, money
                  market, and savings accounts.
                </p>

                <Link
                  to={"/register"}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Start Saving →
                </Link>
              </div>

              {/* Card 3 */}
              <div className="group bg-white dark:bg-card-dark rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-full mb-6">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4">Business Account</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow">
                  Take charge of your business banking with virtual cards, team
                  management, and more.
                </p>

                <Link
                  to={"/register"}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Open Account →
                </Link>
              </div>
            </div>
          </MyContainer>
        </div>
      </main>
    </div>
  );
};

export default Business;
