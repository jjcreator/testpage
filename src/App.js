import React from 'react';
import './App.css';
import { Box, Button } from "@material-ui/core"
import MiniDrawer from './MiniDrawer.js';

function App() {
  return (
    <div className="App">
      <Box>
        <MiniDrawer/>
      </Box>
    </div>
  );
}

export default App;
