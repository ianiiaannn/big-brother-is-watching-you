// find every chi-words and help them get their true color
let count = 0; // how mush words and been edited
let txtURL=chrome.extension.getURL("data/chi-lanage.txt"); // url to list file
let lines; //array to store list
let txtFile=new XMLHttpRequest(); //idk
txtFile.open("GET",txtURL) 
txtFile.onreadystatechange=()=>{
  if(txtFile.readyState==4) 
    if(txtFile.status==200){ // http 200
      lines=txtFile.responseText.split("\n");
      const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); // to run on every node
        while (treeWalker.nextNode()) {
          for(let i=0;i<=lines.length-1;i++){
            let node = treeWalker.currentNode;
            let tmpString = node.textContent
            let word=lines[i];
            word=word.replace(/\r?\n|\r/gi,word); // remove /r at the end
            tmpString = tmpString.replace(new RegExp(word,'g'), '<span style="color:red !important" class="winnie">'+word+'</span>'); //add css 
            tmpString = tmpString.replace(new RegExp('新冠肺炎','g'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
            tmpString = tmpString.replace(new RegExp('COVID-19','gi'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
            tmpString = tmpString.replace(new RegExp('嚴重特殊傳染性肺炎','gi'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
            tmpString = tmpString.replace(new RegExp('SARS-CoV-2','gi'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
            tmpString = tmpString.replace(new RegExp('Report of the WHO-China Joint Mission on Coronavirus Disease 2019','gi'), '<span style="color:red !important" class="winnie">'+'辣個中國好棒棒報告'+'</span>');
            tmpString = tmpString.replace(new RegExp('WHO','g'), '<span style="color:red !important" class="winnie">'+'中華民國淪陷區衛生組織'+'</span>');
            tmpString = tmpString.replace(new RegExp('印度變種病毒','gi'), '<span style="color:red !important" class="winnie">'+'看起來是印度來的但是實際上還是中共武漢肺炎'+'</span>');
            if(tmpString!=node.textContent&&tmpString!='<span style="color:red !important" class="winnie"></span>'){
              count++;
              console.log(tmpString)
              node.parentNode.insertAdjacentHTML("afterbegin",tmpString);
              node.textContent='';
            }
          }
          
      }
      
    }
    console.log(count);
    if(count>50){
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
  }
}
txtFile.send();