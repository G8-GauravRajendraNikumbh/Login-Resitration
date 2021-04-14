
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    layout: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    card: {
        width: 400,
        height: 400
    },
    loginCardLayout: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        marginTop: 20,
    },
    fieldUsername: {
        marginTop: 40, width: '100%'
    },
    fieldPassword: {
        marginTop: 40, width: '100%'
    },
    fullWidth: {
        width: '100%'
    },
    actions: {
        display: 'flex', flexDirection: 'column'
    }

});