import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;

        colors: {
            primary: string;
            secondary: string;
            secondary: string,
            tertiary: string,

            background: string;
            backgroundSecondary: string;

            text: string;
            textSecondary: string,
            textTertiary: string,
        },
    }
}
