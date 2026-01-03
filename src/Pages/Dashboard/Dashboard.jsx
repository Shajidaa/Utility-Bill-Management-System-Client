import { Link, Outlet } from "react-router";

const Dashboard = () => {
  const navigationLinks = (
    <>
      <li>
        <Link to="/dashboard/myPayBills" className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          My Pay Bills
        </Link>
      </li>
      <li>
        <Link to="/dashboard/add-bill" className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Bill
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myProfile" className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 shadow-sm">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </nav>
        
        {/* Page content */}
        <main className="flex-1 p-6 bg-base-100">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="min-h-full w-64 bg-base-200">
          {/* Sidebar header */}
          <div className="p-4 border-b border-base-300">
            <h2 className="text-lg font-bold text-base-content">Menu</h2>
          </div>
          
          {/* Sidebar content */}
          <ul className="menu p-4 space-y-2">
            {navigationLinks}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
