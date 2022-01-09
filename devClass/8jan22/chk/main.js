(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];
    let 

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder(){
        



        let fname = prompt("Enter folder's name");
        
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete = divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view]");
        let divName = divFolder.querySelector("[purpose=name]");

        spanRename.addEventListener("click", renameFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder)
        divName.innerHTML = fname;
        
        divContainer.appendChild(divFolder);
    }

    function addTextFile(){
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder(){
        console.log("in delete");
    }

    function deleteTextFile(){

    }

    function renameFolder(){
        
        console.log("in rename");
    }

    function renameTextFile(){

    }

    function viewFolder(){
        console.log("in view");
    }

    function viewTextFile(){

    }

    function saveToStorage(){
        let rjson = JSON.stringify(resources);
        localStorage.setItem("data", rjson)
    }

    function loadFromStorage(){

    }

    loadFromStorage();
})();
// to prevent namespace pollution