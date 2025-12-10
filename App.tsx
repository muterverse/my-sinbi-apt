import React, { useState, useCallback, useEffect } from 'react';
import { QUESTION_POOL } from './constants';
import { calculateCharacter } from './services/geminiService';
import { MBTIResult, CharacterResult, Question } from './types';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// --- Helper Functions ---

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Generate 12 questions: 3 from each category
const generateQuestions = (): Question[] => {
  const queue: Question[] = [];
  const categories = ['EI', 'SN', 'TF', 'JP'];
  
  categories.forEach(cat => {
    const pool = QUESTION_POOL[cat];
    const selected = shuffleArray(pool).slice(0, 3);
    queue.push(...selected);
  });
  
  return queue;
};

// --- Sub-components ---

const IntroScreen = ({ onStart }: { onStart: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-2xl mx-auto animate-fade-in bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]">
    <div className="mb-8 relative animate-pop">
      <div className="absolute inset-0 bg-green-400 blur-[60px] opacity-40 rounded-full"></div>
      <img 
        src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Shinbi&backgroundColor=54d7c7" 
        alt="Shinbi" 
        className="relative w-48 h-48 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-4 border-white mb-8">
      <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-2 tracking-tight drop-shadow-sm font-game">
        <span className="text-green-500">신비</span>아파트<br/>
        <span className="text-indigo-600 text-3xl md:text-5xl">캐릭터 테스트</span>
      </h1>
      <div className="h-1 w-20 bg-slate-200 mx-auto my-6 rounded-full"></div>
      <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
        나와 가장 닮은 신비아파트 캐릭터는 누구일까?<br/>
        AI 없이 100% 정밀 분석으로 알아봅니다!
      </p>
    </div>
    <Button onClick={onStart} className="text-xl px-12 py-5 font-bold rounded-2xl shadow-green-200 bg-green-500 hover:bg-green-600 text-white transform hover:-translate-y-1 transition-all shadow-xl border-b-4 border-green-700 active:border-b-0 active:translate-y-0">
      테스트 시작하기 👻
    </Button>
  </div>
);

