/* 함수 선언식 - 함수를 선언하는 가장 기본적인 방법*/
//함수선언식으로 작성된 함수의 특징은 호이스팅이 된다.
//console함수의 선언을 코드의 최상단으로 끌어올린다.
// 함수의 이름을 필수적으로 넣어주어야 한다. 즉, 익명함수를 만들 수 없다.

function main() {
    console.log('main function');
}

/* 함수 표현식 */

const main2 = function main2() {
    console.log('main2 function');
}

/* 애로우 펑션 */

const arrow = () => {
    console.log('arrow');
}

/* 함수는 또 다른 함수를 인자로 전달 받을 수 있다. */
/* main( function () {}) */

/* 콜백함수를 전달받은 함수에 의해서 */
function oxford(london) {
    london
    console.log(london);
}

/* function london() {
    console.log('london');
}

oxford(london) // '함수'를 전달
oxford(london()) // 함수의 '리턴값'을 전달 */

oxford(() => {
    console.log('london');
})

const tempMap = [1, 2, 3, 4, 5, 6, 7, 8]

const tempMap2 = tempMap.map((item, index) => item + index)

console.log(tempMap2);


setTimeout(() => {
    console.log('3000');
}, 3000)
