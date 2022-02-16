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

            white: string;

            text: string;
            textSecondary: string,
            textTertiary: string,

            placeholder: string,

            error: string,

            card: string;
            border: string,
        },
    }
}
