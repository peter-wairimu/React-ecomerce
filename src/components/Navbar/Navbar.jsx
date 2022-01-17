import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo  from '../../assets/pin.png';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>

                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="amazon" width="100" height="50" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='show cart items' color="inherit">
                            <Badge badgeContent={3} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar
