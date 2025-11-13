import { useState } from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaCalendarAlt, FaImage } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";

const AddBills = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleCreateBills = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const bills = Object.fromEntries(form.entries());
    const newBills = { ...bills, email: user?.email };

    try {
      const { data } = await axiosSecure.post("/bills", newBills);
      if (data.insertedId) {
        toast.success("Bill created successfully");
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <title>Add bills | PayUp</title>

      <Link
        to={"/bills"}
        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2 " size={20} /> Back to Bills
      </Link>

      <h2 className="title  text-center ">Create Your Bill</h2>

      <form
        onSubmit={handleCreateBills}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 mt-6"
      >
        {/* Title + Category */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Electricity Bill for October"
              required
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              required
              className="select select-bordered w-full dark:bg-gray-700 dark:text-white"
            >
              <option disabled value="">
                Select Category
              </option>
              <option>Electricity</option>
              <option>Gas</option>
              <option>Water</option>
              <option>Internet</option>
              <option>Govt Fee</option>
              <option>Education</option>
              <option>Tracker</option>
              <option>Mobile Recharge</option>
            </select>
          </div>
        </div>

        {/* Amount + Date */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <label className="label font-medium">Amount (৳)</label>
            <div className="relative">
              <FaMoneyBillAlt
                size={20}
                className="absolute left-3 top-3 z-10 text-gray-400 dark:text-gray-300"
              />

              <input
                type="number"
                name="amount"
                placeholder="e.g. 1200"
                className="input input-bordered pl-10 w-full dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="label font-medium">Date</label>
            <div className="relative">
              <FaCalendarAlt className="absolute z-10 left-3 top-3 text-gray-400 dark:text-gray-300" />
              <input
                type="date"
                name="date"
                className="input input-bordered pl-10 w-full dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>
        </div>

        {/* Image URL */}
        <div className="grid md:grid-cols-1 gap-4 mt-4">
          <div className="relative">
            <label className="label font-semibold">Image URL</label>
            <div className="relative">
              <FaImage className="absolute z-10 left-3 top-3 text-gray-400 dark:text-gray-300" />
              <input
                type="url"
                name="image"
                placeholder="https://example.com/bill.jpg"
                required
                className="input input-bordered pl-10 w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label font-semibold">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              readOnly
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Contact + User Image */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label font-semibold">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="e.g. +1-555-1234"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="label font-semibold">User Image URL</label>
            <input
              type="url"
              name="user_image"
              defaultValue={user.photoURL}
              readOnly
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Location + Description */}
        <div className="mt-4">
          <label className="label font-semibold">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="mt-4">
          <label className="label font-semibold">Simple Description</label>
          <textarea
            name="description"
            placeholder="Write short details about this bill..."
            className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="primary-btn w-full! mt-6"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create A Bill"}
        </button>
      </form>
    </div>
  );
};

export default AddBills;
