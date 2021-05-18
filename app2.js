// let newBtn = document.querySelector('#newbtn');
// let saveBtn = document.querySelector('#savebtn');
// let deleteBtn = document.querySelector('#deletebtn');
// let textBox = document.querySelector('#textBox');
// let noteBox = document.querySelector('#noteBox');
// let h = document.querySelectorAll('h4')
// let aside = document.querySelector('aside')
// let activeNote=0;


// const files =[]


// let k ={
//     title : `file${files.length + 1}`,
//     notes : "",
//     isSave:false,
//     id: `${files.length + 1}`,
//     isnotes:false,
//     isNew:true,
//     selected:true

// }
// files.unshift(k);
// let hf=document.createElement('h4');
// hf.innerText = files[files.length-1].title
// hf.id=files[files.length-1].title 

// let fileList = []

// fileList.push(hf)

// function fileUpdate(){
//     for(let k of fileList){
//         aside.append(k)
//     }
// }


// function newh4(){
//     let hf=document.createElement('h4');
//     hf.innerText = files[files.length-1].title 
//     hf.id=files[files.length-1].title
//     fileList.unshift(hf)
// }

// let save =(num)=>{
//     let n = noteBox.innerText
//     files[num].isnotes = checkIsNote(n);
//     if(files[num].isNew){
//     if(files[num].isnotes){
//   files[num].notes = noteBox.innerText;
//   files[num].isSave= true;
//   files[num].isNew= false;
//   }
//   else{
//       alert("you have not written any note !")
//   }}
//   else{
//     files[num].notes = noteBox.innerText;
//     files[num].isSave= true;}
//   }


// function checkIsNote(n){
//    let m = n.trim();
//    let char = m.length;
//    if(char==0){
//        return false;
//    }
//    else{
//        return true;
//    }
// }
// fileUpdate();

// saveBtn.addEventListener('click',function(){

//     save(activeNote);
//     updateclass()
// })
// textBox.addEventListener('input',function(){
//     noteBox.innerText= textBox.value ;
//     files[activeNote].isSave=false;
//     //      fileList[0].notes=noteBox.innerText;    
// })

// function updateclass(){
//     let h = document.querySelectorAll('h4')
//     for(let h4btn of h){
//         h4btn.addEventListener('click',function(){
//             h4btn.classList.add("selected")
//             let activeh = h4btn.innerText;
//             active(activeh);
//             textBox.value=files[activeNote].notes
//         })
//     }
// }
// updateclass()









// // new file

// newBtn.addEventListener('click',function(){
//     if(files[files.length-1].isSave){
//         let nk = {
//             title : `file${files.length + 1}`,
//             notes : "",
//             isSave:false,
//             id: `${files.length + 1}`,
//             isnotes:false,
//             isNew:true,
//             selected:true  }
            
//             activeNote=files.length;
//             files.push(nk)  
//             newh4();
//             fileUpdate();
//             updateclass()

//             textBox.value="";
//             noteBox.innerText="";

//     }
// })

// function active(j){
//     for(let k of files){
//         if(k.title==j){
//             activeNote=files.indexOf(k);
//         }
//     }
// }





let newBtn = document.querySelector('#newbtn');
let saveBtn = document.querySelector('#savebtn');
let deleteBtn = document.querySelector('#deletebtn');
let textBox = document.querySelector('#textBox');
let noteBox = document.querySelector('#noteBox');
let h = document.querySelectorAll('h4')
let asideDiv = document.querySelector('aside div')
let nameInput = document.querySelector('#nameinput')
let nameBtn = document.querySelector('#namebtn')
let modeBtn = document.querySelector('#mode') 
let headingBtn = document.querySelector('#headingbtn')
let deleteAll = document.querySelector('#deleteall')

let activeNote=0;

let hlBtn = document.querySelector('.btnclickeffect')
let color = document.querySelector('#color')

let files =[]
let fileList = []

let isLocalStorage = localStorage.getItem("isLocalStorage");
let selectedList;

function defaults() {
    createFile();
    createH4();
    listUpdate();
    updateClass();
}
if(isLocalStorage){
    retriveDataFromLS();
}
else{
    defaults();
    selectedList = fileList.length-1;
    newFileStyle()
} 
 selectedList = fileList.length-1;

 headingBtn.addEventListener('click',function(){
     noteBox.innerHTML= noteBox.innerHTML +`<h2 style="text-align: center;">Heading</h2>`
 })
deleteAll.addEventListener('click',function(){
    fileList=[]
    files=[]
    listUpdate();
    localStorage.clear()
})
 

function createFile(){
    let k ={
        title : `Note ${files.length + 1}`,
        notes : "",
        isSave:false,
        id: `Note ${files.length + 1}`,
        isNotes:false,
        isNew:true,
        isDeleted:false,
        rename:`Note ${files.length + 1}`
        
    }
    activeNote=files.length;
    files.push(k);
    saveToLS("files",files)
    
}
hlBtn.addEventListener('click',function(){
    let m = window.getSelection()
    let k= m.toString();
    let j = `<span style="background-color:${color.value};">${k}</span>`
   noteBox.innerHTML = noteBox.innerHTML.replace(m,j)
   
})

