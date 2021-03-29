import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from './../LoaderComponent/LoaderComponent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';


const Product = () => {
    const useStyles = makeStyles({
        root: {
          margin: '10px',
          width: 345,
          display: 'inline-block',
          height: 420,
        },
        media: {
          height: 240,
        },
        category: {
            display: 'flex',
            justifyContent: 'end',
        },
      });

    const classes = useStyles();

    const [loader, setLoader] = useState(true)
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
             .then(res => {
                 setProducts(res.data);
                 setLoader(false);
             }).catch(err => {
                 console.log(err.response);
             })
    }, []);

    const history = useHistory();

    const getProduct = (id) => {
        history.push(`/product-details/${id}`);
    }

    const store = useSelector((state) => state.cartStore);

    const dispatch = useDispatch();

    const addToCart = (id) => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            cart: store.cart ? store.cart + 1 : 1,
            product: store.product ? [res.data, ...store.product] : [res.data],
          }
        })
      }).catch(err => {
          console.log(err.response);
      });
    }    

    if (loader) {
        return (
            <Loader />
        )
    } else {
        return (
            <> 
            {
                products.map((product, index) => {
                    return (
                        <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={product.image}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h5">
                                {product.title = product.title.length > 10 ? product.title.substring(0, 10)
                            : product.title}
                            </Typography>
                            
                           <Grid container direction="row" justify="space-between" alignItems="center">
                            <Typography variant="body2" color="textSecondary" component="p">
                                ${product.price}
                            </Typography>
                            <Typography className={classes.category} variant="body2" color="textSecondary" component="p">
                                {product.category}
                            </Typography>
                           </Grid>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                          <Button size="small" color="primary"  onClick={() => getProduct(product.id)}>
                            Details
                          </Button>
                          <Button size="small" color="danger" onClick={() => addToCart(product.id)}>
                            Add Cart
                          </Button>
                          </Grid>
                        </CardActions>
                      </Card>
                    )
                })
                } 
            </>
            )
        }
    }

export default Product;
