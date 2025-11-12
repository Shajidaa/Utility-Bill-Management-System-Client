import React from "react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaLocationDot } from "react-icons/fa6";
const CustomerFeedback = () => {
  return (
    <MyContainer>
      {" "}
      <h1 className="text-center text-3xl font-semibold ">
        Trusted by Thousands of Happy Users
      </h1>
      <p className="text-center text-base  font-normal text-gray-400 ">
        Real stories from people who use PayUp to simplify their monthly bills.
      </p>
      <div className="flex flex-wrap justify-between gap-5  items-center py-10">
        <div className="w-full border max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex space-x-4">
              <div>
                <svg
                  className="rounded-full bg-yellow-400"
                  height={48}
                  width={48}
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </div>
              <div>
                <div className="text-lg font-bold dark:text-white">Tariq,</div>
                <p className="text-sm flex text-gray-500 dark:text-gray-200">
                  <FaLocationDot /> Rajshahi
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="text-sm text-gray-800 dark:text-gray-200">
              “PayUp made paying my bills stress-free. One platform for
              everything!”
            </div>
          </div>
        </div>
        <div className="w-full border max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex space-x-4">
              <div>
                <svg
                  className="rounded-full bg-yellow-400"
                  height={48}
                  width={48}
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </div>
              <div>
                <div className="text-lg font-bold dark:text-white">Rafiq,</div>
                <div className="text-sm  flex text-gray-500 dark:text-gray-200">
                  <FaLocationDot /> Dhaka
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="text-sm text-gray-800 dark:text-gray-200">
              “The reminders help me never miss a due date again. Truly
              reliable.”
            </div>
          </div>
        </div>

        <div className="w-full border max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex space-x-4">
              <div>
                <svg
                  className="rounded-full bg-yellow-400"
                  height={48}
                  width={48}
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </div>
              <div>
                <div className="text-lg font-bold dark:text-white">Nusrat,</div>
                <div className="text-sm  flex text-gray-500 dark:text-gray-200">
                  <FaLocationDot /> Chittagong
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="text-sm text-gray-800 dark:text-gray-200">
              “I love how fast and secure it is — no more waiting in long
              queues.”
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default CustomerFeedback;