function createH4(){
    let hf=document.createElement('h4');
    hf.innerText = files[files.length-1].title 
    hf.id=files[files.length-1].id
    fileList.unshift(hf)

}
let keytime =1
noteBox.onkeyup = function(e){
    
    if(e.keyCode == 32){
        if(keytime==2){
            console.log("working")
            noteBox.innerHTML= noteBox.innerHTML+ '&nbsp;&nbsp; '
        }else{
            keytime++;
        }
        setTimeout(function(){ keytime = 1 }, 200);
        // console.log(e)

    }
}

function listUpdate(){
    asideDiv.innerHTML=""
    for(let file of fileList){
        asideDiv.append(file)
    }
}




const save = (num)=>{
    let n = noteBox.innerText  
    files[num].isNotes = checkIsNote(n);
    if(files[num].isNew){
    if(files[num].isNotes){
  files[num].notes = noteBox.innerHTML;
  files[num].isSave= true;
  files[num].isNew= false;
  }
  else{
      alert("you have not written any note !")
  }}
  else{
    files[num].notes = noteBox.innerHTML;
    files[num].isSave= true;}
  }


function checkIsNote(str){
   let m = str.trim();
   let char = m.length;
   if(char==0){
       return false;
   }
   else{
       return true;
   }
}


saveBtn.addEventListener('click',function(){
    save(activeNote);
    updateClass()
    saveToLS("files",files)
})
// textBox.addEventListener('input',function(){
//     noteBox.innerText= textBox.value ;
//     files[activeNote].isSave=false;
//     //      fileList[0].notes=noteBox.innerText;    
// })


function updateClass(){
     h = document.querySelectorAll('h4')
    for(let h4btn of h){
        h4btn.addEventListener('click',function(){
            for(let hbtn of h){
                hbtn.classList.remove("selected")
            }
            h4btn.classList.add("selected")
            let activeh = h4btn.id;
            active(activeh);
            //textBox.value=files[activeNote].notes
            noteBox.innerHTML=files[activeNote].notes
            selectedFile();
            nameInput.value=fileList[selectedList].innerText
        })
    }
}

function newFileStyle(){
  //  selectedFile();                                            //errror
    for(let hbtn of h){
        hbtn.classList.remove("selected")
    }
    fileList[0].classList.add("selected")
    nameInput.value=fileList[0].innerText
    let a = fileList[selectedList].id
    active(a)
    //textBox.value=files[activeNote].notes
    noteBox.innerHTML=files[activeNote].notes
}

function selectedFile(){
    selectedList = fileList.length - (activeNote + 1)
}

// delete --------------------------------------------------------------------

deleteBtn.addEventListener('click',deletes);
function deletes(){
    selectedFile();
    fileList.splice(selectedList,1);
    files[activeNote].isSave=true
    files[activeNote].isDeleted = true
    listUpdate();
    selectedList=0
    newFileStyle();
    saveToLS("files",files)
}



// new file

newBtn.addEventListener('click',function(){
    if(files.length==0){
        defaults();
        selectedList = fileList.length-1;
    newFileStyle()
    }else{
    if(files[files.length-1].isSave){
         createFile();
            createH4();
            listUpdate();
            updateClass();
            newFileStyle();

            textBox.value="";
            noteBox.innerText="";
    }
    else{
        alert(`You have not saved ${fileList[0].innerText} yet !!!`)
    }
    }
})

function active(j){
    for(let k of files){
        if(k.id==j){
            activeNote=files.indexOf(k);
        }
    }
}


// rename ----------- rename
nameBtn.addEventListener('click',function(){
   fileList[selectedList].innerText=nameInput.value;
   files[activeNote].rename=nameInput.value;
})


// modeBtn.addEventListener('click',function(){
//     //textBox.style.display="none"
//     textBox.classList.toggle("hidden")
//     noteBox.classList.toggle("pSize")
//     let c = textBox.className
//     if(c=="hidden"){
//         modeBtn.innerText="Edit mode"
//     }
//     else{
//         modeBtn.innerText="Read only mode"
//     }

// })


function saveToLS(fileName , fileData){
    let s = JSON.stringify(fileData)
    localStorage.setItem(fileName,s)
    localStorage.setItem("isLocalStorage",true)
}

function retriveDataFromLS(){
    let unparsefiles = localStorage.getItem("files")
    files = JSON.parse(unparsefiles)
    makeFileList();
    listUpdate();
    updateClass();
    selectedList = fileList.length-1;
    newFileStyle();
    activeNote=files.length-1;
    noteBox.innerHTML=files[activeNote].notes;
}



function makeFileList(){

    for(let f of files){
        k = f.isDeleted;
        if(!k){
            let hf=document.createElement('h4');
            hf.innerText = f.rename;
            hf.id=f.id
            fileList.unshift(hf)
        }
    }
}



