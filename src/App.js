import React from "react";
import  { ThemeProvider, createTheme, makeStyles }  from '@material-ui/core';
import Home from "./home"

const useStyles= makeStyles ({

  root:{
    background: 'red',
    height: '1000vh',
  },

});

function App(){
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary:{
        main: '#3f51b5'
      },
    },
  });

  const classes = useStyles();

  return(
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App;
