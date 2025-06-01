import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ClockIcon, DollarSignIcon, ZapIcon, BarChart2Icon, TrendingDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { costData, modelUsageData, costSavingOpportunities, costComparisonData, monthlyComparisonData } from '../utils/dummyData';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Dashboard = () => {
  return <div className="w-full bg-gray-50 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          AI vs Human Cost Analysis
        </h2>
        <p className="text-sm text-gray-500">
          Compare costs and efficiency between AI and human workflows
        </p>
      </div>
      {/* Cost & Time Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <DollarSignIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Average Cost Savings
              </p>
              <h3 className="text-2xl font-bold">73%</h3>
              <p className="text-xs flex items-center text-green-600">
                <TrendingDownIcon className="h-3 w-3 mr-1" />
                Compared to human workflows
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <ClockIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Time Efficiency
              </p>
              <h3 className="text-2xl font-bold">85%</h3>
              <p className="text-xs text-blue-600">Faster task completion</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
              <ZapIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                ROI Improvement
              </p>
              <h3 className="text-2xl font-bold">4.2x</h3>
              <p className="text-xs text-amber-600">Return on investment</p>
            </div>
          </div>
        </div>
      </div>
      {/* Task Comparison Table */}
      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h3 className="text-lg font-medium mb-4">Task-by-Task Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Human Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Human Time (hrs)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Time (hrs)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {costComparisonData.map((item, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.task}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.humanCost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    ${item.aiCost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.humanTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {item.aiTime}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Monthly Cost Comparison Chart */}
      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h3 className="text-lg font-medium mb-4">Monthly Cost Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={value => [`$${value}`, 'Cost']} />
              <Legend />
              <Bar dataKey="humanCost" name="Human Cost" fill="#94a3b8" />
              <Bar dataKey="aiCost" name="AI Cost" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <DollarSignIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Monthly Cost</p>
              <h3 className="text-2xl font-bold">$10,200</h3>
              <p className="text-xs flex items-center text-green-600">
                <TrendingDownIcon className="h-3 w-3 mr-1" />
                20% decrease from last month
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
              <ZapIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">API Calls</p>
              <h3 className="text-2xl font-bold">328,901</h3>
              <p className="text-xs flex items-center text-gray-600">
                This month
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <BarChart2Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Estimated Savings
              </p>
              <h3 className="text-2xl font-bold">$9,250</h3>
              <p className="text-xs flex items-center text-gray-600">
                Potential monthly savings
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Monthly AI Spending</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={value => [`$${value}`, 'Cost']} />
                <Bar dataKey="cost" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Model Usage Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={modelUsageData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="usage" nameKey="name" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {modelUsageData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(value, name, props) => [`${value}%`, props.payload.name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Cost Saving Opportunities */}
      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Cost Saving Opportunities</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Strategy
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Potential Savings
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {costSavingOpportunities.map(opportunity => <tr key={opportunity.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {opportunity.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {opportunity.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    ${opportunity.potentialSavings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${opportunity.difficulty === 'Low' ? 'bg-green-100 text-green-800' : opportunity.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {opportunity.difficulty}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Dashboard;