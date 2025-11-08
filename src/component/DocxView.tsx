import React, { useRef, useEffect } from 'react';
import { renderAsync } from 'docx-preview';
import styled from 'styled-components';

// 使用 styled-components 创建一个自定义的容器
const DocContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;

  /* 移除默认的边框和阴影 */
  .docx-wrapper {
    box-shadow: none !important;
    border: none !important;
  }

  /* 移除背景色 */
  .docx {
    background-color: transparent !important;
  }

  /* 调整页面样式 */
  .docx .page {
    background-color: white;
    margin: 0 auto;
    padding: 20px;
    box-shadow: none !important;
  }

  /* 如果需要，可以在这里添加更多自定义样式 */
`;

const DocxViewer = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        await renderAsync(blob, containerRef.current, null, {
          className: 'docx',
          inWrapper: false,
          ignoreWidth: true,
          ignoreHeight: true,
          ignoreFonts: false,
          breakPages: true,
          ignoreLastRenderedPageBreak: true,
          experimental: false,
          trimXmlDeclaration: true,
          debug: false
        });
      } catch (error) {
        console.error('Error loading or rendering document:', error);
      }
    };

    loadDocx();
  }, [url]);

  return <DocContainer ref={containerRef} />;
};

export default DocxViewer;