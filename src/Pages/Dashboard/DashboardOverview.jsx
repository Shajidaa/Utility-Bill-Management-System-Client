import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardOverview = () => {
  const [myBills, setMyBills] = useState([]);
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get(`/add-bills?email=${user.email}`).then((data) => {
        setMyBills(data.data);
      });
    }
  }, [axiosInstance, user]);

  const totalAmount = myBills.reduce(
    (sum, bill) => sum + parseInt(bill.amount),
    0
  );

  // Group bills by month for the bar chart
  const billsByMonth = myBills.reduce((acc, bill) => {
    const date = new Date(bill.date || Date.now());
    const monthYear = date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    if (!acc[monthYear]) {
      acc[monthYear] = { count: 0, amount: 0 };
    }
    acc[monthYear].count += 1;
    acc[monthYear].amount += parseInt(bill.amount);
    return acc;
  }, {});

  // Prepare data for bar chart
  const barChartData = {
    labels: Object.keys(billsByMonth),
    datasets: [
      {
        label: "Bills Paid",
        data: Object.values(billsByMonth).map((item) => item.count),
        backgroundColor: "rgba(14, 165, 233, 0.8)",
        borderColor: "rgba(14, 165, 233, 1)",
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        label: "Amount (৳)",
        data: Object.values(billsByMonth).map((item) => item.amount),
        backgroundColor: "rgba(34, 197, 94, 0.8)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
        yAxisID: "y1",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bills and Amount by Month",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Number of Bills",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Amount (৳)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // Prepare data for doughnut chart
  const doughnutData = {
    labels: ["Bills Paid", "Remaining Budget"],
    datasets: [
      {
        data: [myBills.length, Math.max(0, 20 - myBills.length)], // Assuming 20 as monthly budget for bills
        backgroundColor: [
          "rgba(14, 165, 233, 0.8)",
          "rgba(229, 231, 235, 0.8)",
        ],
        borderColor: ["rgba(14, 165, 233, 1)", "rgba(229, 231, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Bills Progress",
      },
    },
  };
  return (
    <div className="space-y-6">
      <div>
        <h2 className="md:text-3xl text-xl font-semibold mb-4">
          Welcome to Your Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Stay organized by tracking bills, due dates, and payments—all in one
          place.
        </p>
      </div>

      {/* Stats Cards */}
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

      {/* Charts Section */}
      {myBills.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          {/* Doughnut Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="h-80 flex items-center justify-center">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No bills data available yet. Add some bills to see your charts!
          </p>
        </div>
      )}

      {/* Recent Bills Summary */}
      {myBills.length > 0 && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Recent Activity
          </h3>
          <div className="space-y-2">
            {myBills.slice(0, 3).map((bill, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {bill.title || "Bill"}
                </span>
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  ৳{bill.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;
