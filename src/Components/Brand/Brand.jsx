import React from "react";
import "./Brand.css";
import { google, shopify, slack, dropbox, atlassian } from "../imports";
const Brand = () => {
  return <div className="gpt3__brand  section__padding">
<div>
  <img src={google} alt="google" />
</div>
<div>
  <img src={shopify} alt="shopify" />
</div>
<div>
  <img src={slack} alt="Slack" />
</div>
<div>
  <img src={atlassian} alt="atlassian" />
</div>
<div>
  <img src={dropbox} alt="Dropbox" />
</div>
  </div>;
};

export default Brand;
