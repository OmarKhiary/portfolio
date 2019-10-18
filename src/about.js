import React from "react";

function NewComponent(props) {
  return (
    <div className="about">
      <div className="about-image">
        <img src="http://dannyruchtie.com/images/danny-ruchtie@2x.png" />
      </div>
      <p>
        Danny Ruchtie is a designer focused on user experience, user interface,
        and interaction design, based in The Netherlands. Currently, he is
        designing new ways to develop the web at CodeSandbox.
      </p>

      <p>
        Danny is a mission-driven design leader with experience building teams &
        products for startups and large organizations alike. Previously, he was
        Growth Platform Leader for IBM IX CIC and led the IBM IX Studio BeNeLux.
        Before that, he helped the auction site Catawiki, with the design of
        their mobile platform, and he worked at several digital agencies before
        that. Danny has worked for clients like Shell, Samsung, Daimler,
        Heineken, Philips, Albelli among others.
      </p>
    </div>
  );
}

export default NewComponent;
