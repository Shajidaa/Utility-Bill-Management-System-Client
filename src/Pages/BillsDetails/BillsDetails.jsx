import { useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { MdCategory, MdDateRange, MdDescription } from "react-icons/md";
const BillsDetails = () => {
  const details = useLoaderData();
  console.log();
  const { title, category, location, description, image, amount, date } =
    details;

  const billDate = new Date(date);
  const now = new Date();
  const isCurrentMonth =
    billDate.getMonth() === now.getMonth() &&
    billDate.getFullYear() === now.getFullYear();

  return (
    <div className="min-h-screen bg-base-100 dark:bg-gray-900 p-6 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl bg-base-200 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-green-200 dark:border-green-700">
        {/* Left Side Image */}
        <div className="flex items-center justify-center bg-base-300 dark:bg-gray-700">
          <img
            src={image}
            alt={title}
            className="object-cover h-full w-full max-h-[400px]"
          />
        </div>

        {/* Right Side Info */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-green-700 dark:text-green-300">
            {title}
          </h1>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <MdCategory className="text-green-500 dark:text-green-400" />
              <span className="font-medium">{category}</span>
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500 dark:text-green-400" />
              {location}
            </p>

            <p className="flex items-center gap-2">
              <MdDescription className="text-green-500 dark:text-green-400" />
              {description}
            </p>

            <p className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500 dark:text-green-400" />
              Amount: <span className="font-semibold">৳{amount}</span>
            </p>

            <p className="flex items-center gap-2">
              <MdDateRange className="text-green-500 dark:text-green-400" />
              {new Date(date).toLocaleDateString()}
            </p>
          </div>

          {/* Pay Bill Button */}
          <div className="mt-6">
            <button
              disabled={!isCurrentMonth}
              className={`btn btn-md w-full text-white border-none ${
                isCurrentMonth
                  ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                  : "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              }`}
            >
              {isCurrentMonth
                ? "Pay Bill"
                : "Only current month bills can be paid"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsDetails;
