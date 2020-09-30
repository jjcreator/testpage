import React from 'react';
import { Drawer, Box,Divider } from '@material-ui/core';


function Nav() {
  return (
    <div className="navigation">
      <Drawer
        anchor="left"
      >
      <Box className>Menu</Box>
      <Divider/>
      

      </Drawer>
    </div>
  );
}

export default Nav;
