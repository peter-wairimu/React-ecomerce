import React from 'react'
import {container, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Button, Paper, Box, Divider, Link} from '@material-ui/core'

const Cart = () => {
    const isEmpty = true;

    return (
        <container>
            <div className='{classes.toolbar}' />
            <Typography variant="h3" className={classes.title} color="inherit">
                Your Shopping Cart
            </Typography>
            {isEmpty ? <EmptyCard /> : <FullCard />}
            </container>
    )
}

export default Cart


