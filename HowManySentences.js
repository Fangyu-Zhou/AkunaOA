// let s = "cba";
// let s1 = "bca"
// s = s.split("").sort().toString();
// s1 = s1.split("").sort().toString();
// console.log(s == s1);
//
// let dict = {};
// dict[s] = 1;
// dict[s] += 1;
// console.log(dict);

function solution(set, sentences) {
    let res = [];
    let dict = {};
    for (let i = 0; i < set.length; i ++) {
        let cur = set[i].split("").sort().toString();
        if (dict.hasOwnProperty(cur)) {
            dict[cur] += 1;
        } else {
            dict[cur] = 1;
        }
    }

    for (let i = 0; i < sentences.length; i ++) {
        let curRes = 1;
        let arr = sentences[i].split(" ");
        for (let j = 0; j < arr.length; j ++) {
            let cur = arr[j].split("").sort().toString();
            if (dict.hasOwnProperty(cur)) {
                curRes *= dict[cur];
            } else {
                curRes *= 1;
            }
        }
        res.push(curRes);
    }
    console.log(res);
}

let set = ["the","bats","tabs","in","cat","act"];
let sentences = ["cat the bats", "in the act", "act tabs in"];
solution(set, sentences);