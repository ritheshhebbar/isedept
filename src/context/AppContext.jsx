import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [savedHospitals, setSavedHospitals] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedHospitals');
    const profile = localStorage.getItem('userProfile');
    const history = localStorage.getItem('searchHistory');
    const compare = localStorage.getItem('compareList');
    
    if (saved) setSavedHospitals(JSON.parse(saved));
    if (profile) setUserProfile(JSON.parse(profile));
    if (history) setSearchHistory(JSON.parse(history));
    if (compare) setCompareList(JSON.parse(compare));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('savedHospitals', JSON.stringify(savedHospitals));
  }, [savedHospitals]);

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const saveHospital = (hospital) => {
    setSavedHospitals(prev => {
      if (prev.find(h => h.id === hospital.id)) {
        return prev.filter(h => h.id !== hospital.id);
      }
      return [...prev, hospital];
    });
  };

  const isSaved = (hospitalId) => {
    return savedHospitals.some(h => h.id === hospitalId);
  };

  const addToCompare = (hospital) => {
    setCompareList(prev => {
      if (prev.find(h => h.id === hospital.id)) {
        return prev;
      }
      if (prev.length >= 4) {
        alert('You can only compare up to 4 hospitals');
        return prev;
      }
      return [...prev, hospital];
    });
  };

  const removeFromCompare = (hospitalId) => {
    setCompareList(prev => prev.filter(h => h.id !== hospitalId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (hospitalId) => {
    return compareList.some(h => h.id === hospitalId);
  };

  const addSearchHistory = (searchTerm) => {
    setSearchHistory(prev => {
      const filtered = prev.filter(term => term !== searchTerm);
      return [searchTerm, ...filtered].slice(0, 10); // Keep last 10 searches
    });
  };

  const updateUserProfile = (profile) => {
    setUserProfile(profile);
  };

  const value = {
    savedHospitals,
    saveHospital,
    isSaved,
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
    userProfile,
    updateUserProfile,
    searchHistory,
    addSearchHistory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
