import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
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
      menuItem : {
        textDecoration: 'none',
        color: '#fff'
      }
    }));

    const classes = useStyles();

    const totalCart = useSelector((state) => state.cartStore.cart);

    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Link className={classes.menuItem} to='/'>AliNana</Link>
            </Typography>
            <MenuItem><Link className={classes.menuItem} to='/'>Home</Link></MenuItem>
            <MenuItem> <Link className={classes.menuItem} to='/about'>About</Link></MenuItem>
            <MenuItem><Link  className={classes.menuItem} to='/product'>Product</Link></MenuItem>
            <MenuItem><Link className={classes.menuItem} to='/create-product'>Create-Product</Link></MenuItem>
            <MenuItem><Link className={classes.menuItem} to='/cart'>Cart {totalCart ? `(${totalCart})`: ''}</Link></MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;