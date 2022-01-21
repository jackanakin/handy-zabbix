export default interface ITheme {
    text: {
        primaryColor: string;
        porcelanColor: string;
    },
    layout: {
        pageBackground: string;
        menuBackground: string;
    },
    pages: {
        home: {
            icon: string;
            footerHelpTitle: string;
        }
    }
}