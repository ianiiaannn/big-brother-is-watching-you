let pureHtml = document.body.innerHTML;
let count = 0;
const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while (treeWalker.nextNode()) {
    // walk every text tag
    const node = treeWalker.currentNode;
    console.log('loop')
    // i don't know why but the line below work... a half
    node.textContent = node.textContent.replace(new RegExp('text', 'g'), '<span style="color:red !important">'+'text'+'</span>');
    
}
let shepopo = [
    "https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fcrossing%2Fimages%2Farticle%2F201802%2Farticle-5a9368e289128.jpg/?w=828&format=webp",
    "https://imgcdn.cna.com.tw/www/webphotos/WebOg/600/20200128/598x314_858749950586.jpg",
    "https://www.rfa.org/cantonese/commentaries/lj/com-03102020073957.html/com0310-web.jpg/@@images/image",
    "https://v515.files.wordpress.com/2019/08/901994e0-35d6-46e3-b651-e170cf766e46.jpg",
    "https://spaceur.com/i/dR3b8x2.jpg",
    "https://cdn.discuss.com.hk/t/db5d1f/f/320x0/https://img.discuss.com.hk/d/attachments/day_200207/20200207_29ed991d5df53156d3d2MH6torx65aUM.jpg"
];
const all_img = document.getElementsByTagName("img");
// let last_one;
for (let i = 0; i < all_img.length; i++) {
    let random_number = Math.floor(Math.random() * shepopo.length);
    all_img[i].src = shepopo[random_number];
    // last_one = i;
}



let pureHtml = document.documentElement.innerHTML;
pureHtml.split('</head>').pop();
console.log(pureHtml);
