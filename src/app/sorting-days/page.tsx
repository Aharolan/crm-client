import React from 'react';
import SortingDaysList from '../components/candidates/SortingDaysList/SortingDaysList';
import SafeRouting from '@/components/safeRouting';

const SortingDaysListWrapper = () => {
  return (
    <div>
      <SafeRouting><SortingDaysList /></SafeRouting> 
    </div>
  );
};

export default SortingDaysListWrapper;


