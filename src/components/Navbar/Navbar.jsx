import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/ApeShit.png'
import useStyles from './styles'
const Navbar = () => {
    const classes = useStyles()
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit" > 
        <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
                <img src = {logo} alt="Ape.js" height="25px" className={classes.image} />
                Ape Shit
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
                <IconButton aria-label ="Show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary"></Badge>
                <ShoppingCart></ShoppingCart>
                </IconButton>
            </div>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
