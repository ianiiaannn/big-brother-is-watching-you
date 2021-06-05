let shepopo = [
  "https://img.komicolle.org/2020-04/15871329988899.png",
  "https://img.komicolle.org/2020-04/15871329989308.jpg",
  "https://img.komicolle.org/2020-04/15872145019030.png",
  "https://img.komicolle.org/2020-04/15872145019658.jpg",
  "https://img.komicolle.org/2020-04/15872145019978.png",
  "https://img.komicolle.org/2020-04/15872145020960.jpg",
  "https://img.komicolle.org/2020-04/15872145023946.jpg",
  "http://i.imgur.com/mALAE11h.jpg",
  "https://i.imgur.com/eWR7Tkvl.jpg",
  "https://i.imgur.com/0AcFpdj.jpg",
  "http://i.imgur.com/JCKIlmx.jpg",
  "http://i.imgur.com/HCHb2cD.jpg",
  "http://i.imgur.com/vAIQR2M.jpg",
  "http://i.imgur.com/zvsHUJS.jpg",
  "http://i.imgur.com/zhRCcft.jpg",
  "http://i.imgur.com/FL1ehqo.jpg",
  "http://i.imgur.com/FPtuSLS.jpg",
  "http://i.imgur.com/rR95Yl0.jpg",
  "http://i.imgur.com/iL4Ws4z.jpg",
  "http://i.imgur.com/Kk2kMuY.jpg",
  "http://i.imgur.com/jUX2Q6bh.png",
  "http://i.imgur.com/43vbSxY.jpg",
  "http://i.imgur.com/oZDddf2h.png",
  "http://i.imgur.com/MzALNfn.jpg",
  "http://i.imgur.com/VdjMd35.png",
  "http://i.imgur.com/CtpxWqX.png",
  "http://i.imgur.com/CtpxWqX.png",
  "http://i.imgur.com/OirfKbWh.png",
  "http://i.imgur.com/XFN5Cq3.png",
  "http://i.imgur.com/FIYc3lJh.png",
  "http://i.imgur.com/mPnYgzZ.jpg",
  "http://i.imgur.com/hg7h0qf.jpg",
  "http://i.imgur.com/l9glhIgh.png",
  "http://i.imgur.com/AZF3vzW.jpg",
  "http://i.imgur.com/OiVLHuGh.png",
  "http://i.imgur.com/yBtLXBI.jpg",
  "http://i.imgur.com/aRfbQHdh.jpg",
  "http://i.imgur.com/KPKap5eh.png",
  "http://i.imgur.com/qCOh8f4h.jpg",
  "http://i.imgur.com/QzPFaIhh.jpg",
  "http://i.imgur.com/WJuJP6F.jpg",
  "http://i.imgur.com/UwQolYQ.jpg",
  "http://i.imgur.com/ObIHoeE.jpg",
  "http://i.imgur.com/nsFtO2W.jpg",
  "http://i.imgur.com/05hazMY.jpg",
  "http://i.imgur.com/7N4mpuJ.jpg"
];
document.addEventListener(onload,picChange());
function picChange(){
  console.log('a')
  let random_number = Math.floor(Math.random() * shepopo.length);
  let pic = document.getElementById('popuppic');
  pic.src = shepopo[random_number];
  pic.onload=()=>{
    pic.width=pic.naturalWidth*0.4;
    pic.height=pic.naturalHeight*0.4;
    document.body.style="width:auto; height: auto;";
  }
}