import React from 'react';
import './style.css';

const App: React.FC = () => {
  // 오류 발생 (정의되지 않은 변수 사용)
  //   console.log(value1);

  // 오류 발생 (사용되지 않는 변수)
  // const unusedVariable = 10;

  // 정상 코드
  const value2 = 5;
  console.log(value2);

  return (
    <div className="app-container">
      <h1>Hello, World! asdfasf</h1>
      <div>aaa</div>
    </div>
  );
};

export default App;
