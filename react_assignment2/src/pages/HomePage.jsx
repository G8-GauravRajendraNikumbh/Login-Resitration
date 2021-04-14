import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './HomeStyle';
export default function HomePage(props) {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <div className={classes.loginCardLayout}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        
                        <h1>Welcome</h1>
                        <h2>successfully logged!</h2>
                    </CardContent>
                   
                </Card>
            </div>
        </div>
    );
}






