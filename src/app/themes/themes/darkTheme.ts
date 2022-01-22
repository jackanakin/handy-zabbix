import ITheme from "../@types/ITheme";

export const darkTheme =
    {
        text: {
            primaryColor: "white",
            porcelanColor: "#D1D1D1",
        },
        layout: {
            pageBackground: "black",
            menuBackground: "black",
            footer: {
                hover: "#f44336",
            }
        },
        pages: {
            home: {
                icon: "#f44336",
                footerHelpTitle: "gray"
            }
        }
    } as ITheme;