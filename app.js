


let newBtn = document.querySelector('#newbtn');
let saveBtn = document.querySelector('#savebtn');
let deleteBtn = document.querySelector('#deletebtn');
let textBox = document.querySelector('#textBox');
let noteBox = document.querySelector('#noteBox');
let h = document.querySelectorAll('h4')
let aside = document.querySelector('aside')
let activeNote;


const files =[]


let k ={
    title : `file${files.length + 1}`,
    notes : "",
    isSave:false,
    id: `${files.length}`,
    isnotes:false,
    isNew:true,
    selected:true

}
files.unshift(k);
let hf=document.createElement('h4');
hf.innerText = files[0].title 

let fileList = []

fileList.unshift(hf)

function fileUpdate(){
    for(let k of fileList){
        aside.append(k)
    }
}


function newh4(){
    let hf=document.createElement('h4');
    hf.innerText = files[0].title 
    fileList.unshift(hf)
}

let save =(num)=>{
    let n = noteBox.innerText
    files[num].isnotes = checkIsNote(n);
    if(files[num].isNew){
    if(files[num].isnotes){
  files[num].notes = noteBox.innerText;
  files[num].isSave= true;
  files[num].isNew= false;
  }
  else{
      alert("you have not written any note !")
  }}
  else{
    files[num].notes = noteBox.innerText;
    files[num].isSave= true;}
  }


function checkIsNote(n){
   let m = n.trim();
   let char = m.length;
   if(char==0){
       return false;
   }
   else{
       return true;
   }
}
fileUpdate();
saveBtn.addEventListener('click',function(){

    save(0);
    updateclass()
})
textBox.addEventListener('input',function(){
    noteBox.innerText= textBox.value ;
    files[0].isSave=false;
    //      fileList[0].notes=noteBox.innerText;    
})

function updateclass(){
    let h = document.querySelectorAll('h4')
    for(let h4btn of h){
        h4btn.addEventListener('click',function(){
            h4btn.classList.add("selected")
        })
    }
}
updateclass()









// new file

newBtn.addEventListener('click',function(){
    if(files[0].isSave){
        let nk = {
            title : `file${files.length + 1}`,
            notes : "",
            isSave:false,
            id: `${files.length}`,
            isnotes:false,
            isNew:true,
            selected:true  }
            
            files.unshift(nk)  
            newh4();
    fileUpdate();

            
            textBox.value="";
            noteBox.innerText="";

    }
})
