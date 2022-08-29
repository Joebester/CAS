import FuseAnimate from '@fuse/core/FuseAnimate';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';

import Lottie from 'react-lottie-player'
import Notification from '../../Assets/Lottie/football.json'
import Auth from 'MyApp/Components/Auth';
import { useWindowWidth } from '@react-hook/window-size'
import { MDBBtn } from 'mdb-react-ui-kit'
import logo from '../../Images/logo.webp'

const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(to right, ${theme.palette.warning.dark} 0%, ${darken(
            theme.palette.error.dark,
            0.5
        )} 100%)`,
        color: theme.palette.primary.contrastText,
        height: '100%'
    }
}));

function Login() {
    const width = useWindowWidth()

    const classes = useStyles();
    const Login = () => {
        // Auth.login(() => {

        // })
    }
    return (
        <>
            <Grid container style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 md:flex-row md:p-0')}>
                        <div className="flex flex-col flex-grow-0 items-center text-white text-center md:flex-shrink-0 md:flex-1" style={{ paddingTop: 50, minWidth: width - 400 }}>
                            <FuseAnimate animation="transition.slideUpIn" delay={400}>
                                <Typography variant="h1">
                                    <h1 style={{ textAlign: 'center' }} className="head">Welcome to Football Admin Dashboard</h1>
                                </Typography>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.expandIn">
                                <div>
                                    <Lottie
                                        loop
                                        animationData={Notification}
                                        play
                                        style={{ width: 350 }}
                                    />
                                </div>
                            </FuseAnimate>
                        </div>

                        <FuseAnimate animation={{ translateX: [0, '100%'] }}>
                            <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
                                <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128">
                                    <div className='pad-form'>
                                        <img alt='logo' src={logo} style={{ width: 180 }} />
                                    </div>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className='pad-form'>
                                                <TextField
                                                    label="Username"
                                                    // value={form.email}
                                                    // onChange={handleChange}
                                                    variant="standard"
                                                    required
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    className="input"
                                                />
                                            </div>
                                            <div className='pad-form'>
                                                <TextField
                                                    label="Password"
                                                    type="password"
                                                    name="password"
                                                    // value={form.password}
                                                    // onChange={handleChange}
                                                    variant="standard"
                                                    required
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                />
                                            </div>
                                            <div className='pad-form'>
                                                <MDBBtn
                                                    rounded
                                                    color='warning'
                                                    className='btn'
                                                >Login</MDBBtn>
                                            </div>



                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </FuseAnimate>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
