# 간단한 연락처

배포 : https://simple-contacts-react.herokuapp.com/

## 새롭게 알게된 점

* `onFocus` : Tab하거나 Click하는 경우 focus

* useCallback
    * 리랜더링마다 함수가 새로 생성되는 것을 막음
    * 한번 만들어진 함수를 재사용하기 위해서 사용함
    * 최적화된 자식 컴포넌트에 props로 콜백 함수를 내려줄 때 유용함

* Immutability Helper
    * `react-addons-update` module 설치 필요
    * 중첩된 object 다루기 쉬움
    * 하지만 깊은 복사는 아닌 듯

* symbol
    * object 내의 고유한 값을 숨길 때 사용가능
    * map등 일반적인 함수에서 symbol 타입 변수는 보이지 않음
    * 실무에서는 별로 안쓰인다고 함

## 주의할 점

* naming 규칙
    * 함수 : 동사형
        * props에서 받아온 것
            * ex ) onChange에서 Contact를 변경하는 경우 : ```onChangeContact```
        * 현재 컴포넌트 내의 함수
            * ex ) onSubmit인 경우 : ```handleSubmit```
            * 명사형으로 적지 말기 (```handler```같이 쓰지 말기)
    * state : 명사형
    * [참고: event handler naming in react](https://blog.sonim1.com/220)

* 쓸데없는 확인 구문 쓰지 말기

* `let` 보다는 `const`

* 변수 작성시 컴포넌트 내에서 유일한 값이 아니라면 this사용해서 선언하지 말기

* component key
    * map으로 돌렸을 때 index 값으로 하는 거 아님!
        * 새로운 컴포넌트가 추가되었을 때 다같이 함께 렌더링됨
        * 명시적으로 key를 주지 않는 경우 index로 key를 줌 -> 명시적으로 주기!
    * key는 컴포넌트의 고유한 값으로 하는 것이 좋음
        * 즉, contact(id,name,phoneNumber,등등의 property존재)라는 object를 가지고 컴포넌트를 그리는 경우, contact의 고유한 값인 id로 key를 설정해야함(```key={contact.id}```)  
    * [참고: React 배열의 index를 key로 쓰면 안되는 이유](https://medium.com/sjk5766/react-%EB%B0%B0%EC%97%B4%EC%9D%98-index%EB%A5%BC-key%EB%A1%9C-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3ce48b3a18fb)  

