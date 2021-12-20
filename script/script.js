function getAndUpdate() {
    console.log("updaying List....");

    tit = document.getElementById('title').value;
    disc = document.getElementById('discription').value;

    if (localStorage.getItem('itemsJson') == null) {

        itemJsonArr = [];
        itemJsonArr.push([tit, disc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }

    else {

        itemJsonArrStr = localStorage.getItem('itemsJson')
        itemJsonArr = JSON.parse(itemJsonArrStr);
        itemJsonArr.push([tit, disc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr))
    }
    update();
}

function update() {

    if (localStorage.getItem('itemsJson') == null) {

        itemJsonArr = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }

    else {

        itemJsonArrStr = localStorage.getItem('itemsJson')
        itemJsonArr = JSON.parse(itemJsonArrStr);
    }
    //------------------------------Display in Table ------------------------------------------------//

    let tableBody = document.getElementById('tableBody');
    let str = "";

    itemJsonArr.forEach((element, index) => {
        str += `
  <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick= "deleted(${index})">Delete</button></td>
  </tr>`;
    });
    tableBody.innerHTML = str;
}


add = document.getElementById('add');
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrStr = localStorage.getItem('itemsJson')
    itemJsonArr = JSON.parse(itemJsonArrStr);

    //delete ItemIndex Element from the array//
    itemJsonArr.splice(itemJsonArr, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    update();

}

function clearStorage() {

    console.log("clear storage");
    confirm("Do you want to clear this list." + localStorage.clear());
    update();
}

function scrollWin() {
    window.scrollTo(0, 510);
}