let typingText = document.querySelector(".change_txt")
 let Designation = ["CyberSecurity engeneer","Digital Forensics", "Security Consoltant"]

let arrayIndex = 1;

function ChangingTxt(){
    if (arrayIndex<Designation.length){
        typingText.innerHTML=Designation[arrayIndex]
        arrayIndex = arrayIndex + 1
    }
    else {
        arrayIndex = 0;
        typingText.innerHTML=Designation[arrayIndex]
        arrayIndex = arrayIndex + 1
    }
    o
}

ChangingTxt();
setInterval(ChangingTxt, 3000);