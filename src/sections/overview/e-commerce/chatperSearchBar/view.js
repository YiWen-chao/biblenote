import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import FetchBibleText from './fetchChapter';
import BibleBookInfo from '../data/BibleBookInfo';

export default function FreeSolo() {
    const [chaptersArr,setChaptersArr]   =  React.useState([]); 
    
    const [verseRequest,setVerseRequest]=  React.useState([]); 
    const [showFetchBibleText, setShowFetchBibleText] = React.useState(false);
    const handleButtonClick = () => {
      setShowFetchBibleText(true);
    };
  
   
  return (
    <Stack spacing={2}>
      {/* sx={{ width: 300 }} */}
      <Autocomplete
        id="Book"
        freeSolo
        options={BibleBookInfo.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="書卷" />}
        onChange={(event, newValue) => {
          setShowFetchBibleText(false);
           const temChaptArr =[];
            for(let i= 1; i<=newValue.totalChapt;i+=1){
                temChaptArr.push({label:i.toString(),book:newValue});
                // autocomplete 的label value要是個string
            }
            setChaptersArr(temChaptArr);
          }}
      />
      <Autocomplete
        freeSolo
        id="Chapter"
        disableClearable
        options={chaptersArr.map((option) => option)}
        getOptionLabel={(option) => option.label }
        renderInput={(params) => (
          <TextField
            {...params}
            label="章"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={(event, newValue) => {
          setShowFetchBibleText(false);
          setVerseRequest(newValue)
        }}
      />
      <Button 
        color="primary" 
        variant="contained"
        onClick={handleButtonClick}
      >
          查詢
        </Button>
        {showFetchBibleText && <FetchBibleText verseRequest={verseRequest} />}
    </Stack>
  );
}
