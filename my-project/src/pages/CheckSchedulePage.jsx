function CheckSchedulePage() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome to the Check Schedule Page!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Manage your schedule efficiently and stay on top of your plans. View your daily, weekly, and monthly activities all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Daily Schedule</h2>
          <p className="text-gray-600">Track your daily tasks and appointments with ease.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Weekly Overview</h2>
          <p className="text-gray-600">Get a clear view of your week and upcoming events.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Monthly Planner</h2>
          <p className="text-gray-600">Plan ahead with a comprehensive monthly overview.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Custom Reminders</h2>
          <p className="text-gray-600">Set reminders to never miss an important task.</p>
        </div>
      </div>
    </div>
  );
}

export default CheckSchedulePage;
