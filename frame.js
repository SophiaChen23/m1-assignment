var albumElement = document.getElementById("album");
var names = ["winter", "snow", "cold", "ice cream", "frozen", "tree", "asshole", "lazy", "laying down", "hug"];
var des = ['Winter is a cold season.', 'It generally starts in November.', "People use sweaters and blankets.", "Christmas, New Year, etc fall in winter.", "People enjoy carrots, peas, cauliflowers, etc in winter Season.", "Winter is the coldest season of the year.", "the tree has a good crop of berries in winter", "The greatest risk is in fields where a winter cereal cover crop has been used.", "In Kansas, I see that some of the winter wheat has been harvested.", "Varieties of winter wheat used for grain may also be used for forage"];

var descriptionTimeout;

for (var i = 0; i < 10; i++) {
    var li = document.createElement("li");
    li.className = "photo";

    var img = document.createElement("img");
    img.src = "images/winterland" + (i + 1) + ".jpg";

    var caption = document.createElement("div");
    caption.className = "caption";
    caption.innerText = names[i];

    var description = document.createElement("div");
    description.className = "description";
    description.innerText = des[i];

    li.appendChild(img);
    li.appendChild(caption);
    li.appendChild(description);
    albumElement.appendChild(li);

    img.addEventListener("mouseover", function (event) {
        var currentDescription = event.target.parentElement.querySelector(".description");
        currentDescription.style.display = "block";
        clearTimeout(descriptionTimeout);
    });

    img.addEventListener("mouseout", function (event) {
        var currentDescription = event.target.parentElement.querySelector(".description");
        descriptionTimeout = setTimeout(function () {
            currentDescription.style.display = "none";
        }, 500);
    });

    description.addEventListener("mouseover", function (event) {
        clearTimeout(descriptionTimeout);
    });

    description.addEventListener("mouseout", function (event) {
        var currentDescription = event.target.parentElement.querySelector(".description");
        descriptionTimeout = setTimeout(function () {
            currentDescription.style.display = "none";
        }, 500);
    });

    description.addEventListener("click", function (event) {
        event.stopPropagation();
        showInfoBox(description.innerText);
    });
}

function showInfoBox(text) {
    var infoBox = document.createElement("div");
    infoBox.className = "info-box";

    var heading = document.createElement("h2");
    heading.innerText = text;

    var infoText = document.createElement("p");
    infoText.innerText = "Additional information about " + text;

    var closeButton = document.createElement("a");
    closeButton.className = "close-button";
    closeButton.innerText = "Cick This To Close";
    closeButton.href = "#";
    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        infoBox.remove();
    });

    infoBox.appendChild(heading);
    infoBox.appendChild(infoText);
    infoBox.appendChild(closeButton);

    document.body.appendChild(infoBox);
}
