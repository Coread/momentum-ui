(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{740:function(module,exports){module.exports=function parser3(hljs){const CURLY_SUBCOMMENT=hljs.COMMENT(/\{/,/\}/,{contains:["self"]});return{name:"Parser3",subLanguage:"xml",relevance:0,contains:[hljs.COMMENT("^#","$"),hljs.COMMENT(/\^rem\{/,/\}/,{relevance:10,contains:[CURLY_SUBCOMMENT]}),{className:"meta",begin:"^@(?:BASE|USE|CLASS|OPTIONS)$",relevance:10},{className:"title",begin:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{className:"variable",begin:/\$\{?[\w\-.:]+\}?/},{className:"keyword",begin:/\^[\w\-.:]+/},{className:"number",begin:"\\^#[0-9a-fA-F]+"},hljs.C_NUMBER_MODE]}}}}]);
//# sourceMappingURL=124.633c50a5b346e4b8d5f9.bundle.js.map