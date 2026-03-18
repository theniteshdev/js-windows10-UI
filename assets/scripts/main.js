const wallpaperFilesFolderSection = document.querySelector(".wallpaper-files-folders-section");
const folderContainer = document.querySelector(".wallpaper-files-folders-section");
let count = 1;
const rightClickMenu = document.querySelector(".right-click-menu");
wallpaperFilesFolderSection.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    rightClickMenu.style.left = x + "px";
    rightClickMenu.style.top = y + "px";
    rightClickMenu.style.display = "block";
});
function addNewFolder(who, fname) {
    const folderName = fname || prompt("Enter your folder name:")
    if (!folderName || folderName === " " || folderName === null) {
        alert("Please enter valid folder name!");
        return;
    };
    /*
     <div class="user-folder" id="folder1">
                    <img src="./assets/images/icons/file-exp.png" alt="file-exp">
                    <p>New Folder1</p>
                </div>
     */
    const userFolder = document.createElement("div");
    userFolder.classList.add("user-folder");
    userFolder.id = `folder${count}`;

    const image = document.createElement("img");
    image.src = "./assets/images/icons/file-exp.png";
    image.alt = userFolder.id;

    const nameOfFolder = document.createElement("p");
    nameOfFolder.innerHTML = folderName;
    // handling localStorage
    who === "new" ? localStorage.setItem(`folder${count}`, folderName) : null;

    userFolder.append(image, nameOfFolder);
    folderContainer.appendChild(userFolder);
    count++; // count increase
}
wallpaperFilesFolderSection.addEventListener("click", (event) => {
    event.preventDefault();
    rightClickMenu.style.display = "none";
    switch (event.target.innerHTML) {
        case "Refresh":
            window.location.reload();
            break;
        case "New Folder":
            addNewFolder("new");
            break;
    }
});
// show localstorage folders
const allFolders = Object.values(localStorage);
allFolders.forEach((folder, index)=>{
    addNewFolder("already", folder)
})