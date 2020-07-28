import React from "react";
import { Bootcamp } from "./Bootcamp";
import ReactDOMServer from "react-dom/server";
import { takeScreenshot } from "../../utils/testUtils";

const deviceDimensions = {
    pageWidth: 1440,
    pageHeight: 4189,
};

xdescribe("Bootcamp", () => {
    it("Screenshot of the whole app", async () => {
        const html = ReactDOMServer.renderToStaticMarkup(<Bootcamp/>);
        const screenShot = await takeScreenshot({
            ...deviceDimensions,
            html: html,
        });

        expect(screenShot).toMatchImageSnapshot();
    });
});