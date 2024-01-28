const Laptop = {
    name: 'MSI',
    CPU: 'Intel Core i7',
    OS: "WIndows",
    fabricator: 'China'
}


function getObjectValues(obj) {
    for (let key in obj)
        if (obj.hasOwnProperty(key)){
        console.log(key);
    }
}


getObjectValues(Laptop)