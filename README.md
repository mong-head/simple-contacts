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
        * parameter
            * first : 호출할 함수
            * second : 호출할 함수(or API)의 파라미터
        * 예시
            * `yield call(Api.getUnreadCount, '0');`)
    * fork : (함수 실행) 비동기 실행
        * 보통 순서대로 할 필요없는데 시간많이 걸리는거 사용하는 듯 
        * 예를들어 logger : `yield fork(logger);`
    * take : (감시 역할) 해당 액션이 dispatch 되면 제너레이터를 next하는 effect
        ```javascript
        function* watchOrderRequest() {
            const action = yield take('REQUEST_ORDER');
            const result = yield call(Api.requestOrder, action.orderId);
            // ... process ...
        }
        ```
        * take이 액션 호출을 감시하고 있다가 'REQUEST_ORDER'라는 액션이 호출되면 이를 캐치해서 call 까지 진행될 수 있도록 next()를 진행
    * takeLatest (권장)
        * 인자
            * first : action type
            * second : 실행할 함수
        * action type이 dispatch 되기 감시하다가 캐치되면 함수 실행한다.
        * debounce : 중요한거는 특정 액션이 한번에 여러번 실행이 된 경우 마지막 액션만 실행한다는 것
    * delay : 일정 시간 후 다음 함수 단계 실행 effect
    * all : saga 여러개를 묶어서 사용할 수 있게 함 (많은 함수를 한번에 호출할 수 있도록 함)
        ```javascript
        yield all([
            helloSaga(),
            watchIncrementAsync()
        ])
        ```

## Redux 사용 예시

### reducer 
* 항상 이전 state를 염두에 두고 보내야 함
    * error
        ```js
        case contactsType.CONTACTS_SET:
            return action.contacts;
        ```
    * good
        ```js
        case contactsType.CONTACTS_SET:
            return action.contacts ? action.contacts : state;
        ```

## 참고
* effect 설명
    * [https://ssangq.netlify.app/posts/redux-saga](https://ssangq.netlify.app/posts/redux-saga)