let shepopo = [
  "https://img.komicolle.org/2020-04/15871329988899.png",
  "https://img.komicolle.org/2020-04/15871329989308.jpg",
  "https://img.komicolle.org/2020-04/15872145019030.png",
  "https://img.komicolle.org/2020-04/15872145019658.jpg",
  "https://img.komicolle.org/2020-04/15872145019978.png",
  "https://img.komicolle.org/2020-04/15872145020960.jpg",
  "https://img.komicolle.org/2020-04/15872145023946.jpg"
];
let random_number = Math.floor(Math.random() * shepopo.length);
let pic = document.getElementById('popuppic');
pic.src = shepopo[random_number];
//document.getElementById('popuppic').style="width: 50%; height: 50%;zoom:50%";
pic.onload=()=>{
  console.log('hi')
  pic.width=pic.naturalWidth*0.4;
  pic.height=pic.naturalHeight*0.4;
  document.body.style="width:auto; height: auto;";
}