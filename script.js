let WhiteKeys = ["z", "x", "c", "v", "b", "n", "m"]
let BlackKeys = ["s", "d", "g", "h", "j"]


let keys = document.querySelectorAll(".key");
let whiteKey = document.querySelectorAll(".key.white");
let blackKey = document.querySelectorAll(".key.black")
keys.forEach(key => {
    key.addEventListener('click', () => sound(key));
})
document.addEventListener('keydown', e => {
    if (e.repeat) return; //Dabae rahne par bhi ek bar hi sound aegi

    let pressedAlphabet = e.key //isse key mil jaegi

    let WhiteKeyIndex = WhiteKeys.indexOf(pressedAlphabet);//Kaunsi white key press kari wo mil gaya

    let BlackKeyIndex = BlackKeys.indexOf(pressedAlphabet);//Kaunsi black key press kari wo mil gaya

    if (WhiteKeyIndex > -1) {
        sound(whiteKey[WhiteKeyIndex]) //coressponding white key ka sound bajwa diya
    }
    if (BlackKeyIndex > -1) {
        sound(blackKey[BlackKeyIndex]) //corresponding black key ka sound bajwa diya
    }

})
function sound(key) {
    let noteAudio = document.getElementById(key.dataset.note);//isse mujhe audio file ki id mil gayi

    noteAudio.currentTime = 0; //Isse ham Dom ko kah sakte ki is time se shuru karo audio matlba ab jab bhi click hoga to current time 0 hone ki wajah se wo turant zero pe a jaega

    noteAudio.play(); //corresponding note ko play kar do

    key.classList.add("active"); //Pata bhi to chale ki kuch active hai piano to usko thori sahding de di(class add kar di active naam ki)

    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    }) //Ye basically jaise ham agar click karenge to shade to ho gaya upar wale ki madad se lekin use khatam bhi to karna hai to iski madad se wo ham kar paenge


}