let pureHtml = document.documentElement.innerHTML;
pureHtml.split('</head>').pop();
console.log(pureHtml);