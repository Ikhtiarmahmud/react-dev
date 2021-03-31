import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link} from 'react-router-dom';

const Cart = () => {
        const totalCart = useSelector((state) => state.cartStore);
        const dispatch = useDispatch();

        const useStyles = makeStyles({
            root: {
              padding: '50px',
              margin: '0 auto',
            },
            button : {
                marginTop: '15px',
                border : '1px solid black',
                color: 'black'

            },
            image: {
                width: '50px',
                height: '50px',
              },
            menuItem : {
                textDecoration: 'none',
                color: 'black'
            }
          });
    
        const classes = useStyles();

        const clearCart = () => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    cart: 0,
                    product: []
                },
            })
        }

        let btn;
        if (typeof totalCart.cart == 'undefined' || totalCart.cart == 0) {
            btn = <Link className={classes.menuItem
                        } to="/product"><Button className={classes.button} size="small" color="primary">Purchase Now</Button></Link>
        } else {
            btn = <Button className={classes.button} size="small" color="primary" onClick={clearCart}>Clear Cart</Button>
        }

        return (
            <>
                <div className={classes.root}>
                    <Typography variant="body2" color="textSecondary" component="p">
                            Total Product : {totalCart.cart ? totalCart.cart : 'No Product Available'}
                    </Typography>
                    {
                        totalCart.product && totalCart.product.length > 0 && 
                        <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Serial</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Qauntity</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {totalCart.product.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell><img className={classes.image} src={row.image}/></TableCell>
                                    <TableCell>1</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    }
                    {btn}
                </div>
            </>
        )
}

export default Cart;