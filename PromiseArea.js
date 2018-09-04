let calculateArea = (shape, values) => {
    return new Promise(function (resolve, reject) {
        console.log(shape);
        console.log(values);
        if (shape == "square" || shape == "rectangle" || shape == "circle" || shape == "triangle") {
            if (shape == "square") {
                console.log("resolved as square");
                let area = values[0] * values[0];
                resolve(area.toFixed(2));
            }
            else if (shape == "rectangle") {
                console.log("resolved as rectangle");
                let area = values[0] * values[1];
                resolve(area.toFixed(2));
            }
            else if (shape == "circle") {
                console.log("resolved as circle");
                let area = values[0] * values[0] * 3.14;
                console.log("circle area: " + area);
                resolve(area.toFixed(2));
            }
            else {
                console.log("resolved as triangle");
                let a = values[0];
                let b = values[1];
                let c = values[2];
                let p = (a + b + c) / 2;
                let area = Math.sqrt(p * (p - a) * ( p - b) * (p - c));
                resolve(area.toFixed(2));
            }
        } else {
            console.log("CalAreas failure")
            reject(-1);
        }
    });
}

let getAreas = (shapes, values_arr) => {
    return new Promise(function (resolve, reject) {
        let res = [];
        for (let i = 0; i < shapes.length; i ++) {
            calculateArea(shapes[i], values_arr[i]).then(function (value) {
                console.log("calculated!");
                res.push(value);
                if (res.length == shapes.length) {
                    resolve(res);
                }
            }).catch(function (error) {
                console.log("getAreas failure");
                reject([-1]);
            });
        }

    });
}

let shapes = ["square", "rectangle", "circle", "triangle","polygon"];
let values_arr = [[2], [2,3], [2], [3,4,5], [1]];
getAreas(shapes, values_arr).then(function (value) {
    console.log(value);
}).catch((reason => {
    console.log(reason);
}));