import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaDownload, FaEdit, FaTrash } from "react-icons/fa";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import Swal from "sweetalert2";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const editRef = useRef(null);
  const rowRef = useRef(null);
  const [myBills, setMyBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get(`/add-bills?email=${user.email}`).then((data) => {
        setMyBills(data.data);
      });
    }
  }, [axiosInstance, user]);

  useEffect(() => {
    if (selectedBill && editRef.current) {
      editRef.current.showModal();
    }
  }, [selectedBill]);

  const handleEditBtn = (bill) => {
    setSelectedBill(bill);
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.text("PayUp - Bills Report", 10, 10);
    const tableColumn = ["SL No", "Title", "Date", "Category", "Price"];
    const tableRows = myBills.map((bill, index) => [
      index + 1,
      bill.title,
      bill.date,
      bill.category,
      `৳${Number(bill.amount)}`,
    ]);
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,

      theme: "grid",

      styles: { align: "center" },
    });
    const finalY = doc.lastAutoTable.finalY || 20;
    const totalAmount = myBills.reduce(
      (sum, bill) => sum + parseInt(bill.amount),
      0
    );
    doc.setFontSize(12);
    doc.text(`Total Bills Paid: ${myBills.length}`, 14, finalY + 10);
    doc.text(`Total Bills Amount: ৳${totalAmount}`, 14, finalY + 20);
    doc.save("PayUp_Bills.pdf");
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
      e.target.reset();
      editRef.current.close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const { data } = await axiosInstance.delete(`/my-bills/${_id}`);

        if (data) {
          setMyBills(myBills.filter((bill) => bill._id !== _id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
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

      <div className="flex flex-col  md:flex-row justify-around items-center gap-4 mb-6">
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

      <div className="overflow-x-auto min-h-dvh  bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <table id="my-table" className="table w-full">
          <thead>
            <tr className="bg-sky-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th>SL No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody ref={rowRef}>
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
                <td>{bill.date}</td>
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
        {myBills.length > 0 && (
          <button
            onClick={handleDownloadPdf}
            className="btn btn-xs primary-btn flex items-center gap-1"
          >
            <FaDownload /> Download Report
          </button>
        )}
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
              <p className="text-sm font-semibold text-blue-500">
                Note:{" "}
                <i className="text-red-500">
                  If you don’t want to update, then just leave it as it is.
                </i>
              </p>
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
