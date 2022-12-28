import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        login: {
            main: '#e50914'
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        }
    },
});
function useColorMaterial(style) {
    const color = style
    return color
}

export default useColorMaterial;