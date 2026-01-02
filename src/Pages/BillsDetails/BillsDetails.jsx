import { Link, useLoaderData, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaCreditCard,
  FaCheckCircle,
  FaTimesCircle,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdCategory,
  MdDescription,
  MdPayment,
  MdAccountBalance,
  MdSecurity,
} from "react-icons/md";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaLocationDot,
  FaIdCard,
  FaCalendarDays,
} from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import { useRef } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import { toast } from "react-toastify";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";
import ErrorCard from "../ErrorCard/ErrorCard";

const BillsDetails = () => {
  const details = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const billRef = useRef();
  const navigate = useNavigate();
  const {
    title,
    category,
    location,
    description,
    image,
    amount,
    date,
    _id: billsId,
    name,
    email,
    contact,
    user_image,
  } = details;

  const handleBillModel = () => {
    if (!user) {
      toast.error("Please login to pay the bill.");
      return navigate("/login");
    }
    billRef.current.showModal();
  };

  const handleBillSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const address = form.address.value;
    const phone = form.phone.value;

    const newBills = {
      username: name,
      email,
      amount,
      billsId,
      address,
      phone,
      title,
      category,
      date,
    };
    if (phone.length !== 11) {
      toast.error("Phone number must be exactly 11 digits!");
      return;
    }
    try {
      const { data } = await axiosSecure.post("/add-bills", newBills);
      if (data.insertedId) {
        toast.success(" Your bill payment was successful!");
        billRef.current.close();
      }
    } catch (error) {
      toast.error(" Payment failed. Please try again.");
      console.log(error);
    }
  };

  const billDate = new Date(date);
  const now = new Date();
  const isCurrentMonth =
    billDate.getMonth() === now.getMonth() &&
    billDate.getFullYear() === now.getFullYear();

  if (!billsId) {
    return <ErrorCard />;
  }

  return (
    <>
      <title>{`${title} | Bill Details`}</title>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <MyContainer className="p-4 mx-auto">
          <Link
            to={"/bills"}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            <FaArrowLeft className="text-sm" />
            Back to Bills
          </Link>
        </MyContainer>

        <MyContainer className=" mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MdAccountBalance className="text-3xl" />
                <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <MdCategory className="text-lg" />
                <span className="text-lg font-medium">{category}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Left Side - Image */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 shadow-inner">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                {/* Bill Information Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <MdDescription className="text-blue-600" />
                    Bill Information
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <FaLocationDot className="text-red-500 text-lg mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Location:
                        </span>
                        <p className="text-gray-600 dark:text-gray-400">
                          {location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <MdDescription className="text-purple-500 text-lg mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Description:
                        </span>
                        <p className="text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border border-green-200 dark:border-green-700">
                      <HiCurrencyBangladeshi className="text-green-600 text-2xl" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Amount:
                        </span>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          ৳{amount}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <FaCalendarDays className="text-blue-500 text-lg" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Due Date:
                        </span>
                        <p className="text-gray-600 dark:text-gray-400">
                          {new Date(date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bill Status Card */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-3">
                    {isCurrentMonth ? (
                      <>
                        <FaCheckCircle className="text-green-600 text-2xl" />
                        <div>
                          <h3 className="font-semibold text-green-800 dark:text-green-300">
                            Payment Available
                          </h3>
                          <p className="text-sm text-green-600 dark:text-green-400">
                            This bill can be paid this month
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <FaTimesCircle className="text-red-500 text-2xl" />
                        <div>
                          <h3 className="font-semibold text-red-800 dark:text-red-300">
                            Payment Unavailable
                          </h3>
                          <p className="text-sm text-red-600 dark:text-red-400">
                            Only current month bills can be paid
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Bill Details */}
              <div className="space-y-6">
                {/* User Information Card */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <BiSolidUserDetail className="text-purple-600" />
                    Bill Issuer Details
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <div className="w-16 h-16 rounded-full border-4 border-purple-200 dark:border-purple-600 overflow-hidden shadow-lg">
                        <img
                          className="w-full h-full object-cover"
                          src={user_image}
                          alt={name}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <FaUser className="text-purple-500" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {name}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <FaEnvelope className="text-blue-500 text-lg" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Email:
                        </span>
                        <p className="text-gray-600 dark:text-gray-400 break-all">
                          {email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <FaPhone className="text-green-500 text-lg" />
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Contact:
                        </span>
                        <p className="text-gray-600 dark:text-gray-400">
                          {contact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pay Bill Button */}
                <div>
                  <button
                    onClick={handleBillModel}
                    disabled={!isCurrentMonth}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg ${
                      isCurrentMonth
                        ? " primary-btn w-full! text-white shadow-blue-500/25"
                        : "bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed shadow-gray-400/25"
                    }`}
                  >
                    <FaCreditCard className="text-xl" />
                    {isCurrentMonth ? "Pay Bill Now" : "Payment Not Available"}
                  </button>
                </div>

                {/* Security Notice */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Secure Payment
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your payment information is protected with bank-level
                        security. All transactions are encrypted and processed
                        securely.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Payment Guidelines */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-700">
                  <div className="flex items-start gap-3 mb-4">
                    <MdSecurity className="text-amber-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Payment Guidelines & Important Information
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Payment Rules */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm uppercase tracking-wide">
                        📅 Payment Schedule
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>
                          • Bills can only be paid during the current month
                        </li>
                        <li>
                          • Payment window closes at the end of each month
                        </li>
                        <li>• Late payments may incur additional charges</li>
                        <li>• Early payments are accepted and encouraged</li>
                      </ul>
                    </div>

                    {/* Payment Process */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm uppercase tracking-wide">
                        🔄 Payment Process
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Click "Pay Bill Now" to open payment form</li>
                        <li>• Fill in all required personal information</li>
                        <li>
                          • Review bill details carefully before submitting
                        </li>
                        <li>• Payment confirmation will be sent via email</li>
                        <li>• Keep confirmation receipt for your records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
        {/* Enhanced Bill Payment Modal */}
        <dialog ref={billRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white dark:bg-gray-800 max-w-2xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 -m-6 mb-6 p-6 rounded-t-3xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MdPayment className="text-3xl" />
                  <h3 className="text-2xl font-bold">Complete Payment</h3>
                </div>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20">
                    <IoMdClose className="text-xl" />
                  </button>
                </form>
              </div>
              <p className="text-blue-100 mt-2">Secure payment for {title}</p>
            </div>

            <form onSubmit={handleBillSubmit} className="space-y-4">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <FaUser className="text-blue-600" />
                  Personal Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <FaUser className="text-blue-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <FaEnvelope className="text-blue-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user?.email}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Bill Details Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <MdAccountBalance className="text-green-600" />
                  Bill Details
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <MdDescription className="text-green-500" />
                      Bill Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <MdCategory className="text-green-500" />
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={category}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <FaCalendarDays className="text-green-500" />
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <HiCurrencyBangladeshi className="text-green-500" />
                      Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      defaultValue={amount}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 font-bold text-green-600"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                    <FaIdCard className="text-green-500" />
                    Bill ID
                  </label>
                  <input
                    type="text"
                    name="billsId"
                    defaultValue={billsId}
                    readOnly
                    className="input input-bordered w-full rounded-xl bg-gray-100 dark:bg-gray-700 font-mono text-sm"
                  />
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <FaPhone className="text-purple-600" />
                  Contact Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <FaLocationDot className="text-purple-500" />
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <FaPhone className="text-purple-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="01234567899"
                      className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 primary-btn text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaCreditCard className="text-lg" />
                  Complete Payment
                </button>

                <div className="modal-action m-0">
                  <form method="dialog">
                    <button className=" secondary-btn text-white  rounded-xl px-6 py-3">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default BillsDetails;
