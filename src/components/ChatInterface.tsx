import React, { useEffect, useState, useRef } from 'react';
import { SendIcon } from 'lucide-react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import Dashboard from '../pages/Dashboard';
const initialMessages: ChatMessageProps[] = [{
  content: "Hello! I'm your AI Cost Optimization Advisor. I can help you understand and optimize your enterprise AI costs, and show you comparisons between human and AI-driven workflows. Try asking me about cost comparisons or to show you the dashboard!",
  isUser: false
}];
const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>(initialMessages);
  const [input, setInput] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, {
        content: input,
        isUser: true
      }]);
      // Simulate AI response
      setTimeout(() => {
        let aiResponse: ChatMessageProps = {
          content: "I'm analyzing your request about AI cost optimization. Based on your enterprise needs, I recommend focusing on model selection, batch processing, and caching strategies to reduce costs.",
          isUser: false
        };
        // Check for dashboard-related keywords
        const dashboardKeywords = ['dashboard', 'compare', 'comparison', 'costs', 'metrics', 'show me'];
        if (dashboardKeywords.some(keyword => input.toLowerCase().includes(keyword))) {
          aiResponse = {
            content: "I've generated a comprehensive dashboard showing the cost and time comparisons between human workflows and AI solutions. You can see significant savings in both time and money across different tasks. The dashboard below shows detailed metrics and trends.",
            isUser: false
          };
          setShowDashboard(true);
        }
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      setInput('');
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return <main className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded-lg p-4">
        {messages.map((msg, index) => <ChatMessage key={index} content={msg.content} isUser={msg.isUser} />)}
        {showDashboard && <div className="mt-4">
            <Dashboard />
          </div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-2 flex">
        <textarea className="flex-1 resize-none outline-none text-sm px-2 py-1" value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} rows={1} placeholder="Ask about AI cost optimization or request the dashboard..." />
        <button onClick={handleSend} className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <SendIcon className="h-4 w-4" />
        </button>
      </div>
    </main>;
};
export default ChatInterface;