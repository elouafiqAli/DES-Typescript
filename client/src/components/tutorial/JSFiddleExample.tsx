import { useState, useEffect, useRef } from "react";
import { Play, RotateCcw } from "lucide-react";

interface JSFiddleExampleProps {
  title: string;
  initialCode: string;
  htmlTemplate?: string;
}

export default function JSFiddleExample({ title, initialCode, htmlTemplate }: JSFiddleExampleProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [htmlOutput, setHtmlOutput] = useState<string>("");
  const codeRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleRunCode = () => {
    try {
      // Clear previous output
      setOutput("");
      setHtmlOutput("");
      
      // Capture console.log outputs
      const logs: string[] = [];
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      
      console.log = (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
        originalLog.apply(console, args);
      };
      
      console.error = (...args) => {
        logs.push('ERROR: ' + args.map(arg => String(arg)).join(' '));
        originalError.apply(console, args);
      };
      
      console.warn = (...args) => {
        logs.push('WARNING: ' + args.map(arg => String(arg)).join(' '));
        originalWarn.apply(console, args);
      };

      // Execute the code
      const result = eval(code);
      
      // Restore original console functions
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      
      // Set output
      if (logs.length > 0) {
        setOutput(logs.join('\n'));
      } else if (result !== undefined) {
        setOutput(String(result));
      } else {
        setOutput("Code executed successfully (no output)");
      }
      
      // If there's HTML template, update the preview
      if (htmlTemplate && iframeRef.current) {
        const fullHTML = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .output { padding: 10px; background: #f5f5f5; border-radius: 4px; margin: 10px 0; }
            </style>
          </head>
          <body>
            ${htmlTemplate}
            <script>
              try {
                ${code}
              } catch (error) {
                document.body.innerHTML += '<div class="output" style="color: red;">Error: ' + error.message + '</div>';
              }
            </script>
          </body>
          </html>
        `;
        
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        iframeRef.current.src = url;
        
        // Clean up the blob URL after a short delay
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
      
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      
      // Restore console functions in case of error
      console.log = console.log;
      console.error = console.error;
      console.warn = console.warn;
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
    setHtmlOutput("");
    if (iframeRef.current) {
      iframeRef.current.src = "about:blank";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-github-bg px-6 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-github-text">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleRunCode}
            className="bg-github-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Run Code
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Code Editor */}
        <div className="p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h4 className="font-medium text-github-text mb-2">JavaScript Code:</h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-3 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-github-blue resize-none"
            placeholder="Write your JavaScript code here..."
          />
        </div>
        
        {/* Output */}
        <div className="p-4">
          <h4 className="font-medium text-github-text mb-2">Output:</h4>
          
          {/* Console Output */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4 h-32 overflow-y-auto">
            <div className="font-mono text-sm text-github-gray whitespace-pre-wrap">
              {output || "Click 'Run Code' to see console output"}
            </div>
          </div>
          
          {/* HTML Preview (if template provided) */}
          {htmlTemplate && (
            <div>
              <h4 className="font-medium text-github-text mb-2">Live Preview:</h4>
              <iframe
                ref={iframeRef}
                className="w-full h-32 border border-gray-200 rounded-md bg-white"
                title="Code Preview"
                sandbox="allow-scripts"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}