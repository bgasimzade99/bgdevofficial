import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I'm the BGDev assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = [
    { text: "Who is BGDev?", query: "who is bgdev" },
    { text: "What services do you have?", query: "what services you have" },
    { text: "What are your prices?", query: "prices" },
    { text: "How can I contact you?", query: "contact" },
    { text: "Show me your projects", query: "projects" },
    { text: "What technologies do you use?", query: "technology" }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const botResponses = [
    "That's interesting, tell me more about your project.",
    "I'd be happy to help you with that. What specific features are you looking for?",
    "Great question. Our team specializes in AI-powered solutions. Would you like to know more?",
    "I can help you with web development, mobile apps, or AI integration. What interests you?",
    "For detailed project quotes, please fill out our contact form or email us at bgdevofficial@gmail.com",
    "We offer services in React Native, Firebase, AI integrations, and modern web technologies.",
    "You can check out our projects section to see examples of our work.",
    "Our team is available Monday to Friday, 9:00 to 18:00. Feel free to reach out anytime.",
    "That sounds like a solid project. Would you like to schedule a consultation?",
    "I'm here to help. Is there anything specific about our services you'd like to know?"
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('who is bgdev') || lowerMessage.includes('what is bgdev')) {
      return "BGDev is a trusted web and mobile development agency specializing in AI-powered solutions. We build websites, apps, and SaaS products using React Native, Firebase, and AI integrations. Our team is based in Riga, Latvia, and we work with businesses worldwide.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello, how can I assist you today?";
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return "For project quotes, please fill out our contact form or email bgdevofficial@gmail.com. We'll put together a detailed proposal.";
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return "We offer web development, mobile apps, AI chatbot integration, SaaS platforms, UI/UX and 3D design, IT business analysis, SEO, and customer support solutions. What interests you?";
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return "Check out our Projects section to see BGFocus, BGResume, Convertonix, and more. We build AI-powered solutions end to end.";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach us at bgdevofficial@gmail.com, +994 55 451 19 99, or find us in Riga, Latvia.";
    }
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('stack')) {
      return "We use React, React Native, TypeScript, Firebase, AI APIs like GPT-4 and ChatGLM, Tailwind CSS, and Framer Motion. A modern, production-grade stack.";
    }
    if (lowerMessage.includes('time') || lowerMessage.includes('hours') || lowerMessage.includes('available')) {
      return "We're available Monday to Friday, 9:00 to 18:00. You can reach us by email anytime.";
    }
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome. Is there anything else I can help you with?";
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye. Feel free to come back anytime.";
    }

    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (query: string) => {
    handleSendMessage(query);
  };

  const handleSendButtonClick = () => {
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsMinimized(true);
    } else if (isOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-gradient rounded-full shadow-brand-glow flex items-center justify-center text-white transition-all duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-ink-950 animate-pulse-soft" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: isMinimized ? 400 : 0,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] ${
              isMinimized ? 'h-auto' : 'h-[600px]'
            } bg-ink-900/98 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden`}
          >
            <div className="bg-brand-gradient p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/15 border border-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">BGDev Assistant</h3>
                  <p className="text-white/75 text-xs">Online, here to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleChat}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-lg transition-colors"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  <Minimize2 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeChat}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/15 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ink-950/60">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-brand-gradient text-white'
                          : 'bg-white/[0.05] text-neutral-200 border border-white/10'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-brand-300" />
                        )}
                        {message.sender === 'user' && (
                          <User className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                        )}
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      </div>
                      <p className={`text-[11px] mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-neutral-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-2.5">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {!isMinimized && showQuickQuestions && messages.length <= 1 && (
              <div className="px-4 pb-3 pt-3 bg-ink-950/60 border-t border-white/10">
                <p className="text-xs text-neutral-500 mb-2">Quick questions</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleQuickQuestion(question.query)}
                      className="px-3 py-1.5 text-xs bg-white/[0.03] border border-white/10 rounded-full hover:border-brand-300/40 hover:text-white transition-all duration-200 text-neutral-300"
                    >
                      {question.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {!isMinimized && (
              <div className="p-4 bg-ink-900 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-brand-300/50 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendButtonClick}
                    disabled={!inputValue.trim()}
                    className="p-2.5 bg-brand-gradient text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-[11px] text-neutral-600 mt-2 text-center">
                  Press Enter to send
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
