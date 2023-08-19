import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	line-height: 1;
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body::-webkit-scrollbar {
	width: 12px;
}

body::-webkit-scrollbar-track {
	background: var(--gray-5);
}

body::-webkit-scrollbar-thumb {
	background-color: var(--gray-3);
	border-radius: 20px;
	border: 2px solid var(--gray-4); 
}


:root {
	--white: #FFFFFF;
	--black: #000000;
	--transparent: transparent;

	--brand-1: #5C63ED;
	--brand-2: #7D82F1;
	--brand-3: #BEC1F8;
	--brand-4: #E7E8FC;
	--brand-5: #2D2E4D;

	--gray-1: #212529;
	--gray-2: #495057;
	--gray-3: #CED3D7;
	--gray-4: #F1F3F5;
	--gray-5: #F8F9FA;
	--gray-6: #5E5E66;

	--lexend-tipography: 'Lexend', sans-serif;
	--ibm-tipography: 'IBM Plex Sans', sans-serif;
	--inter-tipography: "Inter", sans-serif;

	--text-5xl: 3rem;
	--text-4xl: 2.25rem;
	--text-3xl: 1.875rem;
	--text-2xl: 1.5rem;
	--text-xl: 1.25rem;
	--text-lg: 1.125rem;
	--text-md: 1rem;
	--text-sm: 0.875rem;
	--text-xs: 0.75rem;
	
	--line-height-5xl: 1;
	--line-height-4xl: 2.5rem;
	--line-height-3xl: 2.25rem;
	--line-height-2xl: 2rem;
	--line-height-xl: 1.75rem;
	--line-height-lg: 1.75rem;
	--line-height-md: 1.5rem;
	--line-height-sm: 1.25rem;
	--line-height-xs: 1rem;
}
`;
