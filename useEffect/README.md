# useEffect 올바르게 사용하기

**참고**

- [How to solve the React useEffect Hook’s infinite loop patterns](https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/)
- [Mastering React's useEffect](https://www.youtube.com/watch?v=dH6i3GurZW8&t=813s)
- [데이터 타입과 변수](https://poiemaweb.com/js-data-type-variable)
- 모던 자바스크립트 Deep Dive 11장: 원시 값과 객체의 비교

## 1. useEffect 무한 루프의 원인과 해결방법

### 1.1 의존성 배열이 없는 경우

```tsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  });

  return (
    <div>
      <p>현재 카운트: {count}</p>
    </div>
  );
}

export default App;
```

위 코드는 아래와 같은 무한 루프를 발생시킨다.

1. 첫번째 렌더링 때, React가 `count` 값을 확인한다. 여기서, `count` 값은 `0` 이므로, 프로그램은 `useEffect` 함수를 실행한다.
2. `useEffect` 함수는 `setCount` 메서드를 호출하고, `setCount` 메서드는 `count` 값을 `1` 증가시킨다.
3. React는 업데이트된 `count` 값을 화면에 반영하기 위해 다시 렌더링을 시작한다.
4. `useEffect` 훅에 의존성 배열이 없기 때문에`useEffect`는 모든 렌더링마다 실행되므로, UI가 재렌더링 되었기 때문에 `useEffect` 훅이 다시 실행되면서 `setCount` 메서드를 다시 호출한다. (무한루프)
5. 앱 충돌
   App.tsx:10 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

#### 해결방법

의존성 배열을 사용하여 React에게 의존성 배열의 요소가 변경되었을 때만 `useEffect` 함수를 실행하도록 알려준다.

```tsx
useEffect(() => {
  setCount((prev) => prev + 1);
}, []);
```

### 1.2 함수를 의존성 배열의 요소로 사용 할 경우

```tsx
function App() {
  const [count, setCount] = useState(0);

  const logResult = () => {
    return 2 + 2;
  };

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [logResult]);

  return (
    <div>
      <p>현재 카운트: {count}</p>
    </div>
  );
}

export default App;
```

```shell
The 'logResult' function makes the dependencies of useEffect Hook (at line 15) change on every render.
Move it inside the useEffect callback.
Alternatively, wrap the definition of 'logResult' in its own useCallback() Hook.
eslintreact-hooks/exhaustive-deps
```

```
Warning: Maximum update depth exceeded.
This can happen when a component calls setState inside useEffect,
but useEffect either doesn't have a dependency array,
or one of the dependencies changes on every render.
```

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
