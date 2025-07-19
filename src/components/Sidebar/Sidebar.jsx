import {
  Bot,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({ onNewChat }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-60"
      } min-h-screen bg-[#0f172a] text-white flex flex-col border-r border-gray-700 transition-all duration-300`}
    >
      {/* Toggle Collapse Icon */}
      <div className="flex justify-end p-2">
        <button
          onClick={toggleSidebar}
          className="text-indigo-400 hover:text-white transition-colors"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 p-4 text-sm font-medium">
        <div
          onClick={onNewChat}
          className="flex items-center gap-3 hover:bg-indigo-700/20 px-3 py-2 rounded-md cursor-pointer"
        >
          <Bot className="w-5 h-5 text-indigo-400" />
          {!isCollapsed && <span>New Chat</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-indigo-700/20 px-3 py-2 rounded-md cursor-pointer">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          {!isCollapsed && <span>Help Center</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-indigo-700/20 px-3 py-2 rounded-md cursor-pointer mt-auto">
          <Settings className="w-5 h-5 text-indigo-400" />
          {!isCollapsed && <span>Settings</span>}
        </div>
      </div>
    </div>
  );
}
