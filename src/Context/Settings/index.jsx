import React, { useContext, useState, useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { GlobalContext } from '../../App';
import Auth from '../../Components/Auth/auth';

// import './settings.scss';
const Settings = () => {
  const { displayCount, hideCompleted, sortWord, setSettingData } =
    useContext(GlobalContext);
  // const context = useContext(GlobalContext);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences);
      setSettingData(parsedPreferences);
    }
  }, [setSettingData]);

  // Save preferences to local storage whenever they change
  useEffect(() => {
    const userPreferences = { displayCount, hideCompleted, sortWord };
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
  }, [displayCount, hideCompleted, sortWord]);

  // console.log(context);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSettingData({ displayCount, hideCompleted, sortWord, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ displayCount, hideCompleted, sortWord: e.target.value });
    setSettingData({ displayCount, hideCompleted, sortWord: e.target.value });
  };
  return (
    <Auth capability="update">
      <form onSubmit={handleSubmit}>
        <h2>
          <SettingsIcon /> Manage Settings
        </h2>

        <h3>Update Settings</h3>
        <label className="switch">
          <input
            type="checkbox"
            name="hideCompleted"
            className="slider"
            checked={hideCompleted}
            onChange={handleChange}
          />
          <span className="slider round"></span>
          <span>Show Completed ToDos</span>
        </label>

        <label>
          <span>Items Per Page</span>
          <input
            // onChange={handleChange}
            onChange={handleChange}
            name="displayCount"
            type="number"
            value={displayCount}
            placeholder="0"
          />
        </label>

        <label>
          <span>Sort Keyword</span>
          <input
            onChange={handleChange}
            name="sortWord"
            type="text"
            value={sortWord || ''}
            placeholder="difficulty"
          />
        </label>

        <label>
          <button type="submit">Show New Settings</button>
        </label>

        {submittedData && (
          <div>
            <h3>Submitted Data</h3>
            <p>
              Show Completed ToDos: {submittedData.hideCompleted.toString()}
            </p>
            <p>Items Per Page: {submittedData.displayCount}</p>
            <p>Sort Keyword: {submittedData.sortWord}</p>
          </div>
        )}
      </form>
    </Auth>
  );
};

export default Settings;
