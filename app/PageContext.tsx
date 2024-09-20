'use client'
// pageContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface PageContextType {
    content: ReactNode | null;
    setContent: (content: ReactNode | null) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
    children: ReactNode;
  }

// Create a provider component
export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    const [content, setContent] = useState<ReactNode | null>(<div>Loading...</div>);

  
    return (
      <PageContext.Provider value={{ content, setContent }}>
        {children}
      </PageContext.Provider>
    );
  };

  // Custom hook to use the context
export const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };
  