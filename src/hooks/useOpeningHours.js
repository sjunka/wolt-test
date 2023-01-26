import {useState, useEffect} from 'react';
import OpeneningHoursResponseCall from '../data/data';

const useGetOpeningHours = () => {
  const [dataOpeningTimes, setDataOpeningTimes] = useState(null);
  const [loadingOpeningTimes, setLoadingOpeningTimes] = useState(true);
  const [errorOpeningTimesResponse, setErrorOpeningTimesResponse] =
    useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OpeneningHoursResponseCall();
        setDataOpeningTimes(response.data);
        setLoadingOpeningTimes(false);
      } catch (err) {
        setErrorOpeningTimesResponse(err);
        setLoadingOpeningTimes(false);
      }
    };
    fetchData();
  });

  return {dataOpeningTimes, loadingOpeningTimes, errorOpeningTimesResponse};
};

export default useGetOpeningHours;
