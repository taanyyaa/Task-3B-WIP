const panorama = new PANOLENS.ImagePanorama('Forestpan-2.jpeg');
const containerBody = document.getElementById("containerImage")
const viewer = new PANOLENS.Viewer({
    container: containerBody
});
viewer.add(panorama);


function customInfo(animal, animalName, x, y, z) {
    let infospot = new PANOLENS.Infospot(
        100,
        animal
    );

    infospot.position.set(x, y, z);
    infospot.addHoverText(animalName, 100, 100);
    infospot.addEventListener("click", function () {
        this.focus();
    });
    panorama.add(infospot)
}

 customInfo("Flyingsq.png", "Malabar Flying Squirrel", 360, 100, -150)
 customInfo("Cobra.png", "King Cobra", -320, -30, -150 )
 customInfo("giantsq.png", "Malabar Giant Squirrel", 350, -100, -100)
 customInfo("LTM.png", "Lion Tailed Macaque", -150, -50, -200)
 customInfo("bonnet.png", "Bonnet Macaque", 50, -50, -100)
 customInfo("langoor.png", "Nilgiri Langoor", -200, -100, -100)
 customInfo("parakeet.png", "Malabar Parakeet", -500, 130, -150)
 customInfo("leopard.png", "Leopard", -100, -90, 100)
 customInfo("dove.png", "Emerald Dove", -200, 50, 150)
 customInfo("bulbul.png", "Black Bulbul", -260, 90, 300)
 customInfo("Trogon.png", "Malabar Trogon", 220, -80, 100)
 customInfo("clawless.png", "Clawless", -10, -30, 180)