(function () {
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];
    let cfid = -1; // initiallywe are at root (which has an id of -1)
    let rid = 0;

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder() {
        let rname = prompt("Enter folder's name");
        let rid = resources.length;
        let pid = cfid;
        rid++;
        addFolderHTML(rname, rid, pid);
        resources.push({
            rid: rid,
            rneme: rname,
            rtype: "folder",
            pid: cfid
        });
        saveToStorage();
    }

    function addFolderHTML(rname, rid, pid) {
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

        divFolder.setAttribute("rid", rid);
        divFolder.setAttribute("pid", pid);

        divContainer.appendChild(divFolder);
    }

    function addTextFile() {
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder() {
        console.log("in delete");
    }

    function deleteTextFile() {

    }

    function renameFolder() {

        console.log("in rename");
    }

    function renameTextFile() {

    }

    function viewFolder() {
        console.log("in view");
    }

    function viewTextFile() {

    }

    function saveToStorage() {
        let rjson = JSON.stringify(resources); // used to convert jso to json string which can be saved
        localStorage.setItem("data", rjson);
    }

    function loadFromStorage() {
        let rjson = localStorage.getItem("data");
        if (!!rjson) {
            resources.JSON.parse(rjson);
            for (let i = 0; i < resources.length; i++) {
                if (resources[i].pid == cfid) {
                    addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                }
                if (resources[i].rid > rid) {
                    rid = resources[i].rid;
                }
            }
        }
    }

    loadFromStorage();
})();
// to prevent namespace pollution