import { useEffect, useRef, useState } from 'react';
import {  Spin, message,  Button ,Flex,Tooltip,Progress, Modal} from 'antd';
import { useLocation } from 'react-router-dom';
import HeaderComponent from '@/component/Header';
import { Document, Page, pdfjs } from 'react-pdf';
import DocxViewer from '@/component/DocxView';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  ReloadOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileExcelOutlined,
  FilePptOutlined,
  FileMarkdownOutlined,
} from "@ant-design/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import {useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../contexts/LanguageContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const getLangFlag = (lang: string) => {
  const langMap = {
    'English': '🇺🇸 English',
    'Chinese': '🇨🇳 中文',
    'Japanese': '🇯🇵 日本語',
    'korea': '🇰🇷 한국어',
    'French': '🇫🇷 Français',
    'German': '🇩🇪 Deutsch',
    'Spanish': '🇪🇸 Español',
    'Italian': '🇮🇹 Italiano',
    'Russian': '🇷🇺 Русский',
    'Portuguese': '🇵🇹 Português',
  };
  return langMap[lang] || lang;
};
// 添加 MarkdownViewer 组件
// 修改 MarkdownViewer 组件
const MarkdownViewer = ({ fileUrl, loading }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const [showSource, setShowSource] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (fileUrl && !loading) {
      fetch(fileUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load markdown file');
          }
          return response.text();
        })
        .then(text => {
          setContent(text);
          setError(false);
        })
        .catch(err => {
          console.error('Error loading markdown file:', err);
          setError(true);
        });
    }
  }, [fileUrl, loading]);

  return (
    <div className="w-full h-full overflow-y-auto" ref={containerRef}>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin tip="Loading..." />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-red-500 mb-4">Markdown {t("fileReader.errors.fetchFileFailed")}</p>
          <Button 
            onClick={() => window.location.reload()}
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              color: '#000000'
            }}
            icon={<ReloadOutlined />}
          >
            重新加载
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto">
          <div className="flex justify-end p-2 border-b border-gray-100">
            <Button 
              type="text"
              onClick={() => setShowSource(!showSource)}
              className="text-gray-600 hover:text-gray-900"
            >
              {showSource ? t('fileReader.mdsourceView') : t('fileReader.mdhtmlView')}
            </Button>
          </div>
          
          {showSource ? (
            <div className="p-6 prose max-w-none w-full overflow-x-auto">
              {/* <div className="w-full overflow-x-auto" style={{ maxWidth: '100%' }}> */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 h-full overflow-y-auto whitespace-pre-wrap">
          {content}
        </div>
                {/* <SyntaxHighlighter 
                  language="markdown" 
                  style={tomorrow}
                  customStyle={{ 
                    margin: 0, 
                    borderRadius: '0.375rem', 
                    width: '100%',
                    maxWidth: '100%',
                  }}
                  showLineNumbers={true}
                  wrapLines={false}
                  wrapLongLines={false}
                >
                  {content}
                </SyntaxHighlighter> */}
              {/* </div> */}
            </div>
          ) : (
            
            <div className="p-6 prose max-w-none w-full overflow-x-auto">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code: ({node, className, children, ...props}) => {
                        console.log(node)
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                          <div className="w-full overflow-x-auto">
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              customStyle={{ width: '100%' }}
                              wrapLines={false}
                              wrapLongLines={false}
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                      h1: ({...props}) => <h1 style={{fontSize: '2em', fontWeight: 'bold', marginTop: '0.67em', marginBottom: '0.67em'}} {...props} />,
                      h2: ({ ...props}) => <h2 style={{fontSize: '1.5em', fontWeight: 'bold', marginTop: '0.83em', marginBottom: '0.83em'}} {...props} />,
                      h3: ({ ...props}) => <h3 style={{fontSize: '1.17em', fontWeight: 'bold', marginTop: '1em', marginBottom: '1em'}} {...props} />,
                      h4: ({ ...props}) => <h4 style={{fontSize: '1em', fontWeight: 'bold', marginTop: '1.33em', marginBottom: '1.33em'}} {...props} />,
                      h5: ({ ...props}) => <h5 style={{fontSize: '0.83em', fontWeight: 'bold', marginTop: '1.67em', marginBottom: '1.67em'}} {...props} />,
                      h6: ({ ...props}) => <h6 style={{fontSize: '0.67em', fontWeight: 'bold', marginTop: '2.33em', marginBottom: '2.33em'}} {...props} />,
                      p: ({...props}) => <p style={{marginTop: '1em', marginBottom: '1em'}} {...props} />,
                      ul: ({ ...props}) => <ul style={{paddingLeft: '2em', marginTop: '1em', marginBottom: '1em', listStyleType: 'disc'}} {...props} />,
                      ol: ({ ...props}) => <ol style={{paddingLeft: '2em', marginTop: '1em', marginBottom: '1em', listStyleType: 'decimal'}} {...props} />,
                      li: ({ ...props}) => <li style={{display: 'list-item'}} {...props} />,
                      blockquote: ({ ...props}) => <blockquote style={{borderLeft: '4px solid #ddd', paddingLeft: '1em', marginLeft: '0', marginRight: '0'}} {...props} />,
                      table: ({ ...props}) => (
                        <div className="w-full overflow-x-auto">
                          <table style={{borderCollapse: 'collapse', width: '100%'}} {...props} />
                        </div>
                      ),
                      th: ({...props}) => <th style={{border: '1px solid #ddd', padding: '0.5em', textAlign: 'left', fontWeight: 'bold'}} {...props} />,
                      td: ({...props}) => <td style={{border: '1px solid #ddd', padding: '0.5em', textAlign: 'left'}} {...props} />,
                      a: ({...props}) => <a style={{color: '#0366d6', textDecoration: 'none'}} {...props} />,
                      img: ({ ...props}) => <img style={{maxWidth: '100%'}} {...props} />,
                      // 添加对 emoji 的支持
                      em: ({ ...props}) => <em style={{fontStyle: 'italic'}} {...props} />,
                      strong: ({ ...props}) => <strong style={{fontWeight: 'bold'}} {...props} />,
                      // 确保 emoji 能够正确显示
                      text: ({...props}) => {
                        // 处理文本节点，确保 emoji 能够正确渲染
                        return <span>{props.children}</span>;
                      }
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
          )}
        </div>
      )}
    </div>
  );
};

