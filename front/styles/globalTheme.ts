import { MantineThemeOverride } from "@mantine/core";

export const globalTheme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    "header, body": {
      // backgroundColor: "#FAFAFB",
      backgroundColor: "white",
      color: theme.colors.neutral[2],
    },
  }),
  colorScheme: "light",
  colors: {
    primary: ["#221A51","#3C2E90","#4C3BB7","#5E49E1","#7C6BE7","#988AEC","#C5BEF4","#E4E0F7","#F1F0FB","#F8F7FD"],
    secondary: ["#51311A","#90582E","#B76F3B","#E18949","#E7A06B","#ECB48A","#F4D4BE"],
    neutral: ["#1C1E21","#333437","#494B4D","#606164","#77787A","#8D8E90"],
    neutralLight: ["#606164","#D2D2D3","#E8E8E9","#F4F4F4","#FFFFFF"],
    confirmation: ["#154D32","#268A5A","#30AE71","#3BD78C","#61DFA2","#81E5B5","#B8F1D6"],
    destructive: ["#511A24","#902E40","#B73B51","#E14964","#E76B82","#EC8A9C","#F4BEC7"],
    warning: ["#5B4A0E","#A2841A","#CDA720","#FDCE28","#FDD751","#FDE075","#FEEEB2"],
    lightPurple: ["","","","#988AEC"],
  },
  primaryColor: "primary",
  primaryShade: 3,
  defaultGradient: { from: "primary", to: "lightPurple", deg: 105 },
  shadows: {
    md: "0px 4px 10px rgba(0, 0, 0, 0.04)",
    xl: "0px 4px 40px rgba(0, 0, 0, 0.1)",
  },
  other: {
    spacing: {
      xxs: 8,
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 30,
    },
    breakpoints: {
      mobileM: 375,
      mobileL: 425,
      tablet: 768,
      laptopS: 1024,
      laptopM: 1200,
      laptopL: 1600,
      laptopXL: 2256,
      laptopXXL: 2560,
    }
  },
};