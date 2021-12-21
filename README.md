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
    * **put** : 특정 액션 dispatch
        * `yield put({ type: LOG_IN_SUCCESS });`
    * **call** : (함수 실행) 동기 실행
        * 순서대로 함수를 실행해야 하는 API 요청 같은 곳에 사용
        * parameter
            * first : 호출할 함수
            * second : 호출할 함수(or API)의 파라미터
        * 예시
            * `yield call(Api.getUnreadCount, '0');`)
            * `const addedContact = yield call(fetchApi().addContact,contact);`
    * fork : (함수 실행) 비동기 실행
        * 보통 순서대로 할 필요없는데 시간많이 걸리는거 사용하는 듯 
        * 예를들어 logger : `yield fork(logger);`
    * take : (감시 역할) 해당 액션이 dispatch 되면 제너레이터를 next하는 effect, 한 번만 감시함
        ```javascript
        function* watchOrderRequest() {
            const action = yield take('REQUEST_ORDER');
            const result = yield call(Api.requestOrder, action.orderId);
            // ... process ...
        }
        ```
        * take이 액션 호출을 감시하고 있다가 'REQUEST_ORDER'라는 액션이 호출되면 이를 캐치해서 call 까지 진행될 수 있도록 next()를 진행
    * **takeLatest** (권장) : (감시역할) take와 비슷하지만, take를 무한히 반복한다고 생각
        * 인자
            * first : action type
            * second : 실행할 함수
        * action type이 dispatch 되기 감시하다가 캐치되면 함수 실행한다.
        * debounce : 중요한거는 특정 액션이 한번에 여러번 실행이 된 경우 마지막 액션만 실행한다는 것
        * 예시
            * `takeLatest(contactsType.CONTACTS_SET, contactsSaga.setContacts)`
        
    * delay : 일정 시간 후 다음 함수 단계 실행 effect
    * **all** : saga 여러개를 묶어서 사용할 수 있게 함 (많은 함수를 한번에 호출할 수 있도록 함)
        ```javascript
        yield all([
            helloSaga(),
            watchIncrementAsync()
        ])
        ```

## Redux 사용 예시

### redux 관련 파일 구조 설명
```
/src
   |--- /Store
           |--- index.js          [store 생성 : reducer mapping, saga middleware 생성 및 store 연결]
           |--- /Actions          [Action 함수 모음]
           |        |--- types.js [action type 모음]
           |--- /Sagas            [비동기 API 호출하는 것 모음]
           |        |--- rootSaga.js [saga들 모음, 동시 실행]
           |--- /Reducers         [Reducer 함수 모음]

```

### reducer 
* 항상 이전 state를 염두에 두고 보내야 함
    * error ([관련 이슈](https://velog.io/@mong-head/React-Redux-Saga-reducer-null-%EB%B0%98%ED%99%98))
        ```js
        case contactsType.CONTACTS_SET:
            return action.contacts;
        ```
    * good
        ```js
        case contactsType.CONTACTS_SET:
            return action.contacts ? action.contacts : state;
        ```

### saga 예시
* [src/Store/index.js](./src/Store/index.js)
    1. saga middle ware 생성
    2. reducer 결합
    3. store 생성 : reducer결합한거, middleware 연결
    4. rootSaga.js 실행
* src/Store/Sagas/rootSaga.js 
    * saga들 모아서 병렬적으로 실행되게 해줌
    * 현재 예시는 saga파일이 하나이지만, saga파일이 여러개인 경우 유용
    ```js
    import { all } from 'redux-saga/effects';
    import contactsSaga from '../Sagas/contactsSaga';

    export default function* rootSaga() {
        yield all([
            ...contactsSaga
        ]);
    }
    ```
* [src/Strore/Sagas/contactsSaga.js](./src/Store/Sagas/contactsSaga.js)
    * 무한히 saga를 호출하지 않게 하기 위해서 `takeLatest`에서 지켜보는 type과 `put`하는 type를 같게 하면 안된다.
        * error ([관련 이슈](https://velog.io/@mong-head/Error-React-Redux-Saga-saga-%EB%AC%B4%ED%95%9C%ED%9E%88-%EC%8B%A4%ED%96%89))
            * `put`과 `takeLatest` type 같음
            ```js
            export function* setContacts(){
                try{
                    const response = yield call(fetchApi().getAll);
                    yield put({type: contactsType.CONTACTS_SET, contacts : response.map(symbolizeObjectId)});
                } catch (error) {
                    yield put({type: contactsType.CONTACTS_SET, contacts : {}})
                } finally {
                }
            }

            // Action이랑 Saga 연결
            const saga = [
                takeLatest(contactsType.CONTACTS_SET, contactsSaga.setContacts)
            ];
            export default saga; 
            ```
        * good
            * [type분리](./src/Store/Actions/types.js) 
            * `put`과 `takeLatest` type 다름
            ```js
            export function* setContacts(){
                try{
                    const response = yield call(fetchApi().getAll);
                    yield put({type: contactsType.CONTACTS_SET_RESULT, contacts : response.map(symbolizeObjectId)});
                } catch (error) {
                    yield put({type: contactsType.CONTACTS_SET_RESULT, contacts : {}})
                } finally {
                }
            }

            // Action이랑 Saga 연결
            const saga = [
                takeLatest(contactsType.CONTACTS_SET, contactsSaga.setContacts)
            ];
            export default saga; 
            ```

## 참고
* effect 설명
    * [https://ssangq.netlify.app/posts/redux-saga](https://ssangq.netlify.app/posts/redux-saga)