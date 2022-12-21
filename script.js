function initialize() {
    addBox = document.getElementById("itemsel"); 
    deleteItemBox = document.getElementById("indexsel");
    moveItemBox = document.getElementById("movesel"); 
    groceryList = document.getElementById("list"); 
    heading = document.getElementById("listheader"); 

    items = [""]; 

    display(); 
}

function addItem() {
    if (addBox.value == "") {
        return; 
    }
    if (items[0] == "") {
        items.splice(0, 1); 
    }
    contains = false; 
    for (var i = 0; i < items.length; i++) {
        if (items[i].toUpperCase() == addBox.value.toUpperCase()){
            contains = true; 
            break; 
        }
    }
    if (contains) {
        heading.innerHTML = "You already have that item on the list"; 
        return; 
    }
    items.push(addBox.value); 
    addBox.value = ""; 
    display(); 
}

function deleteItem() {
    items.splice(deleteItemBox.value-1, 1); 
    deleteItemBox.value = ""; 
    display(); 
}

function moveUp() { 
    if (moveItemBox.value == 1) {
        return;
    }
    [items[moveItemBox.value - 1], items[moveItemBox.value - 2]] = [items[moveItemBox.value - 2], items[moveItemBox.value - 1]];
    moveItemBox.value--; 
    display(); 
}

function moveDown() {
    if (moveItemBox.value == items.length) {
        return;
    }
    [items[moveItemBox.value-1], items[moveItemBox.value]] = [items[moveItemBox.value], items[moveItemBox.value-1]];
    moveItemBox.value++; 
    display(); 
}

function clearRows() {
    for (var i = 1; i < groceryList.rows.length; ++i) {
        groceryList.deleteRow(i); 
        i--; 
    } 
} 

function display() {
    clearRows(); 
    for (var i = 0; i < items.length; i++) {
        var newRow = groceryList.insertRow(); 
        var newCell = newRow.insertCell(); 
        newCell.innerHTML =  "<span style='color: #46C092;'>"+(i+1)+". "+"</span>" + items[i].charAt(0).toUpperCase() + items[i].slice(1); 
    }
}
