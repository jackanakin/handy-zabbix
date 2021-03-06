export default interface ITheme {
    text: {
        primaryColor: string;
        porcelanColor: string;
        linkColor: string;
    },
    layout: {
        pageBackground: string;
        menuBackground: string;
        footer: {
            hover: string;
        }
    },
    pages: {
        home: {
            icon: string;
            footerHelpTitle: string;
        }
    }
}