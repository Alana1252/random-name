import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    
    
  }),
}));



export default function PersistentDrawerRight() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "white"}} position="fixed"  >
        <Toolbar>
        <img
                        alt="sahaware"
                        height={30}
                        marginRight="100"
                        src="sahaware.png"
                        sx={{ display: { xs: 'none', md: 'flex' }, }} />
                    </Toolbar>
      </AppBar>

    </Box>
  );
}
