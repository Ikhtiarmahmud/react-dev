import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
// import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Navigation = () => {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                news
            </Typography>
            <Link href="#" onClick={preventDefault}>
                Link
            </Link>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        // <>
            // <ul >
            //     <li style={disInline}>
            //         <Link to='/'>Home</Link>
            //     </li>
            //     <li style={disInline}>
            //         <Link to='/about'>About</Link>
            //     </li>
            //     <li style={disInline}>
            //         <Link to='/product'>Product</Link>
            //     </li>
            //     <li style={disInline}>
            //         <Link to='/create-product'>Create Product</Link>
            //     </li>
            // </ul>
        // </>
    )
}

// const disInline = {
//     display : 'inline-block',
//     marginRight : '5px'
// }

export default Navigation;