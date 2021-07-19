    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", SubmitKeys);

function SubmitKeys() {
    let key1 = document.getElementById("key1").value;
    let key2 = document.getElementById("key2").value;
    let key3 = document.getElementById("key3").value;
    let key4 = document.getElementById("key4").value;
    let key5 = document.getElementById("key5").value;
    let keySequence = key1 + key2 + key3 + key4 + key5;

    if (keySequence === "skarbbporsch3albo2k0cham37mix0") {
        location.href = 'https://elmac23.github.io/RocznicaARG/';
    }

}
