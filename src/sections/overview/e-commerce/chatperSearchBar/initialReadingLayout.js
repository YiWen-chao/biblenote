import * as React from 'react';

export default function initialReadingLayout(props) {
    const bibleTextArr =props.chapterText;
    const generateVerse=bibleTextArr.map((item, index)=><div key={index}><span>{index+1} </span> {item}</div>
    );

  return (
    <>
        {generateVerse}
    </>
  );
}
