import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/tutorial/Header";
import Sidebar from "@/components/tutorial/Sidebar";
import CodeExample from "@/components/tutorial/CodeExample";
import InteractiveExample from "@/components/tutorial/InteractiveExample";
import TodoExample from "@/components/tutorial/TodoExample";

export default function Tutorial() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    // Add Prism.js for syntax highlighting
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js';
    script.onload = () => {
      const autoloader = document.createElement('script');
      autoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js';
      document.head.appendChild(autoloader);
    };
    document.head.appendChild(script);

    const prismCSS = document.createElement('link');
    prismCSS.rel = 'stylesheet';
    prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css';
    document.head.appendChild(prismCSS);
  }, []);

  return (
    <div className="min-h-screen bg-white text-github-text">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <Sidebar progress={progress} />
          
          <main className="lg:col-span-3">
            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-github-text mb-4">Getting Started with JavaScript</h2>
                <p className="text-lg text-github-gray leading-relaxed">
                  JavaScript is a versatile programming language that powers modern web applications. 
                  This tutorial will guide you through the fundamentals with interactive examples and hands-on coding exercises.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What You'll Learn</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Variable declarations and data types
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Function creation and invocation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Working with objects and arrays
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    DOM manipulation and event handling
                  </li>
                </ul>
              </div>
            </section>

            {/* Variables Section */}
            <section id="variables" className="mb-16">
              <h2 className="text-3xl font-bold text-github-text mb-6">Variables & Data Types</h2>
              <p className="text-github-gray mb-6 leading-relaxed">
                Variables are containers for storing data values. JavaScript has several data types including strings, numbers, booleans, and objects.
              </p>
              
              <CodeExample
                title="Variable Declaration"
                code={`// Different ways to declare variables
let name = "John Doe";          // String
const age = 25;                 // Number
let isActive = true;            // Boolean
let hobbies = ["reading", "coding"]; // Array
let user = {                    // Object
    name: "Jane",
    email: "jane@example.com"
};`}
              >
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Best Practices</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Use <code className="bg-yellow-100 px-1 rounded">const</code> for values that won't change</li>
                    <li>• Use <code className="bg-yellow-100 px-1 rounded">let</code> for variables that may change</li>
                    <li>• Avoid <code className="bg-yellow-100 px-1 rounded">var</code> in modern JavaScript</li>
                  </ul>
                </div>
              </CodeExample>
            </section>

            {/* Functions Section */}
            <section id="functions" className="mb-16">
              <h2 className="text-3xl font-bold text-github-text mb-6">Functions</h2>
              <p className="text-github-gray mb-6 leading-relaxed">
                Functions are reusable blocks of code that perform specific tasks. They help organize your code and make it more maintainable.
              </p>
              
              <CodeExample
                title="Function Examples"
                code={`// Function declaration
function greetUser(name) {
    return \`Hello, \${name}!\`;
}

// Arrow function
const calculateArea = (width, height) => {
    return width * height;
};

// Function with default parameters
function createUser(name, role = "user") {
    return {
        name: name,
        role: role,
        createdAt: new Date()
    };
}

// Usage examples
console.log(greetUser("Alice"));
console.log(calculateArea(10, 20));
console.log(createUser("Bob", "admin"));`}
              />
            </section>

            {/* Objects Section */}
            <section id="objects" className="mb-16">
              <h2 className="text-3xl font-bold text-github-text mb-6">Objects & Arrays</h2>
              <p className="text-github-gray mb-6 leading-relaxed">
                Objects and arrays are complex data types that allow you to store collections of data and more complex entities.
              </p>
              
              <CodeExample
                title="Working with Objects"
                code={`// Object creation and manipulation
const student = {
    name: "Sarah Johnson",
    age: 22,
    courses: ["Math", "Physics", "Chemistry"],
    grades: {
        math: 95,
        physics: 87,
        chemistry: 92
    }
};

// Accessing properties
console.log(student.name);
console.log(student.grades.math);

// Adding new properties
student.email = "sarah@university.edu";
student.calculateGPA = function() {
    const grades = Object.values(this.grades);
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);`}
              />
            </section>

            {/* Interactive Examples */}
            <section id="examples" className="mb-16">
              <h2 className="text-3xl font-bold text-github-text mb-6">Interactive Examples</h2>
              <p className="text-github-gray mb-6 leading-relaxed">
                Try these interactive examples to practice what you've learned. Click the "Run Code" buttons to see the results.
              </p>
              
              <InteractiveExample
                title="Example 1: Simple Calculator"
                code={`function calculator(a, b, operation) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operation';
    }
}

// Test the calculator
console.log(calculator(10, 5, 'add'));        // 15
console.log(calculator(10, 5, 'multiply'));   // 50
console.log(calculator(10, 0, 'divide'));     // Cannot divide by zero`}
                onRun={() => {
                  const results = [
                    'calculator(10, 5, "add") = 15',
                    'calculator(10, 5, "multiply") = 50',
                    'calculator(10, 0, "divide") = "Cannot divide by zero"'
                  ];
                  return results.join('\n');
                }}
              />

              <TodoExample />

              <InteractiveExample
                title="Example 3: Data Processing"
                code={`// Sample data processing
const sales = [
    { month: "Jan", amount: 1200 },
    { month: "Feb", amount: 1500 },
    { month: "Mar", amount: 980 },
    { month: "Apr", amount: 1800 },
    { month: "May", amount: 2200 }
];

// Calculate total sales
const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

// Find best performing month
const bestMonth = sales.reduce((best, current) => 
    current.amount > best.amount ? current : best
);

// Calculate average
const averageSales = totalSales / sales.length;

// Format results
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    }).format(amount);
}`}
                onRun={() => {
                  const sales = [
                    { month: "Jan", amount: 1200 },
                    { month: "Feb", amount: 1500 },
                    { month: "Mar", amount: 980 },
                    { month: "Apr", amount: 1800 },
                    { month: "May", amount: 2200 }
                  ];
                  
                  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);
                  const bestMonth = sales.reduce((best, current) => 
                    current.amount > best.amount ? current : best
                  );
                  const averageSales = totalSales / sales.length;
                  
                  function formatCurrency(amount: number) {
                    return new Intl.NumberFormat('en-US', { 
                      style: 'currency', 
                      currency: 'USD' 
                    }).format(amount);
                  }
                  
                  return `Total Sales: ${formatCurrency(totalSales)}\nBest Month: ${bestMonth.month} (${formatCurrency(bestMonth.amount)})\nAverage Sales: ${formatCurrency(averageSales)}`;
                }}
              />
            </section>

            {/* Next Steps */}
            <section className="mb-16">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Congratulations! 🎉</h3>
                <p className="text-green-800 mb-4">
                  You've completed the JavaScript Fundamentals tutorial. You now have a solid foundation in variables, functions, objects, and arrays.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-github-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Download Certificate
                  </button>
                  <button className="bg-white border border-github-blue text-github-blue px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                    View Source Code
                  </button>
                  <button className="bg-white border border-github-blue text-github-blue px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                    Next Tutorial
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-github-bg border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-github-gray text-sm">
              © 2024 JavaScript Fundamentals Tutorial. Published with GitHub Pages.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-github-gray hover:text-github-blue transition-colors">GitHub</a>
              <a href="#" className="text-github-gray hover:text-github-blue transition-colors">Issues</a>
              <a href="#" className="text-github-gray hover:text-github-blue transition-colors">Contributing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
