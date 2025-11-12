import { useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { MdCategory, MdDateRange, MdDescription } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { useRef } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import { toast } from "react-toastify";
import ErrorPage from "../ErrorPage/ErrorPage";
import ErrorCard from "../ErrorCard/ErrorCard";

const BillsDetails = () => {
  const details = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const billRef = useRef();

  const {
    title,
    category,
    location,
    description,
    image,
    amount,
    date,
    _id: billsId,
  } = details;

  const handleBillModel = () => {
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
      <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl bg-slate-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition duration-300">
          {/* Left Side Image */}
          <div className="flex items-center justify-center bg-slate-100 dark:bg-gray-700">
            <img
              src={image}
              alt={title}
              className="object-cover h-full w-full max-h-[400px]"
            />
          </div>

          {/* Right Side Info */}
          <div className="md:p-6 p-3 space-y-4">
            <h1 className="md:text-4xl text-xl font-medium title md:font-bold  mb-2">
              {title}
            </h1>

            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <MdCategory className="text-sky-600 dark:text-sky-400" />
                <span className="font-medium">{category}</span>
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sky-600 dark:text-sky-400" />
                {location}
              </p>

              <p className="flex items-center gap-2">
                <MdDescription className="text-sky-600 size-10 dark:text-sky-400" />

                {description}
              </p>

              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-sky-600 dark:text-sky-400" />
                Amount: <span className="font-semibold">৳{amount}</span>
              </p>

              <p className="flex items-center gap-2">
                <MdDateRange className="text-sky-600 dark:text-sky-400" />
                {new Date(date).toLocaleDateString()}
              </p>
            </div>

            {/* Pay Bill Button */}
            <div className="mt-6">
              <button
                onClick={handleBillModel}
                disabled={!isCurrentMonth}
                className={`btn btn-md w-full! text-white border-none transition duration-200 ${
                  isCurrentMonth
                    ? "primary-btn"
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

        {/* Bill Modal */}
        <dialog ref={billRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white dark:bg-gray-800">
            <h3 className="font-bold text-lg mb-3 text-sky-600 dark:text-sky-400">
              Complete Your Payment
            </h3>
            <form onSubmit={handleBillSubmit} className="space-y-3">
              <label>User Name</label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                required
                className="input input-bordered w-full"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={category}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={date}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                defaultValue={amount}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Bill ID</label>
              <input
                type="text"
                name="billsId"
                defaultValue={billsId}
                readOnly
                className="input input-bordered w-full"
              />
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Narayanganj"
                className="input input-bordered w-full"
                required
              />
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+88 0123456789"
                className="input input-bordered w-full"
                required
              />
              <button
                type="submit"
                className="btn primary-btn text-white w-full"
              >
                Pay Bill
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default BillsDetails;
