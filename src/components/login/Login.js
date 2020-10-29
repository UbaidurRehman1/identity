import React, {useCallback, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoginHandler} from "../../store/actions/Login";
import CircularProgress from "@material-ui/core/CircularProgress";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MaterialLink color="inherit" href="https://github.com/UbaidurRehman1/identity">
                Identity
            </MaterialLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const loginHandler = useCallback((username, password) => dispatch(LoginHandler(username, password)), [dispatch]);
    const isLoginStart = useSelector(state => state.login.loginStart);
    const isLogin = useSelector(state => state.login.isLogin);


    const login = (event) => {
        event.preventDefault();
        loginHandler(username, password);
    }

    if (isLogin) {
        return <Redirect to="/identity/welcome"/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <form className={classes.form} onSubmit={(event) => login(event)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {
                        isLoginStart ? <CircularProgress style={{marginTop: '8px'}}/> :
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Log In
                            </Button>

                    }
                    <Grid container>
                        <Grid item>
                            <Link to="/identity/signup" style={{textDecoration: 'none', outline: "none"}}>
                                <Button size="small" color="primary">
                                    Don't have an account? Sign Up
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}

export default Login;
