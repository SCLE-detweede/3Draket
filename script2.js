// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const modelViewer = document.querySelector("model-viewer");

    modelViewer.addEventListener("load", function() {
        console.log("3D model is geladen.");
    });

    modelViewer.addEventListener("error", function(event) {
        console.error("Er is een fout opgetreden bij het laden van het 3D model:", event.detail);
    });

    // Voorbeeld van aangepaste bedieningselementen
    const zoomInButton = document.createElement("button");
    zoomInButton.textContent = "Zoom In";
    zoomInButton.style.position = "fixed";
    zoomInButton.style.bottom = "20px";
    zoomInButton.style.left = "20px";
    document.body.appendChild(zoomInButton);

    zoomInButton.addEventListener("click", function() {
        const currentZoom = modelViewer.getFieldOfView();
        modelViewer.setFieldOfView(Math.max(currentZoom - 10, 10));
    });

    const zoomOutButton = document.createElement("button");
    zoomOutButton.textContent = "Zoom Out";
    zoomOutButton.style.position = "fixed";
    zoomOutButton.style.bottom = "20px";
    zoomOutButton.style.left = "100px";
    document.body.appendChild(zoomOutButton);

    zoomOutButton.addEventListener("click", function() {
        const currentZoom = modelViewer.getFieldOfView();
        modelViewer.setFieldOfView(Math.min(currentZoom + 10, 100));
    });
});
