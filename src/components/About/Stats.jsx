import React from 'react'
const stats = [
  { value: "15K+", label: "Happy Customers" },
  { value: "32+", label: "Years of Service" },
  { value: "4.7", label: "Average Rating" },
  { value: "11", label: "City Locations" },
];

const Stats = () => {
  return (
    <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="author-role">{stat.label}</div>
          </div>
        ))}
    </div>

  )
}

export default Stats

