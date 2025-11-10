import { useState } from "react";
import { Link } from "react-router";
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
    const newBills = {
      ...bills,

      email: user?.email,
    };

    try {
      const { data } = await axiosSecure.post("/bills", newBills);
      if (data.insertedId) {
        toast.success("Bill create successfully");
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something is wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <title>Add bills| PayUp</title>
      <Link to={"/bills"}>← Bills</Link>

      <h2 className="text-center text-4xl font-bold mt-4">
        Create <span className="text-indigo-500">Your bill</span>
      </h2>

      <form
        onSubmit={handleCreateBills}
        className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 mt-6"
      >
        {/* Title */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Electricity Bill for October"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              required
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select Category
              </option>
              <option>Electricity</option>
              <option>Gas</option>
              <option>Water</option>
              <option>Internet</option>
            </select>
          </div>
        </div>

        {/* Price */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {/* Amount */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Amount (৳)</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="e.g. 1200"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Date */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Usage + Image */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label font-semibold">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/bill.jpg"
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* username */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label font-semibold">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label font-semibold"> Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label font-semibold">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="e.g. +1-555-1234"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label font-semibold">User Image URL</label>
            <input
              type="url"
              name="user_image"
              placeholder="https://..."
              defaultValue={user.photoURL}
              readOnly
              className="input input-bordered w-full"
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
            className="input input-bordered w-full"
          />
        </div>

        <div className="mt-4">
          <label className="label font-semibold">Simple Description</label>
          <textarea
            name="description"
            placeholder="Write short details about this bill..."
            className="textarea textarea-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="btn w-full mt-6 btn-success  text-white font-semibold"
          disabled={loading}
        >
          {loading ? "Creating..." : " Create A Bill"}
        </button>
      </form>
    </div>
  );
};

export default AddBills;

// value={new Date().toISOString().split("T")[0]}
