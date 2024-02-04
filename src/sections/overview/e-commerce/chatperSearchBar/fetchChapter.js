import * as React from 'react';
import { useEffect } from 'react';

import InitialReadingLayout from './initialReadingLayout';

const YourComponent = (props) => {
  console.log(props);
  const PropsData = props;
  const VerseRequest = `${PropsData.verseRequest.book.val}_${PropsData.verseRequest.label}`;
  const [ChapterTextArr,setChapterTextArr] = React.useState([]); 
  
  useEffect(() => {const sendRequest = async () => {
    const method = 'GET';
    const base = 'https://2u7hjn3p4m.execute-api.ap-southeast-2.amazonaws.com/Test/BibleData';
    const queryParams = `Method=QueryItems&PK=${  encodeURIComponent(VerseRequest)}`;
    const endpoint = `${base}?${queryParams}`;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    try {
      const response = await fetch(endpoint, {
        method,
        headers,
      });

      if (response.ok) {
        const responseData = await response.text();
        setChapterTextArr(JSON.parse(responseData).Items.map((item)=>item.Text.S));
        
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while reaching:', endpoint);
      console.error(error);
    }
  };
  sendRequest();
}, [VerseRequest]); 

  return (
     <InitialReadingLayout chapterText={ChapterTextArr}/>
  );
};

export default YourComponent;