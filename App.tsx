import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import type { Service } from './types';
import { GeminiIcon, NotebookLMIcon, JulesIcon, FlowIcon, WhiskIcon, LabsIcon } from './components/icons';

const aiServices: Service[] = [
    {
        id: 'gemini',
        title: 'Gemini',
        description: 'A kreatív partnered, amely segít írni, tervezni, tanulni és alkotni. A Google legfejlettebb AI modellje.',
        url: 'https://gemini.google.com/app',
        Icon: GeminiIcon,
        gradient: 'rgba(113, 103, 255, 0.2)',
    },
    {
        id: 'notebooklm',
        title: 'NotebookLM',
        description: 'A személyes AI kutatási asszisztensed. Töltsd fel forrásaidat, és nyerj ki belőlük releváns információkat.',
        url: 'https://notebooklm.google.com/',
        Icon: NotebookLMIcon,
        gradient: 'rgba(67, 185, 255, 0.2)',
    },
    {
        id: 'jules',
        title: 'Jules',
        description: 'AI-alapú kódolási asszisztens, amely segít a fejlesztőknek a komplex programozási feladatok megoldásában.',
        url: 'https://jules.google.com/task',
        Icon: JulesIcon,
        gradient: 'rgba(255, 122, 183, 0.2)',
    },
    {
        id: 'flow',
        title: 'Flow',
        description: 'Engedd szabadjára a zenei kreativitásodat. Interaktív kísérletek hangokkal és dallamokkal a Google Labstól.',
        url: 'https://labs.google/fx/hu/tools/flow',
        Icon: FlowIcon,
        gradient: 'rgba(103, 255, 183, 0.2)',
    },
    {
        id: 'whisk',
        title: 'Whisk',
        description: 'Keverj, alkoss és inspirálódj. Új ötletek és vizuális koncepciók generálása meglévő elemekből.',
        url: 'https://labs.google/fx/tools/whisk',
        Icon: WhiskIcon,
        gradient: 'rgba(255, 189, 103, 0.2)',
    },
    {
        id: 'google-labs',
        title: 'Google Labs',
        description: 'A jövő műhelye. Fedezd fel a Google legújabb, formabontó és kísérleti projektjeit egy helyen.',
        url: 'https://labs.google/',
        Icon: LabsIcon,
        gradient: 'rgba(255, 255, 255, 0.15)',
    },
];

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans antialiased overflow-x-hidden">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-slate-900/50 z-[-2]"
            ></div>
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 112, 255, 0.3), transparent)',
                zIndex: -1,
              }}
            ></div>

            <main className="relative container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 pb-2">
                        Google AI Eszköztár
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                        Fedezd fel a Google legnépszerűbb és legújabb kísérleti AI-szolgáltatásait.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {aiServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <footer className="text-center mt-16 md:mt-24 text-slate-500 text-sm">
                    <p>Készítette egy AI, hogy bemutassa a társait.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