// 修改 JSONViewer 组件
const JSONViewer = ({ fileUrl, loading }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (fileUrl && !loading) {
      fetch(fileUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load JSON file');
          }
          return response.text();
        })
        .then(text => {
          try {
            // 尝试解析 JSON 以确保它是有效的
            JSON.parse(text);
            setContent(text);
            setError(false);
          } catch (e) {
            console.error('Invalid JSON:', e);
            setError(true);
          }
        })
        .catch(err => {
          console.error('Error loading JSON file:', err);
          setError(true);
        });
    }
  }, [fileUrl, loading]);

  return (
    <div className="w-full h-full overflow-y-auto" ref={containerRef}>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin tip="Loading..." />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-red-500 mb-4">{t("fileReader.errors.jsonViewFailed")}</p>
          <Button 
            onClick={() => window.location.reload()}
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              color: '#000000'
            }}
            icon={<ReloadOutlined />}
          >
            重新加载
          </Button>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg border border-gray-200 h-full overflow-y-auto w-full">
          <div className="w-full overflow-x-auto">
            <SyntaxHighlighter 
              language="json" 
              style={tomorrow}
              customStyle={{ 
                margin: 0, 
                borderRadius: '0.375rem', 
                width: '100%'
              }}
              showLineNumbers={true}
              wrapLines={false}
              wrapLongLines={false}
            >
              {content}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};


const PDFViewer = ({ fileUrl, loading }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(false);
  const [key, setKey] = useState(0); 
  const [scale, setScale] = useState(0.8); // 设置一个默认缩放比例
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setError(false);
    setNumPages(numPages);
    // 在文档加载成功后调整缩放比例
    setTimeout(adjustScale, 100); // 延迟一点时间确保DOM已更新
  }

  function onDocumentLoadError() {
    setError(true);
  }

  // 改进调整缩放比例的函数
  const adjustScale = () => {
    if (containerRef.current) {
      // 获取容器宽度，减去一些边距
      const containerWidth = containerRef.current.offsetWidth - 40;
      // 设置一个合适的缩放比例，确保PDF不会超出容器宽度
      // 标准PDF宽度通常为595pt，但我们使用一个更保守的值
      const newScale = Math.min(containerWidth / 100, 1);
      setScale(newScale);
    }
  };

  // 添加窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      adjustScale();
    };

    window.addEventListener('resize', handleResize);
    // 组件挂载后也调用一次
    adjustScale();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRetry = () => {
    setError(false);
    // 强制重新渲染 Document 组件
    setKey(prevKey => prevKey + 1);
  };

  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    window.location.href = `/login`
  }

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto" ref={containerRef}>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin tip="Loading..." />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-red-500 mb-4">文档加载失败</p>
          <Button 
            onClick={handleRetry}
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              color: '#000000'
            }}
            icon={<ReloadOutlined />}
          >
            重新加载
          </Button>
        </div>
      ) : (
        <Document
          key={key}
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="pdf-document"
        >
          {Array.from(new Array(numPages), ( _el, index) => (
            <Page 
              key={`page_${index + 1}`} 
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="mb-4"
              scale={scale}
              width={containerRef.current ? containerRef.current.offsetWidth - 40 : undefined}
            />
          ))}
        </Document>
      )}
    </div>
  );
};

