'use client';

import React from 'react';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { useSettingsContext } from 'src/components/settings';

import EditorToolbar from'../editorToolbar/view';
import ChapterSearchBar from '../chatperSearchBar/view';
import ReadEditModeSwitch from'../read_edit_mode_switch/view';
// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  const [ifShowEditBar,setIfShowEditBar]=React.useState(true);
  const handleChange=(value)=>{
          setIfShowEditBar(value);
  }
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={0}>
 
        <Grid xs={12} md={8}>
        
          <ReadEditModeSwitch onChange={handleChange}/>
          { ifShowEditBar === true &&<EditorToolbar/> }
          <ChapterSearchBar/>

        </Grid>
      </Grid>
    </Container>
  );
}
