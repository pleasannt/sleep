document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1"; // Sayfa yüklendiğinde opaklık değeri 1 olacak
    
    document.querySelectorAll(".container").forEach(function(container) {
        container.classList.add("show"); // Sayfa yüklendiğinde her bir container'a "show" sınıfı ekleyecek
    });
});