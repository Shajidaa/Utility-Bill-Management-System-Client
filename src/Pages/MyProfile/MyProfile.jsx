import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaSave, FaTimes } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateProfileUser, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  // Update form data when user changes
  useEffect(() => {
    if (user && !isEditing) {
      setFormData({
        displayName: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user, isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({
      displayName: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || "",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      displayName: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Update profile (displayName and photoURL)
      const profileUpdateData = {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      };

      await updateProfileUser(profileUpdateData);

      // Update the local user state to reflect changes immediately
      setUser({
        ...user,
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-gray-900 px-6 py-10 transition duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-gray-700 text-center py-8 relative">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            My Profile
          </h1>

          <div className="mt-6 relative inline-block">
            {isEditing ? (
              <div className="space-y-2">
                <img
                  src={formData.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 mx-auto object-cover"
                />
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  placeholder="Photo URL"
                  className="w-full px-3 py-1 text-sm border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
              </div>
            ) : (
              <>
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt={user?.displayName}
                  className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 mx-auto object-cover"
                />
                <button
                  onClick={handleEdit}
                  className="absolute bottom-1 right-1 bg-white dark:bg-gray-600 text-gray-600 dark:text-white rounded-full p-1 shadow-md hover:bg-blue-100 dark:hover:bg-gray-500 transition"
                >
                  <FaPencil />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Personal Info
            </h2>
            {isEditing && (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition text-sm"
                >
                  <FaSave size={12} />
                  {isLoading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition text-sm"
                >
                  <FaTimes size={12} />
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 flex-1">
              <FaUser className="text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your name
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    className="w-full font-medium text-gray-800 dark:text-gray-200 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                ) : (
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {user?.displayName}
                  </p>
                )}
              </div>
            </div>
            {!isEditing && (
              <span className="text-gray-400 dark:text-gray-500">›</span>
            )}
          </div>

          <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 flex-1">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email address
                </p>
                {isEditing ? (
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled
                      className="w-full font-medium text-gray-500 dark:text-gray-400 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none cursor-not-allowed"
                      placeholder="Enter your email"
                    />
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      Email changes require re-authentication
                    </span>
                  </div>
                ) : (
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {user?.email}
                  </p>
                )}
              </div>
            </div>
            {!isEditing && (
              <span className="text-gray-400 dark:text-gray-500">›</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
