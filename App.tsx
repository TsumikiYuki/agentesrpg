import React, { useState } from 'react';
import type { Character } from './types';
import AgentSelectScreen from './screens/AgentSelectScreen';
import AgentDetailsScreen from './screens/AgentDetailsScreen';

const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Character | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectAgent = (agent: Character) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedAgent(agent);
      setIsTransitioning(false);
    }, 300); // Match transition duration
  };

  const handleGoBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedAgent(null);
      setIsTransitioning(false);
    }, 300); // Match transition duration
  };

  return (
    <div className={`min-h-screen w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {selectedAgent ? (
        <AgentDetailsScreen character={selectedAgent} onBack={handleGoBack} />
      ) : (
        <AgentSelectScreen onAgentSelect={handleSelectAgent} />
      )}
    </div>
  );
};

export default App;
