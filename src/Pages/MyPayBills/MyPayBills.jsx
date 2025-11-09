import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [myBills, setMyBills] = useState([]);
  useEffect(() => {
    axiosInstance.get(`/add-bills?email=${user?.email}`).then((data) => {
      setMyBills(data.data);
    });
  }, [axiosInstance, user]);
  console.log(myBills);

  const handleRemove = () => {};
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-5">
        My Products:{myBills.length}
      </h1>
      <div className="overflow-x-auto bg-white max-w-11/12 mx-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th> Image</th>
              <th>Name</th>
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

                <td>{bill.select}</td>
                <td>৳{bill.amount}</td>

                <td className="flex gap-3">
                  <button className="btn btn-xs">Edit</button>
                  <button
                    onClick={() => handleRemove(`${bill._id}`)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                  <button className="btn btn-xs text-green-500">
                    Download report
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyPayBills;
