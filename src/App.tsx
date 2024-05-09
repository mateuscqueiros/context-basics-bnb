import './App.css';
import { useTrucoStore } from './stores/truco';

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ScoreBoard />
      <div className="flex flex-col border-2 border-slate-950 p-4 gap-5">
        <h2 className="text-2xl">Times</h2>
        <div className="flex flex-row gap-2">
          <TeamA />
          <TeamB />
        </div>
      </div>
    </div>
  );
}

const TeamA = () => {
  // const { teamA: team, incrementA: increment } = useTrucoContext();
  const team = useTrucoStore((state: any) => state.teamA);
  const increment = useTrucoStore((state: any) => state.incrementA);
  return <Team title="Time A" team={team} increment={increment} />;
};

const TeamB = () => {
  // const { teamB: team, incrementB: increment } = useTrucoContext();
  const team = useTrucoStore((state: any) => state.teamB);
  const increment = useTrucoStore((state: any) => state.incrementB);
  return <Team title="Time B" team={team} increment={increment} />;
};

const ScoreBoard = () => {
  // const { teamA, teamB } = useTrucoContext();
  const teamA = useTrucoStore((state: any) => state);
  const teamB = useTrucoStore((state: any) => state.teamB);
  return (
    <div className="w-[200px] h-[200px] flex items-center justify-center border-2 border-slate-950 p-2">
      <h1 className="text-2xl">
        {teamA === teamB ? 'Empate' : teamA > teamB ? 'Time A' : 'Time B'}
      </h1>
    </div>
  );
};

const Team = ({ title, team, increment }: any) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center border-2 border-slate-950 p-4">
      <h3 className="flex flex-col">
        {title}: <span className="text-3xl">{team}</span>
      </h3>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default App;
