import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Tab from '@mui/material/Tab';
import LiveFixtures from './LiveFixtures';
import ResultsPage from './ResultsPage';
import UpcomingFixtures from './UpcomingFixtures';

import LeagueTable from './LeageTable';

function HomePage() {
  const [divison, setDivison] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDivison(event.target.value);
    console.log(divison);
  };

  const [value, setValue] = React.useState("1");
  
  const handleChange2 = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <div>
      <h1>Footium Scores</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Divison</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={divison}
          label="Divison"
          onChange={handleChange}
        >
          <MenuItem value={1}>Divison 1 - League 1</MenuItem>
          <MenuItem value={3}>Divison 2 - League 1</MenuItem>
          <MenuItem value={5}>Divison 2 - League 2</MenuItem>
          <MenuItem value={7}>Divison 3 - League 1</MenuItem>
          <MenuItem value={9}>Divison 3 - League 2</MenuItem>
          <MenuItem value={11}>Divison 3 - League 3</MenuItem>
          <MenuItem value={13}>Divison 3 - League 4</MenuItem>
          <MenuItem value={15}>Divison 4 - League 1</MenuItem>
          <MenuItem value={17}>Divison 4 - League 2</MenuItem>
          <MenuItem value={19}>Divison 4 - League 3</MenuItem>
          <MenuItem value={21}>Divison 4 - League 4</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, 
                            borderColor: "divider" }}>
                            <TabList onChange={handleChange2} variant="scrollable"
  scrollButtons="auto">
                                <Tab
                                    label="Past Results" value="1" />
                                <Tab
                                    label="Live Fixtures" value="2" />
                                <Tab
                                    label="Upcoming Matches" value="3" />
                                <Tab
                                    label="League Tables" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                          <ResultsPage divison={divison}/>
                        </TabPanel>
                        <TabPanel value="2">
                          <LiveFixtures/>
                        </TabPanel>
                        <TabPanel value="3">
                          <UpcomingFixtures divison={divison}/>
                        </TabPanel>
                        <TabPanel value="4">
                          <LeagueTable divison={divison}/>
                        </TabPanel>
                    </TabContext>
                </Box>
    </div>

  );
}
export default HomePage;