const QuestionScreen = ({ 
  questionIndex, 
  totalQuestions, 
  question, 
  onAnswer 
}: { 
  questionIndex: number; 
  totalQuestions: number; 
  question: Question; 
  onAnswer: (value: string) => void; 
}) => {
  // Use Gu Hari as the main host for asking questions
  // Added 'mouth=smile' to make her look friendly/talking
  const hostImage = "https://api.dicebear.com/9.x/avataaars/svg?seed=Hari&clothing=hoodie&hair=longHair&hairColor=brown&skinColor=light&mouth=smile";

  return (
    <div key={question.id} className="min-h-screen flex flex-col items-center bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full max-w-xl px-6 pt-6 pb-2 z-10 flex flex-col h-screen">
        
        {/* Progress Bar */}
        <div className="mb-4">
           <ProgressBar current={questionIndex + 1} total={totalQuestions} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
            {/* Speech Bubble Area */}
            <div className="relative w-full mb-6 animate-pop origin-bottom">
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border-2 border-slate-200 relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center leading-relaxed font-game break-keep">
                  {question.text}
                </h2>
              </div>
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-r-2 border-b-2 border-slate-200 rotate-45 z-0"></div>
            </div>

            {/* Character Image */}
            <div className="relative z-0 -mt-2 mb-6">
               <img 
                 src={hostImage} 
                 alt="Host" 
                 className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-xl animate-fade-in"
               />
            </div>

            {/* Answer Buttons */}
            <div className="grid gap-4 w-full mt-auto mb-6">
              {question.options.map((option, idx) => (
                <Button 
                  key={idx} 
                  variant="secondary" 
                  onClick={() => onAnswer(option.value)}
                  className="text-left w-full py-4 px-6 text-lg font-medium border-2 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 transition-all shadow-sm hover:shadow-md rounded-2xl group bg-white/90 backdrop-blur-sm"
                >
                  <span className="flex items-center w-full">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex-shrink-0 flex items-center justify-center mr-4 group-hover:bg-indigo-200 group-hover:text-indigo-700 text-sm font-bold transition-colors">
                      {idx === 0 ? 'A' : 'B'}
                    </span>
                    <span className="flex-1">{option.text}</span>
                  </span>
                </Button>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-white/50">
    <div className="relative w-32 h-32 mb-8">
      <div className="absolute inset-0 border-8 border-slate-100 rounded-full"></div>
      <div className="absolute inset-0 border-8 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center text-4xl">👻</div>
    </div>
    <h2 className="text-3xl font-bold text-slate-800 mb-3 font-game">고스트볼 소환 중...</h2>
    <p className="text-slate-500 text-lg">당신의 영혼을 분석하고 있습니다.</p>
  </div>
);

const ResultScreen = ({ 
  result, 
  character, 
  onRetry 
}: { 
  result: MBTIResult; 
  character: CharacterResult; 
  onRetry: () => void 
}) => {
  const chartData = [
    { subject: '외향(E)', A: result.scores.E, fullMark: 3 },
    { subject: '내향(I)', A: result.scores.I, fullMark: 3 },
    { subject: '감각(S)', A: result.scores.S, fullMark: 3 },
    { subject: '직관(N)', A: result.scores.N, fullMark: 3 },
    { subject: '사고(T)', A: result.scores.T, fullMark: 3 },
    { subject: '감정(F)', A: result.scores.F, fullMark: 3 },
    { subject: '판단(J)', A: result.scores.J, fullMark: 3 },
    { subject: '인식(P)', A: result.scores.P, fullMark: 3 },
  ];

  return (
    <div className="min-h-screen bg-indigo-50 pb-20 animate-fade-in">
      {/* Header Result */}
      <div className="bg-slate-900 text-white pt-16 pb-32 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-indigo-300 font-bold tracking-widest mb-4 uppercase text-sm">나의 신비아파트 캐릭터는?</p>
          <div className="inline-block relative mb-6">
             <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
             <img src={character.imageUrl} alt={character.name} className="w-40 h-40 md:w-56 md:h-56 relative z-10 mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-2 font-game text-yellow-400 drop-shadow-lg">{character.name}</h1>
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mt-2">
            <p className="text-xl md:text-2xl font-bold text-white tracking-widest">{character.mbti}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-20 space-y-8">
        
        {/* Quote Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-b-8 border-indigo-500 text-center transform hover:-translate-y-1 transition-transform">
          <p className="text-2xl font-bold text-slate-800 font-game mb-2">"{character.catchphrase}"</p>
          <div className="flex justify-center gap-2 mt-4">
            {character.tags.map(tag => (
              <span key={tag} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-sm font-bold">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 text-xl">📜</span>
            성격 분석
          </h3>
          <p className="text-slate-600 leading-loose text-lg whitespace-pre-line">
            {character.description}
          </p>
        </div>

        {/* Stats & Match */}
        <div className="grid md:grid-cols-2 gap-6">
           {/* Radar Chart */}
           <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
             <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">에너지 분포</h4>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'bold' }} />
                    <PolarRadiusAxis domain={[0, 3]} tick={false} axisLine={false} />
                    <Radar name="My Type" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
           </div>

           {/* Match Info */}
           <div className="space-y-6">
              <div className="bg-green-50 rounded-3xl p-6 border-2 border-green-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase mb-1">환상의 파트너</p>
                  <p className="text-xl font-black text-slate-800">{character.bestMatch}</p>
                </div>
                <div className="text-4xl">😍</div>
              </div>
              <div className="bg-red-50 rounded-3xl p-6 border-2 border-red-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase mb-1">환장의 파트너</p>
                  <p className="text-xl font-black text-slate-800">{character.worstMatch}</p>
                </div>
                <div className="text-4xl">😱</div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100">
                <p className="text-center text-slate-500 text-sm mb-4">친구에게 내 결과 공유하기</p>
                <div className="flex gap-2 justify-center">
                   <Button variant="secondary" className="flex-1 py-3 text-sm" onClick={() => alert('링크가 복사되었습니다!')}>링크 복사</Button>
                </div>
              </div>
           </div>
        </div>

        <div className="mt-8 text-center pb-8">
          <Button onClick={onRetry} className="px-12 py-4 text-lg bg-slate-800 hover:bg-slate-900 shadow-lg shadow-slate-300">
            다시 테스트하기 🔄
          </Button>
        </div>

      </div>
    </div>
  );
};


// --- Main App Component ---

enum AppState {
  INTRO,
  TEST,
  CALCULATING,
  RESULT
}

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.INTRO);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [finalResult, setFinalResult] = useState<MBTIResult | null>(null);
  const [characterResult, setCharacterResult] = useState<CharacterResult | null>(null);

  const handleStart = useCallback(() => {
    // Generate new random questions each time
    const newQuestions = generateQuestions();
    setQuestions(newQuestions);
    setAppState(AppState.TEST);
    setCurrentQuestionIndex(0);
    setAnswers({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  }, []);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [value]: prev[value] + 1 }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishTest({ ...answers, [value]: answers[value] + 1 });
    }
  };

  const finishTest = useCallback(async (finalAnswers: Record<string, number>) => {
    setAppState(AppState.CALCULATING);

    // Calculate Type
    const type = [
      finalAnswers.E >= finalAnswers.I ? 'E' : 'I',
      finalAnswers.S >= finalAnswers.N ? 'S' : 'N',
      finalAnswers.T >= finalAnswers.F ? 'T' : 'F',
      finalAnswers.J >= finalAnswers.P ? 'J' : 'P'
    ].join('');

    const result: MBTIResult = {
      type,
      scores: {
        E: finalAnswers.E,
        I: finalAnswers.I,
        S: finalAnswers.S,
        N: finalAnswers.N,
        T: finalAnswers.T,
        F: finalAnswers.F,
        J: finalAnswers.J,
        P: finalAnswers.P
      }
    };

    setFinalResult(result);

    // Calculate Character (Local)
    const character = await calculateCharacter(result);
    setCharacterResult(character);
    setAppState(AppState.RESULT);
  }, []);

  const handleRetry = () => {
    setAppState(AppState.INTRO);
    setFinalResult(null);
    setCharacterResult(null);
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      {appState === AppState.INTRO && <IntroScreen onStart={handleStart} />}
      {appState === AppState.TEST && questions.length > 0 && (
        <QuestionScreen 
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      {appState === AppState.CALCULATING && <LoadingScreen />}
      {appState === AppState.RESULT && finalResult && characterResult && (
        <ResultScreen 
          result={finalResult} 
          character={characterResult} 
          onRetry={handleRetry} 
        />
      )}
    </div>
  );
}