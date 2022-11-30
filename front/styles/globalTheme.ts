import { MantineThemeOverride } from "@mantine/core";

export const globalTheme: MantineThemeOverride = {
    globalStyles: () => ({
        'header, body': {
            // backgroundColor: '#FAFAFB',
            backgroundColor: "white",
        }
    }),
    fontFamily: "Poppins, sans-serif",
    colorScheme: 'light',
    colors: {
        defaultBlack: ['#494B4D'],
        darkGray: ['#8D8E90'],
        lightGray: ['#8D8E90'],
        background: ['#FAFAFB'],
        lightPurple: ['#7666D7'],
        purple: ['#7C6BE7'],
        white: ['#FFF']
    },
    primaryColor: 'purple',
    primaryShade: 0,
    defaultGradient: {from: 'purple', to: 'lightPurple'},
    shadows: {
        md: '0px 4px 10px rgba(0, 0, 0, 0.04)',
    },

}