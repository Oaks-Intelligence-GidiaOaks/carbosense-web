import React, { useState } from "react";

const Tabs = ({ children }) => {
  const tabsArray = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(tabsArray[0].props.label.text);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" md:px-8 mt-6">
      <div className="flex w-full justify-between border-b border-gray-300">
        {tabsArray?.map((child) => (
          <button
            key={child.props.label.text}
            className={`${activeTab === child.props.label.text
              ? "border-b-2 border-primary-blue "
              : ""
              } flex-1 text-primary-black text-xs md:text-sm py-2`}
            onClick={(e) => handleClick(e, child.props.label.text)}
          >
            <div className="flex items-center gap-2">
              {child.props.label.icon}
              <span className="">{child.props.label.text}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabsArray.map((child) => {
          if (child.props.label.text === activeTab) {
            return <div key={child.props.label.text}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, icon, children }) => {
  return (
    <div label={label} className="hidden">
      <div className="flex items-center gap-6">
        <span>{icon}</span>
        <span className="">{label}</span>
      </div>
      {children}
    </div>
  );
};
export { Tabs, Tab };



