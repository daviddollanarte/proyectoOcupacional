document.getElementById("showCollapse").addEventListener("mouseover", function () {
    document.getElementById("trigger").click();
});
if (document.getElementById("showCollapse2")) {
    document.getElementById("showCollapse2").addEventListener("mouseover", function () {
        document.getElementById("trigger2").click();
    });
};
if (document.getElementById("showCollapse3")) {
    document.getElementById("showCollapse3").addEventListener("mouseover", function () {
        document.getElementById("trigger3").click();
    });
};
if (document.getElementById("change1")){
    let textChange = document.getElementById("change1");
    textChange.addEventListener("mouseover", function () {
        textChange.innerHTML = `solo`;
        textChange.classList.add("badge");
        textChange.classList.add("bg-danger");
    });
    textChange.addEventListener("mouseout", function () {
        textChange.innerHTML = `mejor`;
        textChange.classList.remove("badge");
        textChange.classList.remove("bg-danger");
    })
};