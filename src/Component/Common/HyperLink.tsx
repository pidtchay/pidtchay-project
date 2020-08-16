/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-returns */
import React from 'react';

/**
 * Hyperlink component.
 * !!! Vuln: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/.
 */
export const HyperLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    return <a target="_blank" rel="noopener noreferer" {...props} />;
};
