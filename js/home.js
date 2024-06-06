var bookName =document.getElementById("bookname");
var bookUrl =document.getElementById("bookurl");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");

var deleteBtns;
var visitBtns;
var closeBtn = document.getElementById("closeBtn");

var sitesList=[];

var boxModal = document.querySelector(".box-info");



function addWebsite(){
    var site={
        name:bookName.value,
        url:bookUrl.value,
    }
    sitesList.push(site);
    displaySite(sitesList);
    clearInputs();

    console.log("hello",sitesList);
}



function displaySite(list){

    var cartona=``;
    for (var i=0; i<list.length;i++){

        cartona +=` <tr>
        <td> ${i+1}</td>
        <td> ${list[i].name} </td>              
        <td>
        <button class="btn btn-visit " >
            <i class="fa-solid fa-eye pe-2"></i>Visit
        </button>
        </td>
        <td>
        <button onclick="deleteSite(${i})" class="btn btn-delete pe-2" >
            <i class="fa-solid fa-trash-can"></i>
            Delete
        </button>
        </td>
    </tr>`
    }
    document.getElementById("tableContent").innerHTML = cartona;
    
}



function clearInputs(){
    bookName.value=null;
    bookUrl.value=null;
}



function deleteSite(index){
    console.log(index);
    sitesList.splice(index,1);
    console.log(sitesList);
    displaySite(sitesList);

}




var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

bookName.addEventListener("input", function () {
    validate(bookName, nameRegex);
});

bookUrl.addEventListener("input", function () {
        validate(bookUrl, urlRegex);
});

function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    }
}



submitBtn.addEventListener("click", function () {

    if (
        bookName.classList.contains("is-invalid") &&
        bookURL.classList.contains("is-invalid")
    ) {
    boxModal.classList.remove("d-none");
    }
});






function closeModal() {
    boxModal.classList.add("d-none");
}

closeBtn.addEventListener("click", closeModal);
