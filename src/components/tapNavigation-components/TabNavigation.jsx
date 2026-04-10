import React, { useState } from 'react';
import './tapNavigation-styles.css';


const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('mains');

  const tabs = [
    { id: 'starters', label: 'Dulce' },
    { id: 'mains', label: 'Salado' },
    { id: 'dessert', label: 'Adiciones' },    
  ];

  return (
    <div className="tab-navigation">
      <nav className="tab-nav" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.label} 
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
