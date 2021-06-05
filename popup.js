let shepopo = [
  "https://img.komicolle.org/2020-04/15871329988899.png",
  "https://img.komicolle.org/2020-04/15871329989308.jpg",
  "https://img.komicolle.org/2020-04/15872145019030.png",
  "https://img.komicolle.org/2020-04/15872145019658.jpg",
  "https://img.komicolle.org/2020-04/15872145019978.png",
  "https://img.komicolle.org/2020-04/15872145020960.jpg",
  "https://img.komicolle.org/2020-04/15872145023946.jpg",
  "https://i.imgur.com/mALAE11h.jpg",
  "https://i.imgur.com/eWR7Tkvl.jpg",
  "https://i.imgur.com/0AcFpdj.jpg",
  "https://i.imgur.com/JCKIlmx.jpg",
  "https://i.imgur.com/HCHb2cD.jpg",
  "https://i.imgur.com/vAIQR2M.jpg",
  "https://i.imgur.com/zvsHUJS.jpg",
  "https://i.imgur.com/zhRCcft.jpg",
  "https://i.imgur.com/FL1ehqo.jpg",
  "https://i.imgur.com/FPtuSLS.jpg",
  "https://i.imgur.com/rR95Yl0.jpg",
  "https://i.imgur.com/iL4Ws4z.jpg",
  "https://i.imgur.com/Kk2kMuY.jpg",
  "https://i.imgur.com/jUX2Q6bh.png",
  "https://i.imgur.com/43vbSxY.jpg",
  "https://i.imgur.com/oZDddf2h.png",
  "https://i.imgur.com/MzALNfn.jpg",
  "https://i.imgur.com/VdjMd35.png",
  "https://i.imgur.com/CtpxWqX.png",
  "https://i.imgur.com/CtpxWqX.png",
  "https://i.imgur.com/OirfKbWh.png",
  "https://i.imgur.com/XFN5Cq3.png",
  "https://i.imgur.com/FIYc3lJh.png",
  "https://i.imgur.com/mPnYgzZ.jpg",
  "https://i.imgur.com/hg7h0qf.jpg",
  "https://i.imgur.com/l9glhIgh.png",
  "https://i.imgur.com/AZF3vzW.jpg",
  "https://i.imgur.com/OiVLHuGh.png",
  "https://i.imgur.com/yBtLXBI.jpg",
  "https://i.imgur.com/aRfbQHdh.jpg",
  "https://i.imgur.com/KPKap5eh.png",
  "https://i.imgur.com/qCOh8f4h.jpg",
  "https://i.imgur.com/QzPFaIhh.jpg",
  "https://i.imgur.com/WJuJP6F.jpg",
  "https://i.imgur.com/UwQolYQ.jpg",
  "https://i.imgur.com/ObIHoeE.jpg",
  "https://i.imgur.com/nsFtO2W.jpg",
  "https://i.imgur.com/05hazMY.jpg",
  "https://i.imgur.com/7N4mpuJ.jpg"
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