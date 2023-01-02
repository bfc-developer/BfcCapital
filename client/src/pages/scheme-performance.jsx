import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkTab from '../component/schem-button';


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

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="scheme pt-5 pb-50">
      <div className="container">
        <div className="row pb-50">
          <div className="col-md-12 text-center">
            <h2>Scheme Performances</h2>
          </div>
        </div>
        <Box sx={{ width: '100%' }}>
          <div className="row m-0 justify-content-center">
            <div className="col-md-8 col-sm-12">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab className="brd-right" label="Equity" {...a11yProps(0)} />
                  <Tab className="brd-right" label="Tax Saving" {...a11yProps(1)} />
                  <Tab className="brd-right" label="Hybrid" {...a11yProps(2)} />
                  <Tab label="Debt" {...a11yProps(3)} />
                </Tabs>
              </Box>
            </div>
          </div>

          <div className="scheme-button">
            <div className="row pt-60 pb-20 justify-content-center">
              <div className="col-md-5 col-sm-12">
                <LinkTab />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <TabPanel value={value} index={0}>
                  <div className="table-responsive mt-5">
                    <table class="table invest-table-area">
                      <thead>
                        <tr className='bg-gray'>
                          <th></th>
                          <th className='schemew'>Scheme Name</th>
                          <th>1Y Return</th>
                          <th>3Y Return</th>
                          <th>5Y Return</th>
                          <th>7Y Return</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/idfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">ICICI Prudential Banking and PSU Debt Fund - Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/axis.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Axis Banking & PSU Debt Fund - Regular Plan - Growth option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/bob.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Baroda BNP Paribas Banking and PSU Bond Fund-Regular Plan -Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/hdfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">HDFC Banking and PSU Debt Fund - Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/aditya.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Aditya Birla Sun Life Banking & PSU Debt Fund - Regular Plan-Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/icici.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">IDFC-IDFC Banking & PSU Debt Fund - Regular Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="table-responsive mt-5">
                    <table class="table table-hover">
                      <thead>
                        <tr className='bg-gray'>
                          <th></th>
                          <th className='schemew'>Scheme Name</th>
                          <th>1Y Return</th>
                          <th>3Y Return</th>
                          <th>5Y Return</th>
                          <th>7Y Return</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/bob.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Baroda BNP Paribas Banking and PSU Bond Fund-Regular Plan -Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/hdfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">HDFC Banking and PSU Debt Fund - Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/aditya.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Aditya Birla Sun Life Banking & PSU Debt Fund - Regular Plan-Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/icici.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">IDFC-IDFC Banking & PSU Debt Fund - Regular Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/idfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">ICICI Prudential Banking and PSU Debt Fund - Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/axis.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Axis Banking & PSU Debt Fund - Regular Plan - Growth option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="table-responsive mt-5">
                    <table class="table table-hover">
                      <thead>
                        <tr className='bg-gray'>
                          <th></th>
                          <th className='schemew'>Scheme Name</th>
                          <th>1Y Return</th>
                          <th>3Y Return</th>
                          <th>5Y Return</th>
                          <th>7Y Return</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/idfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">ICICI Prudential Banking and PSU Debt Fund - Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/axis.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Axis Banking & PSU Debt Fund - Regular Plan - Growth option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>

                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/aditya.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Aditya Birla Sun Life Banking & PSU Debt Fund - Regular Plan-Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/icici.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">IDFC-IDFC Banking & PSU Debt Fund - Regular Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/bob.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Baroda BNP Paribas Banking and PSU Bond Fund-Regular Plan -Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/hdfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">HDFC Banking and PSU Debt Fund - Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="table-responsive mt-5">
                    <table class="table table-hover">
                      <thead>
                        <tr className='bg-gray'>
                          <th></th>
                          <th className='schemew'>Scheme Name</th>
                          <th>1Y Return</th>
                          <th>3Y Return</th>
                          <th>5Y Return</th>
                          <th>7Y Return</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/bob.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Baroda BNP Paribas Banking and PSU Bond Fund-Regular Plan -Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/hdfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">HDFC Banking and PSU Debt Fund - Growth Option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/idfc.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">ICICI Prudential Banking and PSU Debt Fund - Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/axis.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Axis Banking & PSU Debt Fund - Regular Plan - Growth option</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>

                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/aditya.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">Aditya Birla Sun Life Banking & PSU Debt Fund - Regular Plan-Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>
                        <tr>
                          <td className="pt-11"> <img src="../assets/img/scheme/icici.png" className="img-fluid mxw-100" /></td>
                          <td className="pt-11"> <a href="#" className="text-dark">IDFC-IDFC Banking & PSU Debt Fund - Regular Growth</a></td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td className='pt-11 yearw'>37.54%</td>
                          <td><button className='btn-outline'>Invest</button></td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
}

export { TabPanel, a11yProps, BasicTabs }