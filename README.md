# 간단한 연락처 - Redux-Saga 사용

## 설치
```powershell
npm i redux-saga
```

## Redux-Saga
* 비동기 API를 처리하기 위해 사용
* 이러한 API를 처리하는 코드는 비즈니스 코드로, component 내에는 비즈니스 코드를 위치시키지 않는다.
* 비즈니스 로직을 모아놓기 위해 만든다.

## Redux 흐름

* ( Component → ) Type → Action → Saga (API호출하는 경우 사용) → reducer ( → Component )

## Generator

* `function*`
* redux-saga 의 effect : `yield`를 이용하여 호출
    * put : 특정 액션 dispatch
        * `yield put({ type: LOG_IN_SUCCESS });`
    * call : (함수 실행) 동기 실행
        * 순서대로 함수를 실행해야 하는 API 요청 같은 곳에 사용
        * `yield call(loginAPI);`)
    * fork : (함수 실행) 비동기 실행
        * 보통 순서대로 할 필요없는데 시간많이 걸리는거 사용하는 듯 
        * 예를들어 logger : `yield fork(logger);`
    * take : 해당 액션이 dispatch 되면 제너레이터를 next하는 effect
    * delay : 일정 시간 후 다음 함수 단계 실행 effect
    * all : saga 여러개를 묶어서 사용할 수 있게 함
        ```javascript
        yield all([
            helloSaga(),
            watchIncrementAsync()
        ])
        ```

