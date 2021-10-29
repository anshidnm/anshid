function clicked(text){
    document.getElementById("display").value=document.getElementById("display").value+text

}
function clearbutton(arg){
    document.getElementById("display").value=arg
}
function equalbutton(){
    var text=document.getElementById("display").value;
    var result=eval(text);
    document.getElementById("display").value=result;
}
function bg(col){
    document.getElementById("CBody").style.backgroundColor=col
}
function but(colo){
    var cls=document.getElementsByClassName("but")
    var i;
    for(i=0;i<cls.length;i++){
        cls[i].style.backgroundColor=colo
    }
    document.getElementById("clear_but").style.backgroundColor=colo
}
function reset1(col){
    document.getElementById("CBody").style.backgroundColor=col
}
function reset2(colo){
    var cls=document.getElementsByClassName("but")
    var i;
    for(i=0;i<cls.length;i++){
        cls[i].style.backgroundColor=colo
    }
    document.getElementById("clear_but").style.backgroundColor=colo
}