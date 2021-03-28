import React from 'react';
import './loader.css';
import Grid from '@material-ui/core/Grid';

const Loader = () => {

    return (
        <>
         {/* <Grid container direction="row" justify="space-center" alignItems="center"> */}
                <div className="spinner-box">
                    <div className="circle-border">
                        <div className="circle-core"></div>
                    </div>  
                </div>
          {/* </Grid> */}
        </>
    )
}

export default Loader;