(function () {
    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplate = document.querySelector("#pageTemplate");

    let folders = [];
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);

    function addFolder() {
        let fname = prompt("Enter folder's name");
        if (!!fname) {
            let exists = folders.some(f => f.name == fname);
            if (!exists) {
                fid++;
                folders.push({
                    id: fid,
                    name: fname
                });

                addFolderHTML(fname, fid);
                saveToStorege();
            }else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                alert(fname + "alrady exists.");
            }
        } else {
            alert("Please enter something");
        }
    }

    function editFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let efid = parseInt(divFolder.getAttribute("fid"));

        let fname = prompt("Enter a new name for " + divName.innerHTML);
        if(!!fname){
            if(fname != divName.innerHTML){
                let exists = folders.some(f => f.name == fname && f.id != efid);
                if(!exists){
                    fid++;
                    folders.push({
                        id: fid,
                        name: fname
                    });
                    addFolderHTML(fname, fid);
                    saveToStorege();
                }else{
                    alert(fname + " alrady exists.");
                }
            }else{
                alert("This is old name only, Please enter new one.")
            }
        }else{
            alert("Please enter a name.");
        }
    }

    function deleteFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let flag = confirm("Are you sure You want to delete " + divName.innerHTML + "?");
        if(flag){
            let fidx = folders.findIndex(f => f.name == divName.innerHTML);
            folders.splice(fidx, 1);
            divContainer.removeChild(divFolder);
            saveToStorege();
        }
    }

    function saveToStorege() {
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }

    function loadFromStorage() {
        let fjson = localStorage.getItem("data");
        if (!!fjson) {
            folders = JSON.parse(fjson);
            folders.forEach(f => {
                if (f.id > fid) {
                    fid = f.id
                }
                addFolderHTML(f.name, f.id)
            });
        }
    }

    function addFolderHTML(fname, fid) {
        let divFolderTemplate = pageTemplate.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let spanEdit = divFolder.querySelector("[action='edit']");
        let spanDelete = divFolder.querySelector("[action='delete']");
        let divName = divFolder.querySelector("[purpose='name']");

        divFolder.setAttribute("fid", fid);
        divName.innerHTML = fname;

        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);

        divContainer.appendChild(divFolder);
    }

    loadFromStorage();
})();