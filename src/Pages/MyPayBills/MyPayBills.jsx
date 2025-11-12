import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaDownload, FaEdit, FaTrash } from "react-icons/fa";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const editRef = useRef(null);
  const [myBills, setMyBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get(`/add-bills?email=${user.email}`).then((data) => {
        setMyBills(data.data);
      });
    }
  }, [axiosInstance, user]);

  const handleEditBtn = (bill) => {
    setSelectedBill(bill);
    editRef.current.showModal();
  };

  const handleUpdateBtn = async (e, _id) => {
    e.preventDefault();
    const form = e.target;
    const updateBill = {
      amount: form.amount.value,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
    };
    try {
      const res = await axiosInstance.patch(`/add-bills/${_id}`, updateBill);
      if (res.data.modifiedCount > 0) {
        setMyBills((prev) =>
          prev.map((bill) =>
            bill._id === _id ? { ...bill, ...updateBill } : bill
          )
        );
      }
      editRef.current.close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (_id) => {
    try {
      const { data } = await axiosInstance.delete(`/my-bills/${_id}`);
      if (data) {
        setMyBills(myBills.filter((bill) => bill._id !== _id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const totalAmount = myBills.reduce(
    (sum, bill) => sum + parseInt(bill.amount),
    0
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <title>My Pay Bills | PayUp</title>
      <h1 className="text-3xl font-bold text-center text-sky-600 dark:text-sky-400 my-5">
        My Pay Bills
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center gap-4 mb-6">
        <div className="bg-blue-100 dark:bg-gray-700 p-4 rounded-lg w-full md:w-1/3 text-center">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Bills Paid
          </h2>
          <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            {String(myBills.length).padStart(2, "0")}
          </p>
        </div>
        <div className="bg-blue-100 dark:bg-gray-700 p-4 rounded-lg w-full md:w-1/3 text-center">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Total Amount
          </h2>
          <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            ৳{totalAmount}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto   bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-sky-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th>SL No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myBills.map((bill, index) => (
              <tr
                key={bill._id}
                className="hover:bg-sky-50 dark:hover:bg-gray-600 transition-all"
              >
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={bill.image} alt={bill.title} />
                    </div>
                  </div>
                </td>
                <td>{bill.title}</td>
                <td>{bill.category}</td>
                <td>৳{bill.amount}</td>
                <td className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditBtn(bill)}
                    className="btn btn-xs! secondary-btn flex items-center gap-1"
                  >
                    <FaEdit /> Update
                  </button>
                  <button
                    onClick={() => handleRemove(bill._id)}
                    className="btn btn-xs btn-error flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn btn-xs primary-btn flex items-center gap-1">
          <FaDownload /> Download Report
        </button>
      </div>

      {/* Update Modal */}
      {selectedBill && (
        <dialog
          ref={editRef}
          className="modal modal-bottom sm:modal-middle bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Bill</h3>
            <form
              onSubmit={(e) => handleUpdateBtn(e, selectedBill._id)}
              className="space-y-3"
            >
              <div>
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={selectedBill.title}
                  readOnly
                  className="input w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="label">Amount</label>
                <input
                  type="number"
                  name="amount"
                  defaultValue={selectedBill.amount}
                  className="input w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="label">Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={
                    new Date(selectedBill.date).toISOString().split("T")[0]
                  }
                  className="input w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  defaultValue={selectedBill.phone}
                  className="input w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  defaultValue={selectedBill.address}
                  className="input w-full dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button type="submit" className="btn w-full mt-4 primary-btn">
                Submit
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyPayBills;
