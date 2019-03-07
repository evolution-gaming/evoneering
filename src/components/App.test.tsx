import React from "react";
import App from "./App";
import ReactDOMServer from "react-dom/server";
import { takeScreenshot } from "../utils/testUtils";

const deviceDimensions = {
    pageWidth: 1440,
    pageHeight: 4189,
};

xdescribe("App", () => {
    it("Screenshot of the whole app", async () => {
        const html = ReactDOMServer.renderToStaticMarkup(<App/>);
        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: html,
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});
