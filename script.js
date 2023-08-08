document.querySelector('.dropbtn').addEventListener('click', function() {
    console.log('Przycisk został kliknięty.');
    let content = document.querySelector('.dropdown-content');
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});