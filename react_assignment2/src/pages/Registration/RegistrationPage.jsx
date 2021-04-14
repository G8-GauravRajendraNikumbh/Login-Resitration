import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AvatarImg from '../../assets/user.png'
import { useStyles } from './styles';


export default function RegistratioPage(props) {
    const [formData, setFormData] = useState({})
   
    const history = useHistory()
    const classes = useStyles();
  
    const onChange = (value, tag) => {
        setFormData({ ...formData, [tag]: value })
    }
    const onRegister = () => {
        if(formData.firstName ===undefined && formData.lastName ===undefined && formData.userName ===undefined && formData.password ===undefined){
            alert("All field is required")
        } else if(formData.firstName === undefined){
            alert("First Name required");
        } else if(formData.lastName ===undefined){
            alert("Last Name required");
        } else if(formData.userName ===undefined){
            alert("Last Username required");
        } else if(formData.password ===undefined){
            alert("Last Password required");
        } else{

            history.push({ pathname: '/login', state: { ...formData } });
        }
        
    }

    return (
        <div className={classes.layout}>
            <div className={classes.loginCardLayout}>
                <form>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <center>
                            <Avatar alt="Remy Sharp" src={AvatarImg} />
                        </center>
                        <TextField
                            className={classes.fieldUsername}
                            name = "firstName"
                            placeholder={'Enter First Name'}
                            onChange={(e) => onChange(e.target.value, 'firstName')} required = ""
                        />
                        <TextField
                            className={classes.fieldUsername}
                            name = "lastName"
                            placeholder={'Enter Last Name'}
                            onChange={(e) => onChange(e.target.value, 'lastName')} required = ""
                        />
                        <TextField
                            className={classes.fieldUsername}
                            name = "userName"
                            placeholder={'Enter Username'}
                            onChange={(e) => onChange(e.target.value, 'userName')} required = ""
                        />

                        <TextField
                            className={classes.fieldPassword}
                            name = "password"
                            placeholder={'Enter Password'} type={'password'}
                            onChange={(e) => onChange(e.target.value, 'password')} required = ""

                        />

                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button
                            onClick={onRegister}
                            className={classes.fullWidth}
                            variant="contained"
                            color="primary"
                            size="large">Sign Up</Button>

                    </CardActions>
                </Card>
                </form>
            </div>
        </div>
    );
}
