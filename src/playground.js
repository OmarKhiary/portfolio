import React from "react";
import Thumbnail from "./thumbnail.js"; // Import the Thumbnail component
import "./app.css";

function Playground(props) {
  return (
    // Render a Thumbnail component

    <div className="projects">
      <Thumbnail
        link="https://github.com/druchtie/h265"
        image="http://dannyruchtie.com/img/portfolio/h265.png"
        title="H265 video Encouder "
        category="Web Development"
      />
      <Thumbnail
        link="https://twitter.com/druchtie/status/684117457389391872"
        image="http://dannyruchtie.com/img/portfolio/golden-ratio.png"
        title="Golden Ratio Safari Extention"
        category="Extention Development"
      />

      <Thumbnail
        link="https://twitter.com/druchtie/status/1003333444678627328/video/1"
        image="http://dannyruchtie.com/img/portfolio/3D-UI.png"
        title="3D UI Prototype"
        category="Prototyping"
      />

      <Thumbnail
        link="http://dannyruchtie.com/color-contrast-calculator-with-yiq/"
        image="http://dannyruchtie.com/img/portfolio/color-contrast.png"
        title="Color Contrast Calculator"
        category="Web Development"
      />
    </div>
  );
}

export default Playground;
