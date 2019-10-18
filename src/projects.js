import React from "react";
import Thumbnail from "./thumbnail.js";
import "./app.css";

function Projects(props) {
  return (
    // Render a Thumbnail component

    <div className="projects">
      <Thumbnail
        link="https://codesandbox.io"
        image="http://dannyruchtie.com/img/portfolio/codesandbox.png"
        title="CodeSandbox"
        category="Design Lead at CodeSandbox"
      />

      <Thumbnail
        link="https://www.ibm.com/us-en/"
        image="http://dannyruchtie.com/img/portfolio/ibm.png"
        title="IBM iX"
        category="Design Lead & Growth Platform Leader at IBM"
      />

      <Thumbnail
        link="http://catawiki.com"
        image="http://dannyruchtie.com/img/portfolio/catawiki.png"
        title="Catawiki Mobile"
        category="Sr. User Experience Design at Catawiki"
      />

      <Thumbnail
        link="https://www.bonusprint.co.uk"
        image="http://dannyruchtie.com/img/portfolio//albelli.png"
        title="Albelli Mobile "
        category="Design Lead at Peperzaken"
      />

      <Thumbnail
        link="https://www.lifelines.nl"
        image="http://dannyruchtie.com/img/portfolio//lifelines.png"
        title="LifeLines"
        category="User Experience Design at Fur"
      />

      <Thumbnail
        link="https://vimeo.com/28355560"
        image="http://dannyruchtie.com/img/portfolio/masterofsymphony.png"
        title="Master of Symphony"
        category="User Experience Design at Fur"
      />

      <Thumbnail
        link="https://vimeo.com/75477866"
        image="http://dannyruchtie.com/img/portfolio//philips-tango.png"
        title="Philips Tango Denasqué"
        category="Multimedia Designer at Weber MC"
      />

      <Thumbnail
        link="https://vimeo.com/75477867"
        image="http://dannyruchtie.com/img/portfolio//philips-ht9810.png"
        title="Philips HT9810"
        category="Multimedia Designer at Weber MC"
      />

      <Thumbnail
        link="https://vimeo.com/76327254"
        image="http://dannyruchtie.com/img/portfolio//philips-Perfect-pixel.png"
        title="Philips Perfect Pixcel HD"
        category="Multimedia Designer at Weber MC"
      />

      <Thumbnail
        link="/projects/https://vimeo.com/75492903"
        image="http://dannyruchtie.com/img/portfolio/philips-perfectpixel.png"
        title="Philips TQ Trailer"
        category="Multimedia Designer at Weber MC"
      />
    </div>
  );
}

export default Projects;
