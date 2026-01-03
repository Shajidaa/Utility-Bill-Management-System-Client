import { useEffect, useState } from "react";
import {
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
  FaFilter,
  FaTimes,
  FaChartBar,
  FaLayerGroup,
  FaBars,
  FaCalendarAlt,
  FaFileAlt,
  FaTag,
  FaMapMarkerAlt,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import {
  MdCategory,
  MdLocationOn,
  MdClear,
  MdTune,
  MdViewModule,
  MdClose,
} from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";

import useAxios from "../../Hooks/Axios/useAxios";
import Card from "../../Components/Card/Card";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";
import Spinner from "../../Components/Shared/Spinner";

const Bills = () => {
  const instance = useAxios();
  const [loading, setLoading] = useState(false);
  const [bills, setBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique categories and locations for filter options
  const categories = [...new Set(bills.map((bill) => bill.category))];

  useEffect(() => {
    setLoading(true);
    instance
      .get("/bills")
      .then((data) => {
        setBills(data.data);
        setFilteredBills(data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [instance]);

  // Filter and sort bills
  useEffect(() => {
    let filtered = bills.filter((bill) => {
      const matchesSearch =
        bill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bill.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || bill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort bills
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "category":
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;

        case "date":
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        default:
          return 0;
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredBills(filtered);
  }, [bills, searchTerm, sortBy, sortOrder, selectedCategory]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSortBy("date");
    setSortOrder("desc");
    setSelectedCategory("");
  };

  const hasActiveFilters =
    searchTerm || selectedCategory || sortBy !== "date" || sortOrder !== "desc";

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-screen ">
      <MyContainer>
        <title> Bills | PayUp</title>

        {/* Enhanced Header Section */}
        <div className="pt-8 pb-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <h1 className="text-center text-3xl md:text-4xl font-bold ">
                Bill Management Hub
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Streamline your utility bill management with powerful search,
              filtering, and organization tools
            </p>
          </div>

          {/* Search Bar - Full Width */}
          <div className="relative mb-6 max-w-4xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <FaSearch className="text-xl text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search bills by title, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-16 py-5 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 shadow-lg hover:shadow-xl bg-white dark:bg-gray-800"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              >
                <FaTimes className="text-xl" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content Layout - Sidebar + Content */}
        <div className="flex gap-8 pb-6 relative">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-6">
              <div className="bg-white dark:bg-gray-800 rounded-3xl  border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Filter Header */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <HiOutlineAdjustments className="text-2xl" />
                    <h2 className="text-xl font-semibold">Filters & Sorting</h2>
                  </div>
                  <p className="text-blue-100 mt-1 text-sm">
                    Refine your search results
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Statistics */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-3">
                        <FaChartBar className="text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            {filteredBills.length}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Results Found
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                    >
                      <MdClear className="text-lg" />
                      Clear All Filters
                    </button>
                  )}

                  {/* Sort Section */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <BiSortAlt2 className="text-blue-600" />
                      Sort Options
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Sort By
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 font-medium"
                        >
                          <option value="date">Date</option>
                          <option value="title">Title</option>
                          <option value="category">Category</option>
                          <option value="location">Location</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Order
                        </label>
                        <select
                          value={sortOrder}
                          onChange={(e) => setSortOrder(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 font-medium"
                        >
                          <option value="desc">Newest First</option>
                          <option value="asc">Oldest First</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <MdCategory className="text-purple-600" />
                      Categories
                    </h3>

                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value=""
                          checked={selectedCategory === ""}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          All Categories ({bills.length})
                        </span>
                      </label>

                      {categories.map((category) => {
                        const count = bills.filter(
                          (bill) => bill.category === category
                        ).length;
                        return (
                          <label
                            key={category}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="category"
                              value={category}
                              checked={selectedCategory === category}
                              onChange={(e) =>
                                setSelectedCategory(e.target.value)
                              }
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">
                              {category}
                            </span>
                            <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                              {count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          {showMobileFilters && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setShowMobileFilters(false)}
              ></div>
              <div className="relative bg-white dark:bg-gray-800 w-80 max-w-sm h-full overflow-y-auto">
                {/* Mobile Filter Header */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <HiOutlineAdjustments className="text-2xl" />
                      <h2 className="text-xl font-semibold">Filters</h2>
                    </div>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                    >
                      <MdClose className="text-xl" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Mobile filter content - same as desktop */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-3">
                        <FaChartBar className="text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            {filteredBills.length}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Results Found
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                    >
                      <MdClear className="text-lg" />
                      Clear All Filters
                    </button>
                  )}

                  {/* Sort Section - Mobile */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <BiSortAlt2 className="text-blue-600" />
                      Sort Options
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Sort By
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 font-medium"
                        >
                          <option value="date">Date</option>
                          <option value="title">Title</option>
                          <option value="category">Category</option>
                          <option value="location">Location</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Order
                        </label>
                        <select
                          value={sortOrder}
                          onChange={(e) => setSortOrder(e.target.value)}
                          className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 font-medium"
                        >
                          <option value="desc">Newest First</option>
                          <option value="asc">Oldest First</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Category Filter - Mobile */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <MdCategory className="text-purple-600" />
                      Categories
                    </h3>

                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-category"
                          value=""
                          checked={selectedCategory === ""}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          All Categories ({bills.length})
                        </span>
                      </label>

                      {categories.map((category) => {
                        const count = bills.filter(
                          (bill) => bill.category === category
                        ).length;
                        return (
                          <label
                            key={category}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="mobile-category"
                              value={category}
                              checked={selectedCategory === category}
                              onChange={(e) =>
                                setSelectedCategory(e.target.value)
                              }
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">
                              {category}
                            </span>
                            <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                              {count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="mb-6 flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <MdViewModule className="text-blue-600 dark:text-blue-400 text-xl" />
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Showing{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {filteredBills.length}
                  </span>{" "}
                  of{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {bills.length}
                  </span>{" "}
                  bills
                </span>
              </div>
              {hasActiveFilters && (
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <FaFilter className="text-blue-600 dark:text-blue-400 text-sm" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    Filtered
                  </span>
                </div>
              )}
            </div>

            {/* Bills Grid */}
            {filteredBills.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {filteredBills.map((bill, index) => (
                  <div
                    key={bill._id || index}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <Card bill={bill} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 max-w-lg mx-auto shadow-2xl border border-gray-100 dark:border-gray-700">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaSearch className="text-3xl text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      No Bills Found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {searchTerm || selectedCategory
                        ? "We couldn't find any bills matching your current search criteria. Try adjusting your filters or search terms."
                        : "No bills are currently available in the system."}
                    </p>
                  </div>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Bills;
