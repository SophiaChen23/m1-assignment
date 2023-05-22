var albumElement = document.getElementById("album");
var names = ["winter", "snow", "cold", "ice cream", "frozen", "tree", "asshole"];
var des = ['Winter is a cold season.', 'It generally starts in November.', "People use sweaters and blankets.", "Christmas, New Year, etc fall in winter.", "People enjoy carrots, peas, cauliflowers, etc in winter Season.", "Winter is the coldest season of the year."];

for (var i = 0; i < 6; i++) {
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
    });

    img.addEventListener("mouseout", function (event) {
        var currentDescription = event.target.parentElement.querySelector(".description");
        currentDescription.style.display = "none";
    });
}
