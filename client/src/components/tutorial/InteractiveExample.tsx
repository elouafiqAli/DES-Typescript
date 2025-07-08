import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

interface InteractiveExampleProps {
  title: string;
  code: string;
  onRun: () => string;
}

export default function InteractiveExample({ title, code, onRun }: InteractiveExampleProps) {
  const [output, setOutput] = useState<string>("Click \"Run Code\" to see the results");
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleRunCode = () => {
    try {
      const result = onRun();
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-github-bg px-6 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-github-text">{title}</h3>
        <button
          onClick={handleRunCode}
          className="bg-github-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          Run Code
        </button>
      </div>
      <div className="p-6">
        <pre className="bg-code-bg rounded-lg p-4 overflow-x-auto mb-4">
          <code ref={codeRef} className="language-javascript">
            {code}
          </code>
        </pre>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-github-text mb-2">Output:</h4>
          <div className="font-mono text-sm text-github-gray whitespace-pre-wrap">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
}