const WordViewer = ({ fileUrl, loading }) => {
  return (
    <Flex className="w-full h-full" style={{ overflow: 'hidden' }} >
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin tip="Loading..." />
        </div>
      ) : (
        <DocxViewer url={fileUrl} />
      )}
    </Flex>
  );
};

// 添加 TxtViewer 组件
const TxtViewer = ({ fileUrl, loading }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (fileUrl && !loading) {
      fetch(fileUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load text file');
          }
          return response.text();
        })
        .then(text => {
          setContent(text);
          setError(false);
        })
        .catch(err => {
          console.error('Error loading text file:', err);
          setError(true);
        });
    }
  }, [fileUrl, loading]);

  return (
    <div className="w-full h-full overflow-y-auto">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin tip="Loading..." />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-red-500 mb-4">文本文件加载失败</p>
          <Button 
            onClick={() => window.location.reload()}
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: '#000000',
              color: '#000000'
            }}
            icon={<ReloadOutlined />}
          >
            重新加载
          </Button>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg border border-gray-200 h-full overflow-y-auto whitespace-pre-wrap">
          {content}
        </div>
      )}
    </div>
  );
};

// 在 FileReader 组件中添加一个获取图标的函数
function FileReader() {
  const [sourceFileUrl, setSourceFileUrl] = useState(null);
  const [translatedFileUrl, setTranslatedFileUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(-1);
  const [fileType, setFileType] = useState(null);
  const query = useQuery();
  const filename = query.get("filename");
  const lang = query.get("lang");

  const [collapsed, setCollapsed] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
  const { t } = useLanguage();
  // 添加获取文件图标的函数
  const getFileIcon = (fileType) => {
    const type = fileType?.toLowerCase();
    switch (type) {
      case 'pdf':
        return <FilePdfOutlined className="text-2xl text-red-600" />;
      case 'doc':
      case 'docx':
        return <FileWordOutlined className="text-2xl text-blue-600" />;
      case 'xls':
      case 'xlsx':
        return <FileExcelOutlined className="text-2xl text-green-600" />;
      case 'ppt':
      case 'pptx':
        return <FilePptOutlined className="text-2xl text-orange-600" />;
      case 'md':
      case 'markdown':
        return <FileMarkdownOutlined className="text-2xl text-purple-600" />;
      case 'txt':
        return <FileTextOutlined className="text-2xl text-gray-600" />;
      case 'json':
        return <FileTextOutlined className="text-2xl text-yellow-600" />;
      default:
        return <FileTextOutlined className="text-2xl text-gray-600" />;
    }
  };
  // 添加离开确认函数
  
  const handleBeforeAction = (callback) => {
    if (progress >=0 && progress < 100) {
      Modal.confirm({
        title: t('fileReader.leaveConfirm.title'),
      content: t('fileReader.leaveConfirm.content'),
      okText: t('fileReader.leaveConfirm.ok'),
      cancelText: t('fileReader.leaveConfirm.cancel'),
        okButtonProps: {
          style: { 
            backgroundColor: '#000000', 
            borderColor: '#000000' 
          }
        },
        cancelButtonProps: {
          style: { 
            borderColor: '#000000',
            color: '#000000'
          }
        },
        className: '!rounded-lg',
        onOk: () => {
          callback();
        }
      });
    } else {
      callback();
    }
  };
  // 添加获取文件列表的函数
  const fetchFileList = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
      console.log(localStorage.getItem('user'))
      const response = await fetch('/api/user/files', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });
      if (response.status != 200) {
        message.error(t("fileReader.errors.fetchListFailed"));
        return;
      }
      const data = await response.json();
      console.log(data);
      if (data.files) {
        // 修改文件列表格式化部分
        const formattedFiles = data.files.map((file, index) => ({
          id: index,
          name:file.name,
          title: file.origin_name?file.origin_name:"Docment",
          type: file.name.split('.').pop().toUpperCase(),
          size: (() => {
            const bytes = file.size;
            if (bytes >= 1024 * 1024 * 1024) {
              return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
            } else if (bytes >= 1024 * 1024) {
              return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
            } else if (bytes >= 1024) {
              return `${(bytes / 1024).toFixed(1)} KB`;
            }
            return `${bytes} Bytes`;
          })(),
          lastViewed: (file.updated_at),
          lang:file.lang,
          content: "",
          sourceurl:file.url,
          translation: `translated_${lang}_${file.name}`
        }));
        setFileList(formattedFiles);
        // if(formattedFiles.length > 0) {
        //   setSelectedDoc(0);
        //   fetchFileContent(formattedFiles[0].lang,formattedFiles[0].title,"1");
        // }
      } else {
        setFileList([]);
      }
    } catch (error) {
      console.error('Error fetching file list:', error);
      message.error(t("fileReader.errors.fetchListFailed"));
    }
  };

  const fetchFileContent = async (_lang: string,filename: string,source:string,userId:string) => {
    if (source === "1") {
      if (sourceFileUrl) {
        URL.revokeObjectURL(sourceFileUrl);
        setSourceFileUrl(null);
      }
    } else {
      if (translatedFileUrl) {
        URL.revokeObjectURL(translatedFileUrl);
        setTranslatedFileUrl(null);
      }
    } 
    setLoading(true);
    fetch(`/api/files/${userId}/${filename}`)
      .then(response => {
        console.log(response)
        // 在加载新文件前先清理旧的资源
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        const fileExtension = filename.split('.').pop()?.toLowerCase();
        setFileType(null);
        if (contentType.includes('pdf')) {
          setFileType('pdf');
        } else if (contentType.includes('msword') || contentType.includes('officedocument.wordprocessingml')) {
          setFileType('word');
        } else if (contentType.includes('text/plain') || fileExtension === 'txt') {
          setFileType('txt');
        } else if (contentType.includes('application/json') || fileExtension === 'json') {
          setFileType('json');
        } else if (contentType.includes('text/markdown') || fileExtension === 'md' || fileExtension === 'markdown') {
          setFileType('markdown');
        } else {
          // 尝试根据文件扩展名判断
          if (fileExtension === 'md' || fileExtension === 'markdown') {
            setFileType('markdown');
          } else if (fileExtension === 'json') {
            setFileType('json');
          } else {
            throw new Error('Unsupported file type');
          }
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        if(source == "1") {
          console.log("source",url)
          setSourceFileUrl(url);
        }else{
          console.log("translate",url)
          setTranslatedFileUrl(url);
        }    
        setLoading(false);
      })
      .catch(e => {
        console.error("Error fetching file:", e);
        message.error(t("fileReader.errors.fetchListFailed"));
        setLoading(false);
      });
      
    // handleTranslate();
  };
 
  // 在组件加载时获取文件列表
  useEffect(() => {
    fetchFileList();
    updateUserTokens();
    if (filename && lang) {
      fetchFileContent(lang,filename,"1",userId)
      setProgress(0);
      handleTranslate();
    }
  }, [filename, lang, userId]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (progress >= 0 && progress < 100) {
        e.preventDefault();
        e.returnValue = 'Document is being translated. Are you sure you want to leave?';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [progress]);

  useEffect(() => {
    if (progress !== -2 && progress < 100 && progress >= 0 ) {
      const interval = setInterval(() => {
        fetch(`/api/progress/${filename}`)
          .then(response => response.json())
          .then(data => {
            setProgress(data.progress);
            if(progress == -2) {
              setLoading(false);
              clearInterval(interval);
              return
            }
            if (data.progress >= 100) {
              fetchFileContent(lang,`translated_${lang}_${filename}`,"2",userId)
              setLoading(false);
              clearInterval(interval);
              updateUserTokens();
            }
          })
          .catch(error => {
            console.error('Error fetching progress:', error);
            clearInterval(interval);
          });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [filename, lang, progress]);


  // 修改右侧翻译视图区域的渲染部分
  // 在 return 语句中找到以下部分并修改
  const handleTranslate = () => {
    if (progress === -2) {
      message.error(t("fileReader.invalidFormatDesc"));
      return;
    }
    const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
    fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, lang ,userId})
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Translation started') {
          message.success(t("fileReader.success.translationStarted"));
        }else if(data.message === 'Translation already exists') {
          message.success(t("fileReader.success.translationExists"));
          setProgress(-1)
          fetchFileContent(lang,"translated_"+lang+"_"+filename,"2",userId )
        }else{
          message.error(t("fileReader.errors.translationFailed"));
        }

      })
      .catch(error => {
        console.error('Error starting translation:', error);
        message.error(t("fileReader.errors.translationFailed"));
      });
  };
  // 添加更新用户 tokens 的函数
  const updateUserTokens = async () => {
    try {
      const response = await fetch('/api/user/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });
      
      if (response.ok) {
        const data = await response.json();
        // 更新本地存储的用户信息
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        currentUser.tokens = data.data.tokens;
        console.log("updateUserInfo",data)
        localStorage.setItem('user', JSON.stringify(currentUser));
        const updateEvent = new CustomEvent('updateUserInfo', { 
          detail: { tokens: data.data.tokens } 
        });
        window.dispatchEvent(updateEvent);
      } else {
        console.error('Failed to update tokens');
      }
    } catch (error) {
      console.error('Error updating tokens:', error);
    }
  };

  const handleDownload = (url, fileName) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Download error:', error);
        message.error(t("fileReader.errors.downloadFailed"));
      });
  };

  const FileViewerComponent = 
      fileType === 'pdf' ? PDFViewer : 
      fileType === 'word' ? WordViewer : 
      fileType === 'txt' ? TxtViewer : 
      fileType === 'markdown' ? MarkdownViewer :
      fileType === 'json' ? JSONViewer :
      PDFViewer;

  // 在组件卸载时清理资源
  useEffect(() => {
    return () => {
      // 清理所有创建的 URL 对象
      if (sourceFileUrl) {
        URL.revokeObjectURL(sourceFileUrl);
      }
      if (translatedFileUrl) {
        URL.revokeObjectURL(translatedFileUrl);
      }
    };
  }, []); 

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50">
        <HeaderComponent />
        <div className="flex-1 pt-16 flex">
      {/* Document List Sidebar */}
          <div
            className={`fixed left-0 top-20 h-[calc(100vh-64px)] bg-white border-r border-gray-100 transition-all duration-300 flex flex-col ${
              collapsed ? "w-[60px]" : "w-[300px]"
            }`}
          >
            {/* Sidebar Header */}
            <div className="h-16 border-b border-gray-100 flex items-center justify-between px-4">
              {!collapsed && (
                <h2 className="text-lg font-semibold text-gray-800">{t("fileReader.documents")}</h2>
              )}
              <Button
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="!rounded-button"
                type="text"
              />
            </div>
            {/* Document List */}
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
            
            {!collapsed && fileList.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <FileTextOutlined className="text-2xl text-gray-300 mb-4" />
                    <p className="text-gray-500">{t("fileReader.noDocuments")}</p>
                    <Button
                        style={{ 
                          backgroundColor: "#000000", 
                          borderColor: "#000000",
                          marginTop:10,
                        }}
                        className="!rounded-button !text-white ant-btn-black"
                        onClick={() => handleBeforeAction(() => navigate('/add'))}
                      >
                        {t("fileReader.startTranslate")}
                      </Button>
                  </div>
                 
                </div>
              ) :(<></>)}
              {fileList.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`p-4 border-b border-gray-50 cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedDoc === index ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    handleBeforeAction(() => {
                      setSelectedDoc(index)
                      setProgress(-1)
                      fetchFileContent(doc.lang,doc.name,"1",userId)
                      fetchFileContent(doc.lang,"translated_"+doc.lang+"_"+doc.name,"2",userId)
                    }) 
                  }}
                >
                  {collapsed ? (
                    <Tooltip title={doc.title} placement="right">
                      <div className="flex justify-center">
                        <FileTextOutlined className="text-xl text-gray-600" />
                      </div>
                    </Tooltip>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileTextOutlined className="text-gray-600" />
                          <span className="font-medium text-gray-800 truncate max-w-[180px]">
                            {doc.title}
                          </span>
                          <span className="text-sm text-gray-500">{getLangFlag(doc.lang)}</span>
                        </div>
                        {/* <Button
                          type="text"
                  
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="!rounded-button"
                        /> */}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <span 
                            className={`w-2 h-2 rounded-full ${
                              doc.type === 'PDF' ? 'bg-red-500' :
                              doc.type === 'DOC' || doc.type === 'DOCX' ? 'bg-blue-500' :
                              doc.type === 'XLS' || doc.type === 'XLSX' ? 'bg-green-500' :
                              doc.type === 'MD' || doc.type === 'MARKDOWN' ? 'bg-purple-500' :
                              doc.type === 'JSON' ? 'bg-yellow-500' :
                              doc.type === 'TXT' ? 'bg-gray-500' :
                              'bg-gray-400'
                            }`}
                          />
                          <span>{doc.type}</span>
                        </span>
                        <span>{doc.size}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <ClockCircleOutlined />
                        <span>{doc.lastViewed}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {!collapsed && (
              <div className="absolute bottom-8 left-0 right-0 p-4 border-t border-gray-100 bg-white">
                <Button
                  style={{ 
                    backgroundColor: "#000000", 
                    borderColor: "#000000",
                  }}
                  className="!rounded-button !text-white ant-btn-black w-full"
                  onClick={() =>{
                    handleBeforeAction(()=>{
                    navigate('/add')
                  })} }
                >
                   {t('fileReader.startTranslate')}
                </Button>
              </div>
            )}
            </div>
           
            
          </div>
          <div
          className={`flex-1 transition-all duration-300 ${collapsed ? "ml-[60px]" : "ml-[320px]"}`}
        >
          <div className="min-h-[calc(100vh-64px)] p-6">
            <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden">
              {/* Document Header */}
              <div className="border-b border-gray-100 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {fileList[selectedDoc] ? 
                      getFileIcon(fileList[selectedDoc]?.type) : 
                      <FileTextOutlined className="text-2xl text-gray-600" />
                    }
                    <h1 className="text-xl font-semibold text-gray-800">
                      {fileList[selectedDoc]?.title || 'No document selected'}
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      icon={<DownloadOutlined />}
                      className="!rounded-button"
                      onClick={() => handleBeforeAction(() => {
                        handleDownload(translatedFileUrl,fileList[selectedDoc]?.title)
                      } )}   
                    >
                      {t('fileReader.download')}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Document Content */}
              <div className="flex h-[calc(100vh-10px)] overflow-hidden">
                <div className="w-1/2 p-6 border-r border-gray-100 overflow-hidden">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                    {t('fileReader.original')}
                    </h3>
                  </div>
                  <div className={`h-[calc(100%-32px)] ${fileType !== 'word' ? 'overflow-auto' : ''}`}>
                    {sourceFileUrl ? (
                      <div key={`source-${fileType}`}>
                      <FileViewerComponent fileUrl={sourceFileUrl} loading={loading} />
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <FileTextOutlined className="text-4xl text-gray-300 mb-4" />
                          <p className="text-gray-500">{t('fileReader.noFileView')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-6 overflow-hidden">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                    {t('fileReader.translation')}
                    </h3>
                  </div>
                  <div className={`h-[calc(100%-32px)] ${fileType !== 'word' ? 'overflow-auto' : ''}`}>
                    {translatedFileUrl && (progress === 100 || progress === -1) ? (
                      <div key={`translated-${fileType}`}>
                      <FileViewerComponent fileUrl={translatedFileUrl} loading={loading} />
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center w-full px-20">
                          <FileTextOutlined className="text-4xl text-gray-300 mb-4" />
                          {progress === -2 ? (
                            <>
                              <p className="text-red-500 mb-2">文件格式无效</p>
                              <p className="text-gray-500">{t('fileReader.invalidFormat')}</p>
                            </>
                          ) : progress >= 0 ? (
                            <>
                              <Progress 
                                percent={Number(progress.toFixed(1))}
                                status="active"
                                strokeColor={{
                                  '0%': '#52c41a',
                                  '100%': '#52c41a'
                                }}
                              />
                              <p className="text-gray-500 mt-4">{t('fileReader.translatingNow')}</p>
                            </>
                          ) : (
                            <>
                             <p className="text-gray-500">{t('fileReader.noFileView')}</p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
    </div>
    
    </>

  );
}

export default FileReader;