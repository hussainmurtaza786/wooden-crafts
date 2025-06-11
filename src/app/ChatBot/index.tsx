'use client';
import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const isLoaded = (src: string) => {
      return !!document.querySelector(`script[src="${src}"]`);
    };

    const injectScript = (src: string) => {
      if (isLoaded(src)) return;

      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
    };

    injectScript("https://cdn.botpress.cloud/webchat/v3.0/inject.js");
    injectScript("https://files.bpcontent.cloud/2025/06/11/09/20250611092526-K079K47U.js");
  }, []);

  return null;
};

export default ChatBot;
