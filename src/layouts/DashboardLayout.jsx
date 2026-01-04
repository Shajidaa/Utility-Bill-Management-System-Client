import { useState } from "react";
import { Outlet } from "react-router";
import { DashboardNavbar, DashboardSidebar } from "../Components/Dashboard";
import MyContainer from "../Components/Shared/MyContainer/MyContainer";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen ">
      {/* Dashboard Navbar */}
      <DashboardNavbar onToggleSidebar={toggleSidebar} />

      <div className="flex">
        {/* Dashboard Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Main Content Area */}
        <MyContainer className="flex-1 transition-all duration-300 ease-in-out">
          <div className="">
            <div>
              {/* Content Container with Professional Styling */}
              <div>
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default DashboardLayout;
