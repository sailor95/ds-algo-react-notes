// Q1: To currency
// Example: "99900000.5566" -> "99,900,000.5566"

const toCurrency = input => {

}

// Q2: Anagram, check two strings can compose each other by all the char. (Ignore white space.)

const anagram = (s1, s2) => {

}

// Q3:



// Q4: Please complete the function to make the following two console log print true.

const getUrl = (url, param) => {

}

console.log(
    getUrl("/api/v1/user/{id}/profile", {
        id: 123,
        nickName: "Lee Chen",
        description: "Hello world @.@"
    }) === "/api/v1/user/123/profile?nickName=Lee+Chen&description=HelloWorld!%20%40.%40"
);
console.log(
    getUrl("/api/v1/server/{port}/{protocol}", {
        port: 80,
        protocol: "TCP"
    }) === "/api/v1/server/80/TCP"
);

// Q5:

// About Promise

// Q6: add(1)(2)(3) = 6, add(1,2)(3) = 6, add(1,2,3) = 6

const add_1 = x => {
    return innerAdd = y => {
        if (y) {
            x = y + x;
            return innerAdd;
        } else {
            return x;
        }
    }
}

const add_2 = x => {
    let f = y => add_2(x + y);
    f.valueOf = () => { return x };
    return f;
}

const sum = a => b => b ? sum(a + b) : a;

const add_3 = (...args) => {
    let sum = 0;
    if (args.length) {
        args.forEach(arg => sum += arg);
        return innerAdd = (...args) => {
            if (args.length) {
                args.forEach(arg => sum += arg);
                return innerAdd;
            } else {
                return sum;
            }
        }
    }
    return sum;
}

const add_4 = (...args) => {
    let sum = 0;
    if (args.length) {

        args.forEach(arg => sum += arg);

        const summer = (...args) => {
            args.forEach(arg => sum += arg);
            return summer;
        }

        summer.toString = () => {
            return sum;
        }

        return summer;
    }
    return sum;
}

// const add = () => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     if (arguments) {
//         return result = () => {
//             for (let i = 0; i < arguments.length; i++) {
//                 sum += arguments[i];
//             }
//             return result();
//         }
//     } else {
//         return sum;
//     }
// }



