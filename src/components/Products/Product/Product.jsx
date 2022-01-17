import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'


const Product = ({ product }) => {
    const classes = useStyles();
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                        {product.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            {product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="add to shopping cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>

                </Card>
            
        </div>
    )
}

export default Product
