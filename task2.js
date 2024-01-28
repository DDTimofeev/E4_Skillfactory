const Laptop = {
    name: 'MSI',
    CPU: 'Intel Core i7',
    OS: "WIndows",
    fabricator: 'China'
}


function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true
    } else {
        return false
    }
}

console.log(isProperty(Laptop, 'fabricator'))
