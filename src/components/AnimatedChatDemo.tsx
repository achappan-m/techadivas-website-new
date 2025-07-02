import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define sender type
type Sender = 'user' | 'ai';

// Define message type
interface Message {
  sender: Sender;
  text: string;
}

const conversation: Message[] = [
  {
    sender: 'user',
    text: 'How can MedOli help me?'
  },
  {
    sender: 'ai',
    text: 'Hi! I am MedOli, your AI health assistant. I can help you track symptoms, answer health questions, and connect you to trusted resources.'
  },
  {
    sender: 'user',
    text: 'Can you remind me to take my medication?'
  },
  {
    sender: 'ai',
    text: 'Absolutely! I can set reminders for your medications and send you gentle notifications.'
  }
];

const avatars: Record<Sender, React.ReactElement> = {
  user: (
    <div style={{
      background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)',
      width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20
    }}>U</div>
  ),
  ai: (
    <div style={{
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20
    }}>🤖</div>
  )
};

function useTypewriter(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const bubbleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AnimatedChatDemo() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(true);
  const current = conversation[step];
  const typedText = useTypewriter(current.text, 24);

  useEffect(() => {
    setTyping(true);
  }, [step]);

  useEffect(() => {
    if (typedText === current.text) {
      setTyping(false);
      if (step < conversation.length - 1) {
        const timeout = setTimeout(() => setStep(step + 1), 1200);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, current, step]);

  return (
    <div style={{
      maxWidth: 420,
      margin: '40px auto',
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 24,
      boxShadow: '0 8px 32px rgba(60,60,120,0.12)',
      padding: 32,
      fontFamily: 'Inter, Montserrat, Arial, sans-serif',
      border: '1px solid #f0f0f0'
    }}>
      <h2 style={{textAlign: 'center', marginBottom: 24, fontWeight: 800, fontSize: 28, letterSpacing: 0.5, color: '#2d3748'}}>See MedOli in Action</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
        <AnimatePresence>
          {conversation.slice(0, step + 1).map((msg, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={bubbleVariants}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                gap: 12
              }}
            >
              {avatars[msg.sender]}
              <div style={{
                background: msg.sender === 'user'
                  ? 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)'
                  : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                color: '#fff',
                borderRadius: 18,
                padding: '14px 20px',
                fontSize: 17,
                fontWeight: 500,
                minWidth: 60,
                maxWidth: 260,
                boxShadow: '0 2px 8px rgba(60,60,120,0.08)',
                position: 'relative',
                wordBreak: 'break-word',
                borderBottomRightRadius: msg.sender === 'user' ? 4 : 18,
                borderBottomLeftRadius: msg.sender === 'ai' ? 4 : 18,
                marginBottom: 2
              }}>
                {idx === step ? typedText : msg.text}
                {idx === step && typing && <span style={{opacity: 0.6, fontWeight: 400, fontSize: 18, marginLeft: 2}}>|</span>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 