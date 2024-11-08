import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for older versions
import './CreateGroup.css';

const names = ['Amarendar','Kalyan','Sanjay','Kd','Kusumitha'];

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [selectedNames, setSelectedNames] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useHistory(); // Initialize history

  const handleCreateGroup = () => {
    if (groupName && selectedNames.length > 0) {
      alert(`Group "${groupName}" created with members: ${selectedNames.join(', ')}`);
      // Redirect to the main page after creating the group
      history.push('/mainpage');
    } else {
      alert("Please enter a group name and select at least one member.");
    }
  };

  const handleSelectName = (name) => {
    if (!selectedNames.includes(name)) {
      setSelectedNames([...selectedNames, name]);
    }
    setIsDropdownOpen(false);
  };

  const handleRemoveName = (name) => {
    setSelectedNames(selectedNames.filter((n) => n !== name));
  };

  return (
    <div className="create-group-container">
      <h2>Create a New Group</h2>
      <input 
        type="text" 
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)} 
        placeholder="Group Name" 
      />
      
      <div className="dropdown">
        <button 
          className="dropdown-btn" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Select Member
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {names.map((name) => (
              <a 
                key={name} 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectName(name);
                }}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="selected-names">
        <h3>Selected Members:</h3>
        <ul>
          {selectedNames.map((name, index) => (
            <li key={index}>
              {name}
              <button className="remove-btn" onClick={() => handleRemoveName(name)}>Del</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
};

export default CreateGroup;
