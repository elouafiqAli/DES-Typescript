import { useEffect, useRef } from "react";

interface CodeExampleProps {
  title: string;
  code: string;
  children?: React.ReactNode;
}

export default function CodeExample({ title, code, children }: CodeExampleProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
      <div className="bg-github-bg px-6 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-github-text">{title}</h3>
      </div>
      <div className="p-6">
        <pre className="bg-code-bg rounded-lg p-4 overflow-x-auto mb-4">
          <code ref={codeRef} className="language-javascript">
            {code}
          </code>
        </pre>
        {children}
      </div>
    </div>
  );
}
