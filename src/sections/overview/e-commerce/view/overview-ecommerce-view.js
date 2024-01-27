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
        {/* <Grid xs={12} md={8}>
        
          <EcommerceWelcome
            title={`Congratulations! \n ${user?.displayName}`}
            description="Best seller of the month You have done 57.6% more sales today."
            img={<MotivationIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Now
              </Button>
            }
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <EcommerceSaleByGender
            title="Sale By Gender"
            total={2324}
            chart={{
              series: [
                { label: 'Mens', value: 44 },
                { label: 'Womens', value: 75 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EcommerceYearlySales
            title="Yearly Sales"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Total Income',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Total Income',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <EcommerceBestSalesman
            title="Best Salesman"
            tableData={_ecommerceBestSalesman}
            tableLabels={[
              { id: 'name', label: 'Seller' },
              { id: 'category', label: 'Product' },
              { id: 'country', label: 'Country', align: 'center' },
              { id: 'totalAmount', label: 'Total', align: 'right' },
              { id: 'rank', label: 'Rank', align: 'right' },
            ]}
          />
        </Grid> */}

    
      </Grid>
    </Container>
  );
}
