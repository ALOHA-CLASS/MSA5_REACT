
async function fetchData() {
    const response = await fetch('https://httpbin.org/get')
    // await 를 쓰면 비동기 응답을 기다린다.
    console.log(response);
    // json 객체로 변환
    const data = await response.json()
    return data
    // response.then((result) => {
    //     console.log(result);
    // })
}

// await 는 async 함수 안에서만 사용한다.
console.log("함수 바깥으로 데이터 가져옴...");
fetchData()
    .then((data) => {
        console.log(data);
    })

console.log(`async await 비동기 요청 처리`);
