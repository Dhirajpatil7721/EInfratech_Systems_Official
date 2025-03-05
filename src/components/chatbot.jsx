import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatbotMessages");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            id: 1,
            text: "Welcome to Einfratech Systems India! How can I assist you?",
            sender: "bot",
          },
        ];
  });
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const faq = {
    "Who are you?":
      "I am the chatbot of Einfratech Systems India. I can explain about Einfratech services.",
    "What services do you offer?":
      "We specialize in IT solutions, software development, and cloud services.",
    "Where is your company located?": "We are based in India with offices in multiple cities.",
    "How can I contact support?": "You can reach us at support@einfratech.com.",
    "What industries do you serve?":
      "We serve industries like finance, healthcare, and manufacturing.",
    "Do you provide custom software development?":
      "Yes, we offer tailored software solutions for businesses.",
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  const handleUserMessage = (message) => {
    const botReply = faq[message] || "Sorry, I don't have an answer for that.";
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: message, sender: "user" },
      { id: prev.length + 2, text: botReply, sender: "bot" },
    ]);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      handleUserMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <MessageCircle size={30} className="text-white" />
        </button>
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="chatbot-window"
        >
          <div className="chatbot-header">
            <h2>Einfratech</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-questions">
            {Object.keys(faq).map((question, index) => (
              <button key={index} onClick={() => handleUserMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
