import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const editRef = useRef(null);
  const [myBills, setMyBills] = useState([]);
  const instance = useAxiosSecure();
  useEffect(() => {
    axiosInstance.get(`/add-bills?email=${user?.email}`).then((data) => {
      setMyBills(data.data);
    });
  }, [axiosInstance, user]);

  const handleEditBtn = () => {
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
      const res = await instance.patch(`/add-bills/${_id}`, updateBill);
      if (res.data.modifiedCount > 0) {
        setMyBills((prev) =>
          prev.map((bill) =>
            bill._id === _id ? { ...bill, ...updateBill } : bill
          )
        );
      }
      editRef.current.close();
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = async (_id) => {
    try {
      instance.delete(`/my-bills/${_id}`).then((data) => {
        if (data) {
          console.log(data);

          const updateData = myBills.filter((bill) => bill._id !== _id);
          setMyBills(updateData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const totalAmount = myBills.reduce(
    (sum, bill) => sum + parseInt(bill.amount),
    0
  );

  return (
    <div>
      <title>My pay Bills | PayUp</title>
      <h1 className="text-2xl font-semibold text-center my-5">My Pay Bills</h1>
      <div>
        <div>
          <h1 className="text-xl font-semibold text-center my-5">
            Bill-paid:{String(myBills.length).padStart(2, 0)}
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-center my-5">
            TotalPaid: {totalAmount}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto bg-white max-w-11/12 mx-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>

              <th>Actions</th>
            </tr>
          </thead>

          {myBills?.map((bill, index) => (
            <tbody key={bill._id}>
              {/* row 1 */}
              <tr>
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={bill.image} alt={bill.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{bill.title}</td>

                <td>{bill.category}</td>
                <td>৳{bill.amount}</td>

                <td className="flex gap-3">
                  <button onClick={handleEditBtn} className="btn btn-xs">
                    Update
                  </button>
                  <button
                    onClick={() => handleRemove(`${bill._id}`)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button className="btn btn-xs text-green-500">Download report</button>
        {myBills.map((bill) => (
          <dialog
            ref={editRef}
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Update the Bill</h3>
              <form onSubmit={(e) => handleUpdateBtn(e, bill._id)}>
                <fieldset className="fieldset">
                  {/* name  */}
                  <label className="label">Title</label>
                  <input
                    type="text"
                    placeholder="tittle"
                    name="title"
                    defaultValue={bill.title}
                    className="input"
                    readOnly
                  />

                  {/*amount*/}
                  <label className="label">Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="input"
                    defaultValue={bill.amount}
                    placeholder="type your amount"
                  />

                  <label className="label">Date</label>
                  <input
                    type="text"
                    placeholder={new Date(bill.date).toLocaleDateString()}
                    name="date"
                    defaultValue={new Date(bill.date).toLocaleDateString()}
                    className="input"
                  />
                  <label className="label">Phone</label>
                  <input
                    type="text"
                    placeholder={bill.phone}
                    name="phone"
                    defaultValue={bill.phone}
                    className="input"
                  />
                  <label className="label">Address</label>
                  <input
                    type="text"
                    placeholder={bill.address}
                    name="address"
                    defaultValue={bill.address}
                    className="input"
                  />

                  <button type="submit" className="btn gradient mt-4">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </dialog>
        ))}
      </div>
    </div>
  );
};

export default MyPayBills;
