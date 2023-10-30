// 내부 라이브러리 imports
import { useState, useEffect } from 'react';
// 외부 라이브러리 imports
// 내부 파일 imports

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>현재 카운트: {count}</p>
    </div>
  );
}

export default App;
/*
App.tsx:10 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
*/
