import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Cart = () => {
        const totalCart = useSelector((state) => state.cartStore.cart);
        const dispatch = useDispatch();

        const useStyles = makeStyles({
            root: {
              padding: '50px',
              margin: '0 auto',
            },
            button : {
                marginTop: '15px',
                border : '1px solid black'

            }
          });
    
        const classes = useStyles();

        const clearCart = () => {
            dispatch({
                type: 'ADD_TO_CART',
                paylaod: 0,
            })
        }

        return (
            <>
                <div className={classes.root}>
                    <Typography variant="body2" color="textSecondary" component="p">
                            Total Product : {totalCart ? totalCart : 'No Product Available'}
                    </Typography>
                    <Button className={classes.button} size="small" color="primary" onClick={clearCart}>Clear Cart</Button>
                </div>
            </>
        )
}

export default Cart;