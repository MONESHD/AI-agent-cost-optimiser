import React from 'react';
import { Link } from 'react-router-dom';
import { BarChartIcon, MessageSquareIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">
                AI Cost Optimizer
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <MessageSquareIcon className="h-5 w-5 mr-1" />
              Chat
            </Link>
            <Link to="/dashboard" className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <BarChartIcon className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;