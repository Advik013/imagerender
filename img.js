let imgName = [   "apple","vishnu","goddess-lakshmi","lord-shiva","lord-vishnu","lord-brahma","baby","kid","boy","men","boy-adult","cute-girl","girl-child","woman","woman-saree","lady-adult","leader","politician","billionarie","actor","singer","born-leader","musician","surgeon","painter","driver","van","car","motor-bike","bicycle","bus","chevrolet","Audi","cadillac","BMW","Bugatti","Nikola" ,"Einstein","newton","scientis","Galileo","costume","wife","husband","child","lover","flirt","attraction","girlfriend","boyfriend","relation","father","uncle","grandFather","brother","Sister","Firends","teacher","student","people","Animal","king","lion","queen","lioness","jackal","holi","diwali","christmas","ramayan","vasudev","palace","house","hut","home","shelter","criminal","police","bank","cage","rope","ironMan","INDIA","Cricket","moon","sun","horse","hen","cock","goat","sheep","sea","eye","television","watch","sword","riding","sleeping","working","helping","eating","running","writting","jogging","shouting","beating","look-up","villain","hero","Actress","Arjun","aeroplane","jet","space-","bird","fire","ice","glacier","mountain","valley","bear","angry","happy","sad","weeping","laughing","laptop","mobile","earbuds","charger","desktop","chair","hair","plant","tree","bed","cloth","jeans","shirt","eye","tie","shoe","socks","ear","stage","bottle","window","train","ship","fish","water","rain-drop","tower","table","keyboard","mouse","eye" ];


let pic = document.querySelectorAll('img');
let append = document.querySelector('div.box');
let child = document.getElementsByClassName('img-box')
let disp = document.getElementsByClassName('cover')
let anchor = document.querySelectorAll('a')

// append child
let screen = document.createElement('div')
screen.className = 'cover';
screen.id = 'love';
append.appendChild(screen);
let love = document.getElementById('love')





// child.style.
for (let key of pic) {
    key.addEventListener("click",(e)=>{
    love.style.display="revert";
    let url = [];
    url = [key.src] ;
    console.log(url[0].slice(28,35));
    let NewUrl = url[0].replace('237x342','1010x650');
    console.log(NewUrl);
    
      
      disp[0].innerHTML = `  
             
      <p class="circle" onclick = "Download(this)" ></p>
      <p class="circle side"  onclick = "rem()"></p>
      <img src=${NewUrl}  id = "dis"alt="not found" />
 
   
    `
   
    })
 }


function rem() {

    love.style.display="none";
  
}

function Download(e){
  for (let key of pic) {
    key.download =`${key.src}`
    console.log(key.src);
  }
}

// for (const key of anchor) {
//   let ret=key.children[0].children[0].src
//   key.href=ret;
//   console.log(key.href);
//   key.download=`${key.href}`
// }

