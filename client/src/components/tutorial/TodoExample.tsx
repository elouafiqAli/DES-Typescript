import { useState, useEffect, useRef } from "react";
import { Play, Plus, Check } from "lucide-react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export default function TodoExample() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);
  const codeRef = useRef<HTMLElement>(null);

  const code = `class TodoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    
    addTask(description) {
        const task = {
            id: this.nextId++,
            description: description,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(task);
        return task;
    }
    
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
        return task;
    }
    
    getActiveTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}

// Usage example
const todoList = new TodoList();
todoList.addTask("Learn JavaScript");
todoList.addTask("Build a project");
todoList.completeTask(1);`;

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightElement(codeRef.current);
    }
  }, []);

  const handleRunExample = () => {
    setTasks([]);
    setNextId(1);
    const initialTasks = [
      { id: 1, description: "Learn JavaScript", completed: false },
      { id: 2, description: "Build a project", completed: false }
    ];
    setTasks(initialTasks);
    setNextId(3);
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: nextId,
        description: newTask.trim(),
        completed: false
      };
      setTasks([...tasks, task]);
      setNextId(nextId + 1);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-github-bg px-6 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-github-text">Example 2: To-Do List Manager</h3>
        <button
          onClick={handleRunExample}
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
          <h4 className="font-medium text-github-text mb-2">Interactive Demo:</h4>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a new task"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-github-blue"
              />
              <button
                onClick={addTask}
                className="bg-github-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Task
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-2 p-2 bg-white border rounded ${
                    task.completed ? 'opacity-50' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      task.completed
                        ? 'bg-github-blue border-github-blue text-white'
                        : 'border-gray-300 hover:border-github-blue'
                    }`}
                  >
                    {task.completed && <Check className="w-3 h-3" />}
                  </button>
                  <span className={task.completed ? 'line-through' : ''}>
                    {task.description}
                  </span>
                </div>
              ))}
              {tasks.length === 0 && (
                <p className="text-github-gray text-sm">No tasks yet. Add one above or click "Run Code" to see examples.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
