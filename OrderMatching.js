let queue = [];

function buyOrder(price) {
    if (queue.length > 0) {
        let head = queue[0].split(" ");
        let buySell = head[0];
        let val = parseInt(head[1]);
        if (buySell == "sell" && val <= price) {
            queue.shift();
            return true;
        } else {
            queue.push("buy" + " " + price);
            return false;
        }
    } else {
        queue.push("buy" + " " + price);
        return false;
    }
}

function sellOrder(price) {
    if (queue.length > 0) {
        let head = queue[0].split(" ");
        let buySell = head[0];
        let val = parseInt(head[1]);
        if (buySell == "buy" && val >= price) {
            queue.shift();
            return true;
        } else {
            queue.push("sell" + " " + price);
            return false;
        }
    } else {
        queue.push("sell" + " " + price);
        return false;
    }
}

function hasOrder(price, buySell) {
    let s = buySell + " " + price;
    for(let i = 0; i < queue.length; i ++) {
        if (queue[i] == s) {
            return true;
        }
    }
    return false;
}

function previewOrder() {
    console.log("Current order list is: ");
    for (let i = 0; i < queue.length; i ++) {
        console.log(queue[i]);
    }
}

buyOrder(3);
previewOrder();
buyOrder(4);
previewOrder();
sellOrder(5);
previewOrder();
sellOrder(3);
previewOrder();
sellOrder(3);
previewOrder();
