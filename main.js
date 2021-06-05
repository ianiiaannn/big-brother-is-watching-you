// find every chi-words and help them get their true color
let count = 0; // how mush words and been edited
let nodeCount=0;
let txtURL=chrome.extension.getURL("data/chi-list.txt"); // url to list file
let lines; //array to store list
let txtFile=new XMLHttpRequest(); //idk
txtFile.open("GET",txtURL) 
txtFile.onreadystatechange=()=>{
  if(txtFile.readyState==4) 
    if(txtFile.status==200){ // http 200
      lines=txtFile.responseText.split("\n");
      const treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); // to run on every node
      while (treeWalker.nextNode()) {
        let node = treeWalker.currentNode;
        let tmpString = node.textContent;
        for(let i=0;i<=lines.length-1;i++) {
          let word = lines[i];
          word = word.replace(/\r?\n|\r/gi, word); // remove /r at the end
          tmpString = tmpString.replace(new RegExp(word, 'g'), '<span style="color:red !important" class="winnie">' + word + '</span>'); //add css
        }
        tmpString = tmpString.replace(new RegExp('新冠肺炎','g'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
        tmpString = tmpString.replace(new RegExp('COVID-19','gi'), '<span style="color:red !important" class="winnie">'+'China virus'+'</span>');
        tmpString = tmpString.replace(new RegExp('嚴重特殊傳染性肺炎','gi'), '<span style="color:red !important" class="winnie">'+'中共武漢肺炎'+'</span>');
        tmpString = tmpString.replace(new RegExp('SARS-CoV-2','gi'), '<span style="color:red !important" class="winnie">'+'China virus'+'</span>');
        tmpString = tmpString.replace(new RegExp('WHO','g'), '<span style="color:red !important" class="winnie">'+'CHO'+'</span>');
        tmpString = tmpString.replace(new RegExp('World Health Organization','g'), '<span style="color:red !important" class="winnie">'+'China Health Organization'+'</span>');
        tmpString = tmpString.replace(new RegExp('印度變種病毒','gi'), '<span style="color:red !important" class="winnie">'+'看起來是印度來的但是實際上還是中共武漢肺炎'+'</span>');
        tmpString = tmpString.replace(new RegExp('世界衛生組織','gi'), '<span style="color:red !important" class="winnie">'+'中华民国沦陷区卫生组织'+'</span>');
        if(tmpString!=node.textContent&&tmpString!='<span style="color:red !important" class="winnie"></span>'){
          count++;
          node.parentNode.insertAdjacentHTML("afterbegin",tmpString);
          node.textContent='';
        }
        nodeCount++;
      }
    }
    let alreadyWinnie = document.getElementsByClassName('winnie')
    count+=alreadyWinnie.length;
    console.log(count);
    console.log(nodeCount)
    if(nodeCount/10<count){
      console.log('winnie')
      let shepopo = [
        "https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcw1.tw%2FCW%2Fcrossing%2Fimages%2Farticle%2F201802%2Farticle-5a9368e289128.jpg/?w=828&format=webp",
        "https://imgcdn.cna.com.tw/www/webphotos/WebOg/600/20200128/598x314_858749950586.jpg",
        "https://www.rfa.org/cantonese/commentaries/lj/com-03102020073957.html/com0310-web.jpg/@@images/image",
        "https://v515.files.wordpress.com/2019/08/901994e0-35d6-46e3-b651-e170cf766e46.jpg",
        "https://spaceur.com/i/dR3b8x2.jpg",
        "https://cdn.discuss.com.hk/t/db5d1f/f/320x0/https://img.discuss.com.hk/d/attachments/day_200207/20200207_29ed991d5df53156d3d2MH6torx65aUM.jpg",
        "https://pbs.twimg.com/media/Dn_GhMUU8AEjokw.jpg",
        "https://images.uncyc.org/zh-tw/e/ea/%E7%BF%92%E8%BF%91%E5%B9%B3.JPG",
        "https://s.yimg.com/ny/api/res/1.2/PWHHHp6k_Kg3AT1Q8hcTwg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg3Mi4xNTY4NjI3NDUwOTg-/https://s.yimg.com/uu/api/res/1.2/MSgRV.axvLMc_BnmKYqH3w--~B/aD02OTU7dz01MTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/zh-tw/setn.com.tw/bd533699b835fcd281fcb3fafd2b9515",
        "https://1.bp.blogspot.com/-zoYzu8sMGRk/XSyRlEh0oaI/AAAAAAAAB5k/0kZelQToc3o8yQpRyY9iXbYN5p7acsY5QCLcBGAs/s1600/20190715.JPG",
        "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/103763837_161904495337832_8577781060121451835_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=sJ0mTqPxcOMAX9dowdH&_nc_ht=scontent-tpe1-1.xx&oh=7556ffc5296c236d5a2fe0d9ade5cf45&oe=60E11EF6",
        "https://megapx-assets.dcard.tw/images/2e8b34da-32de-484e-a25d-c43941412554/full.webp",
        "https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1590873983386.jpg",
        "https://truth.bahamut.com.tw/s01/201806/28d40127a7beffbb17c94d9f2f2e7006.JPG?w=1000",
        "http://i.imgur.com/LAugoIIh.jpg",
        "https://www.taiwancon.com/wp-content/uploads/auto_save_image/2020/04/183351lGn.jpg",
        "http://i.imgur.com/igr7gcF.jpg",
        "https://1.bp.blogspot.com/-nk4qcR4sUZI/XCxfY3jetwI/AAAAAAAACfU/s2H4OggJZNEaw4IytgTyRYddzAFmKEX8QCLcBGAs/s1600/457365.jpg",
        "https://obs.line-scdn.net/0hAC1Lf3ZEHmwMNTf4xddhOzZjHQM_WQ1vaANPb09bQFh2UltoNQBVXy1lFV4mUVkyYgZWAyo0BV10Bg5uYwNV/w1200",
        "https://pbs.twimg.com/media/ETb5UIeUwAA6hAs.jpg",
        "https://pbs.twimg.com/media/EPtGTCDUwAEvOHR.jpg",
        "https://i0.wp.com/www.scooptw.com/wp-content/uploads/01292020AA.jpg?fit=696%2C464&ssl=1",
        "https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1586436657442.jpg",
        "https://i.imgur.com/UMQhDuil.jpg",
        "https://i.imgur.com/qsTfgb3l.jpg",
        "https://i.imgur.com/GMka4ngl.jpg",
        "https://i.imgur.com/sOK6MER.jpg"
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