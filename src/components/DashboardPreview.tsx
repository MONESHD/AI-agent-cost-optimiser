import React from 'react';
import { Link } from 'react-router-dom';
import { BarChartIcon, TrendingUpIcon, DollarSignIcon, ZapIcon } from 'lucide-react';
const DashboardPreview = () => {
  return <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-900">
          AI Cost Optimization Dashboard
        </h3>
        <span className="text-xs text-gray-500">Preview</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-white p-3 rounded border border-gray-200">
          <div className="flex items-center">
            <DollarSignIcon className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs font-medium">Monthly Savings</span>
          </div>
          <p className="text-lg font-semibold mt-1">$12,450</p>
        </div>
        <div className="bg-white p-3 rounded border border-gray-200">
          <div className="flex items-center">
            <ZapIcon className="h-4 w-4 text-amber-500 mr-1" />
            <span className="text-xs font-medium">API Calls</span>
          </div>
          <p className="text-lg font-semibold mt-1">328,901</p>
        </div>
      </div>
      <Link to="/dashboard" className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
        <BarChartIcon className="h-4 w-4 mr-1" />
        View Full Dashboard
      </Link>
    </div>;
};
export default DashboardPreview;