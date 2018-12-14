import amber from '@material-ui/core/colors/purple';
import createMuiTheme from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#555555',
            main: '#555555',
            dark: '#555555',
            contrastText: '#fff',
        },
        secondary: {
            light: amber[300],
            main: amber[500],
            dark: amber[700],
            contrastText: '#000',
        },
    },
});