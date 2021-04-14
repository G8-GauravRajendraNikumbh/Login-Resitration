import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import AvatarImg from '../../assets/user.png';
import { useStyles } from './styles';


export default function LoginPage(props) {
    const [formData, setFormData] = useState({})
    const history = useHistory()
    const classes = useStyles();
    const userData = history.location.state;

   
    const onChange = (value, tag) => {
        setFormData({ ...formData, [tag]: value })
    }
    const onLogin = () => {
        if (userData.userName === formData.userName && userData.password === formData.password) {
            history.push({ pathname: '/home', state: { ...formData, ...userData } })
        }
        else {
            alert('Login failed'); 
        }
    }

    return (
        <div className={classes.layout}>
            <div className={classes.loginCardLayout}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <center>
                            <Avatar alt="Remy Sharp" src={AvatarImg} />
                        </center>
                        <TextField
                            className={classes.fieldUsername}
                            placeholder={'Enter Username'}
                            onChange={(e) => onChange(e.target.value, 'userName')}
                        />
                        <TextField
                            className={classes.fieldPassword}
                            placeholder={'Enter Password'} type={'password'}
                            onChange={(e) => onChange(e.target.value, 'password')}

                        />

                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button
                            onClick={onLogin}
                            className={classes.fullWidth}
                            variant="contained"
                            color="primary"
                            size="large">Login</Button>
                        <div style={{ marginTop: 20 }}>
                            <Link to={'/registration'}>Sign Up</Link>
                        </div>

                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
