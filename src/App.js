import React from 'react';
import './App.css';
import { Box } from "@material-ui/core"
import MiniDrawer from './MiniDrawer.js';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Box>
        <MiniDrawer/>
      </Box>
    </div>
    </Router>
  );
}

export default App;
