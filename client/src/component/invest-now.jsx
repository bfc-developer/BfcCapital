import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import { FaCalendarAlt} from 'react-icons/fa';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="invest-now-tab">
        <div className="container">
         <div className="row mfoc945ScreenMainDiv">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Monthly SIP" {...a11yProps(0)} />
          <Tab label="One Time" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       
        <div className="row pt-4">
            <div className="col-md-6 pb-4 pt-1"><span className="invest-text">SIP Amount</span></div>
            <div className="col-md-6 pb-4 d-flex">
            <span className="invest-icon">₹</span>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="col-md-6 pt-1"> <span className="invest-text">Monthly SIP Date </span></div>
            <div className="col-md-6  pb-4 d-flex"> <span className="invest-icon"><FaCalendarAlt /></span>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></div>
        </div>
        <div className=" invest-btn pt-80 text-center">
            <Button className="btn3" variant="outline-primary"> Start SIP</Button>{' '}
          </div>
       
       
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="row mb-72  pt-4">
            <div className="col-md-6 pb-4 pt-1"><span className="invest-text">Amount</span></div>
            <div className="col-md-6 pb-4  d-flex">
            <span className="invest-icon">₹</span>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
           
          </div>
          <div className="invest-btn pt-80 text-center">
            <Button className="btn3" variant="primary"> Invest Now</Button>{' '}
          </div>
      </TabPanel>
    </Box>
    </div>
    </div>
    </div>
  );
}