
/*  */
// const login = (username, callback) => {
//     setTimeout(() => {
//         callback(username)
//     }, 1000)
// }

const login = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username) {
                resolve(username)
            } else {
                reject(new Error('아이디를 입력해주세요.'))
            }
        }, 1000)
    })
}

login('chris').then((username) => {
    console.log(`${username}님 안녕하세요.`);
}).catch((error) => {
    console.log(error);
})


const addToCart = (product) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product) {
                resolve(product)
            } else {
                reject(new Error('there is no product'))
            }
        }, 1000)
    })
}

addToCart('potato').then((product) => {
    console.log(`${product}이 위시리스트에 담겼어요!`);
}).catch((error) => {
    console.log(error);
})


const payment = (cardNumber, product) => {

    const strCardNumber = cardNumber.toString()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (strCardNumber.length < 15) {
                reject(new Error('카드 번호 에러'))
                return;
            }

            if (!product) {
                reject(new Error('결제할 상품이 없습니다.'))
                return;
            }

            resolve(product)
        }, 1000)
    })
}

payment('121321113', 'potato')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => { console.log(error); })



login('')
    .catch(() => {
        return 'anonymous'
    })
    .then((username) => {
        console.log(`${username}님 안녕하세요.`);
        return addToCart('sweet potato')
    })
    .then(product => {
        console.log(`${product}이 위시리스트에 담겼어요!`);
        return payment('123213213213213', product)
    })
    .then((product) => {
        console.log(`${product} 상품이 결제 완료 되었습니다.`);
    })
    .catch((error) => {
        console.log(object);
    })