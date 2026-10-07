import React from 'react';

export function SimpleMarkdown({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  
  let currentList: React.ReactNode[] = [];
  
  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-ink-2">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Process bold text roughly
    const parseBold = (text: string) => {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, index) => {
        if (index % 2 === 1) return <strong key={index} className="font-semibold">{part}</strong>;
        return part;
      });
    };

    if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={i} className="text-xl font-medium text-ink mt-8 mb-4">{parseBold(line.slice(4))}</h3>);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={i} className="text-2xl font-semibold text-ink mt-12 mb-6">{parseBold(line.slice(3))}</h2>);
    } else if (line.startsWith('- ')) {
      currentList.push(<li key={i} className="text-ink-2">{parseBold(line.slice(2))}</li>);
    } else if (line.match(/^\d+\.\s/)) {
      currentList.push(<li key={i} className="text-ink-2">{parseBold(line.replace(/^\d+\.\s/, ''))}</li>);
    } else if (line.trim() !== '') {
      flushList();
      elements.push(<p key={i} className="text-ink-2 leading-relaxed mb-6">{parseBold(line)}</p>);
    } else {
      flushList();
    }
  }
  
  flushList();

  return <>{elements}</>;
}
