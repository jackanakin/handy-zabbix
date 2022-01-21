import ITheme from "../@types/ITheme";

export const darkTheme =
    {
        text: {
            primaryColor: "white",
        },
        layout: {
            pageBackground: "black",
            menuBackground: "black",
        },
        pages: {
            home: {
                icon: "#f44336",
                footerHelpTitle: "gray"
            }
        }
    } as ITheme;