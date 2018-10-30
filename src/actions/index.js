export const setCounter = (number) => {
    return {
      type: 'SET',
      payload: parseInt(number)
    };
  };
  
  export const fetchNews = () => {
    return {
      type: 'FETCH_NEWS'
    };
  };
  
