interface SidebarProps {
  progress: number;
}

export default function Sidebar({ progress }: SidebarProps) {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { href: "#introduction", label: "Getting Started" },
    { href: "#variables", label: "Variables & Types" },
    { href: "#functions", label: "Functions" },
    { href: "#objects", label: "Objects & Arrays" },
    { href: "#examples", label: "Interactive Examples" },
  ];

  return (
    <aside className="hidden lg:block lg:col-span-1">
      <nav className="sticky top-24 space-y-2">
        <div className="text-sm font-medium text-github-text mb-4">Table of Contents</div>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-github-gray hover:text-github-blue py-1 border-l-2 border-transparent hover:border-github-blue pl-3 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 p-4 bg-github-bg rounded-lg">
          <h4 className="font-medium text-github-text mb-2">Progress</h4>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-github-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-github-gray mt-2">2 of 5 sections completed</p>
        </div>
      </nav>
    </aside>
  );
}
