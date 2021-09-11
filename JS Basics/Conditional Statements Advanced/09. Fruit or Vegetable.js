function fruitOrVegi (input) {

    let product = input[0];

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        console.log("fruit");
        break; 

            case "tomato":
            case "cucumber":
            case "carrot":
            case "pepper":
        console.log("vegetable");
        break; 

        default: console.log("unknown");
        break;  
    } 

}

fruitOrVegi(["banana"]);
fruitOrVegi(["kiwi"]);
fruitOrVegi(["tomato"]);
fruitOrVegi(["4u6ka"]);

