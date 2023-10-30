// 내부 라이브러리 imports
import { useState, useEffect } from 'react';
// 외부 라이브러리 imports
// 내부 파일 imports

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
