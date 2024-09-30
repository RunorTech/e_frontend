'use client'
// pageContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface PageContextType {
    APIURL: string,
    pageLoad: boolean,
    setPageLoad: (pageLoad: boolean) => void
    setAPIURL: (APIURL: string) => void;
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
    const [APIURL, setAPIURL] = useState<string>('http://localhost:8000/api')
    const [pageLoad, setPageLoad] = useState(false)

  
    return (
      <PageContext.Provider value={{ content, pageLoad, setPageLoad, setContent, APIURL, setAPIURL}}>
        {pageLoad? <div>loading</div> : children }
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
  
  