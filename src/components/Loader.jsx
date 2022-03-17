import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 200 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="50" y="64" rx="0" ry="0" width="0" height="1" />
    <circle cx="102" cy="101" r="70" />
    <circle cx="350" cy="401" r="90" />
    <rect x="38" y="184" rx="5" ry="5" width="130" height="20" />
    <rect x="72" y="181" rx="0" ry="0" width="8" height="1" />
    <rect x="31" y="178" rx="0" ry="0" width="11" height="0" />
    <rect x="30" y="209" rx="8" ry="8" width="150" height="54" />
    <rect x="119" y="166" rx="0" ry="0" width="0" height="2" />
    <rect x="32" y="247" rx="0" ry="0" width="0" height="2" />
    <rect x="36" y="271" rx="10" ry="10" width="58" height="23" />
    <rect x="105" y="272" rx="9" ry="9" width="70" height="23" />
    <rect x="141" y="243" rx="0" ry="0" width="1" height="5" />
  </ContentLoader>
);

export default Loader;