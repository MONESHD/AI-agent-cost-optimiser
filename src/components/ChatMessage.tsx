import React from 'react';
import { UserIcon, BotIcon } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
export interface ChatMessageProps {
  content: string;
  isUser: boolean;
  showDashboard?: boolean;
}
const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  isUser,
  showDashboard = false
}) => {
  return <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-100 ml-2' : 'bg-gray-100 mr-2'}`}>
          {isUser ? <UserIcon className="h-5 w-5 text-blue-600" /> : <BotIcon className="h-5 w-5 text-gray-600" />}
        </div>
        <div className={`py-3 px-4 rounded-lg ${isUser ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'}`}>
          <p className="text-sm">{content}</p>
          {showDashboard && !isUser && <DashboardPreview />}
        </div>
      </div>
    </div>;
};
export default ChatMessage;