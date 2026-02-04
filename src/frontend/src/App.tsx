import { useState } from 'react';
import ValentinePage from './pages/ValentinePage';
import ValentineQuestionGatePage from './pages/ValentineQuestionGatePage';

function App() {
  const [hasAnswered, setHasAnswered] = useState(false);

  if (hasAnswered) {
    return <ValentinePage />;
  }

  return <ValentineQuestionGatePage onAnswer={() => setHasAnswered(true)} />;
}

export default App;
