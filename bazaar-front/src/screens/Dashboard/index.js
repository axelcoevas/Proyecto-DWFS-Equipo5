import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Home from "./components/Home";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        padding: 2,
      }}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentTab}
        onChange={handleTabChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Home" />
        <Tab label="Catalog" />
        <Tab label="Customers" />
        <Tab label="Statistics" />
        <Tab label="Account" />
        <Tab label="Settings" />
      </Tabs>
      <TabPanel value={currentTab} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        Catalog
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        Customers
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        Statistics
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        Account
      </TabPanel>
      <TabPanel value={currentTab} index={5}>
        Settings
      </TabPanel>
    </Box>
  );
};

const styles = {
  tabPanel: {
    backgroundColor: "blue",
  },
};

export default Dashboard;
