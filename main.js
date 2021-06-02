let pureHtml = document.body.innerHTML;
let count = 0;
const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node.currentNode=="SCRIPT")console.log('hi')
    console.log('loop')
    node.textContent = node.textContent.replace(new RegExp('text', 'g'), '<span style="color:red !important">'+'text'+'</span>');
}