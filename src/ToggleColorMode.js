import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                >
                    {theme.palette.mode} mode
                    <IconButton
                        sx={{
                            width: '30px', // Cambia el ancho según tus preferencias
                            height: '30px', // Cambia la altura según tus preferencias
                        }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode;
