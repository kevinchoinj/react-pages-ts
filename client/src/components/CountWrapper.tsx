import React, {useState} from 'react';

import Count from 'components/Count';

const CountWrapper: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count}/>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        increase count
      </button>
    </div>
  );
}

export default CountWrapper;
