(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder(){
        let fname = prompt("Enter folder's name");
        
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose=name]");
        divName.innerHTML = fname;
        
        divContainer.appendChild(divFolder);
    }

    function addTextFile(){
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder(){

    }

    function deleteTextFile(){

    }

    function renameFolder(){

    }

    function renameTextFile(){

    }

    function viewFolder(){

    }

    function viewTextFile(){

    }

    function saveToStorage(){

    }

    function loadFromStorage(){

    }

    loadFromStorage();
})();
// to prevent namespace pollution