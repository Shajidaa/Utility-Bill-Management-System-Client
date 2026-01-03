import { Link, Outlet, NavLink } from "react-router";

const Dashboard = () => {
  const navigationLinks = (
    <>
      <li>
        <NavLink 
          to="/dashboard/myPayBills" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-base-content hover:bg-base-200 hover:text-primary"
            }`
          }
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-medium">My Pay Bills</span>
          <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/dashboard/add-bill" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-base-content hover:bg-base-200 hover:text-primary"
            }`
          }
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="font-medium">Add Bill</span>
          <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/dashboard/myProfile" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-base-content hover:bg-base-200 hover:text-primary"
            }`
          }
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="font-medium">My Profile</span>
          <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="min-h-screen bg-base-200">
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        
        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Modern Header */}
          <header className="sticky top-0 z-40 backdrop-blur-md bg-base-100/80 border-b border-base-300 shadow-sm">
            <div className="navbar px-6">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="dashboard-drawer"
                  aria-label="open sidebar"
                  className="btn btn-ghost btn-circle"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold text-primary">
                    Dashboard
                  </h1>
                </div>
              </div>
            </div>
          </header>
          
          {/* Page Content */}
          <main className="flex-1 p-6 bg-base-100">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Modern Sidebar */}
        <div className="drawer-side z-30">
          <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <aside className="min-h-full w-72 bg-base-100 shadow-xl border-r border-base-300">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-base-300 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-base-content">PayUp</h2>
                  <p className="text-sm text-base-content/70">Management System</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="p-4">
              <div className="mb-4 text-xs text-base-content/50 uppercase tracking-wider">Dashboard</div>
              <ul className="space-y-2">
                {navigationLinks}
              </ul>
            </nav>
            
            {/* Sidebar Footer with Back to Home */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-base-300 bg-base-200">
              <Link 
                to="/" 
                className="flex items-center gap-3 p-4 text-base-content hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Back to Home</span>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
