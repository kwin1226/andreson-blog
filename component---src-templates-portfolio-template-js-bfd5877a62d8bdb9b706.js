/*! For license information please see component---src-templates-portfolio-template-js-bfd5877a62d8bdb9b706.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=a("iSRb"),l=a.n(o),m=function(e){var t=e.author,a=e.isShowName,n=void 0===a||a,o=e.isIndex;return i.a.createElement("div",{className:l.a.author},i.a.createElement(r.Link,{to:"/"},i.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:l.a.author__photo,width:"75",height:"75",alt:t.name})),n?i.a.createElement(i.a.Fragment,null,!0===o?i.a.createElement("h1",{className:l.a.author__title},i.a.createElement(r.Link,{className:l.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:l.a.author__title},i.a.createElement(r.Link,{className:l.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:l.a.author__subtitle},t.bio)):null)},d=a("4Mra"),s=a("SySy"),_=a.n(s),c=a("gGy4"),u=function(e){var t=e.isIndex,a=Object(c.b)().author;return i.a.createElement("div",{className:_.a.sidebar},i.a.createElement("div",{className:_.a.sidebar__inner},i.a.createElement(m,{author:a,isIndex:t,isShowName:!0}),i.a.createElement(d.a,{contacts:a.contacts})))}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta":"Feed-module--feed__item-meta--3g8pN","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-socialImage":"Feed-module--feed__item-socialImage--1Q6Cu","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=a("hhIz"),l=a("1xLx"),m=a.n(l),d=function(e){var t=e.edges;return i.a.createElement("div",{className:m.a.feed},t.map((function(e){var t,a,n,l,d,s=!!e.node.frontmatter.socialImage,_=function(){return s?i.a.createElement(o.a,{alt:e.node.frontmatter.title+"-social-image",image:e.node.frontmatter.socialImage.childImageSharp.gatsbyImageData,placeholder:"blurred"}):null},c=null!==(t=null==e||null===(a=e.node)||void 0===a?void 0:a.timeToRead)&&void 0!==t?t:0,u=function(){return c?i.a.createElement(i.a.Fragment,null,c," min read",i.a.createElement("span",{className:m.a["feed__item-meta-divider"]},"·")):null},g=!(null===(n=null==e||null===(l=e.node)||void 0===l||null===(d=l.frontmatter)||void 0===d?void 0:d.portfolio)||void 0===n||!n);return i.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:m.a["feed__item-meta"]},i.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),i.a.createElement("span",{className:m.a["feed__item-meta-divider"]},"·"),i.a.createElement(u,null),i.a.createElement("span",{className:m.a["feed__item-meta-category"]},i.a.createElement(r.Link,{to:g?e.node.fields.portfolioSlug:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},g?e.node.frontmatter.portfolio:e.node.frontmatter.category))),i.a.createElement("h2",{className:m.a["feed__item-title"]},i.a.createElement(r.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(_,null),i.a.createElement("div",{className:m.a["feed__item-readmore"]},i.a.createElement(r.Link,{to:e.node.fields.slug},"Read more")))})))}},"I+nL":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Zttt"),o=a("/d1K"),l=a("6V6j"),m=a("RXmK"),d=a("v0M6"),s=a("gGy4");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),_=n.title,c=n.subtitle,u=a.currentPage,g=a.hasNextPage,p=a.hasPrevPage,f=a.prevPagePath,h=a.nextPagePath,v=t.allMarkdownRemark.edges,E=u>0?"Portfolio - Page "+u+" - "+_:_;return i.a.createElement(r.a,{title:E,description:c},i.a.createElement(o.a,{isIndex:!0}),i.a.createElement(m.a,null,i.a.createElement(l.a,{edges:v}),i.a.createElement(d.a,{prevPagePath:f,nextPagePath:h,hasPrevPage:p,hasNextPage:g})))}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("RBgx"),o=a.n(r),l=function(e){var t=e.title,a=e.children;return i.a.createElement("div",{className:o.a.page},i.a.createElement("div",{className:o.a.page__inner},t&&i.a.createElement("h1",{className:o.a.page__title},t),i.a.createElement("div",{className:o.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},iSRb:function(e,t,a){e.exports={author:"Author-module--author--JnIMg",author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("UbMB"),o=a.n(r),l=a("Wbzz"),m=a("WlAH"),d=a("U4DU"),s=a.n(d),_=o.a.bind(s.a),c=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,o=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),d=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return n?i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(l.Link,{rel:"prev",to:r?t:"/",className:o},m.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(l.Link,{rel:"next",to:n?a:"/",className:d},m.b.NEXT_PAGE))):null}}}]);
//# sourceMappingURL=component---src-templates-portfolio-template-js-bfd5877a62d8bdb9b706.js.map