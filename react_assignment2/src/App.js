import Routes from './route';
import './App.css';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#ece9e9'
  },

});

function App() {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Routes />
    </Paper>
  );
}

export default App;

