# useEffect 올바르게 사용하기

**참고**

- [How to solve the React useEffect Hook’s infinite loop patterns](https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/)
- [Mastering React's useEffect](https://www.youtube.com/watch?v=dH6i3GurZW8&t=813s)
- [데이터 타입과 변수](https://poiemaweb.com/js-data-type-variable)
- 모던 자바스크립트 Deep Dive 11장: 원시 값과 객체의 비교

## 1. useEffect 무한 루프의 원인과 해결방법

### 1.1 의존성 배열이 없는 경우

### 1.2 함수를 의존성 배열의 요소로 사용 할 경우

### 1.3 배열을 의존성 배열의 요소로 사용 할 경우

### 1.4 객체를 의존성 배열의 요소로 사용 할 경우

### 1.5 잘못된 변수를 의존성 배열에 넣은 경우

## 2. clean-up 함수

## 3. 참조값 이해하기

```js
// 원시값 비교
true === true; // true
false === true; // false

10 === 10; // true
12 === 10; // false

'hello' === 'hello'; // true

const personName = 'john';
personName === 'john'; // true

// 참조값 비교

// 배열
[] === []; // false
[1] === [1]; // false
[1] === [2]; // false

// 객체
({ a: 1 } === { a: 1 }); // false
const obj = { a: 1 };
obj === obj; // true
```
