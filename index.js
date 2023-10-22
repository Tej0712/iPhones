fetch('data.json')
  .then(response => response.json())
  .then(data => {
  const featuresListDiv = document.getElementById("features-list");

  data.phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("mb-4", "border", "p-3");

    const imgElement = document.createElement("img");
    imgElement.src = "images/" + phone.pictures[0].filename;
    imgElement.alt = phone.iphoneModel; // Setting an alt attribute for accessibility
    phoneDiv.appendChild(imgElement);
    imgElement.width = 200;  
    imgElement.height = 200; 


    const title = document.createElement("h2");
    title.innerText = phone.iphoneModel;
    phoneDiv.appendChild(title);

    const capacity = document.createElement("p");
    capacity.innerText = phone.iphoneCapacity;
    phoneDiv.appendChild(capacity);

    const display = document.createElement("p");
    display.innerText = phone.iphoneDisplay;
    phoneDiv.appendChild(display);

    const sizeAndWeight = document.createElement("p");
    sizeAndWeight.innerText = phone.iphoneSizeandWeight;
    phoneDiv.appendChild(sizeAndWeight);

    const camera = document.createElement("p");
    camera.innerText = phone.iphoneCamera;
    phoneDiv.appendChild(camera);



    const buyNowLink = document.createElement("a");
    buyNowLink.href = phone.buyNowLink;
    buyNowLink.innerText = "Buy Now";
    buyNowLink.classList.add("btn", "btn-primary");
    phoneDiv.appendChild(buyNowLink);

    featuresListDiv.appendChild(phoneDiv);
  });
});
