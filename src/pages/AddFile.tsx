import { useState, useEffect } from 'react';
import HeaderComponent from '@/component/Header';
import { Upload, Select, message, Progress, Space,Modal } from "antd";
import type { UploadProps, UploadFile } from 'antd/es/upload/interface';  // 添加类型导入
import FooterComponet from '@/component/Footer';
import {
  CloudUploadOutlined,
} from "@ant-design/icons";
import SparkMD5 from 'spark-md5';
import { useLanguage } from '../contexts/LanguageContext';
import { getApiUrl } from '@/config/api';
const languagesArr = [
  {
    value: 'Chinese',
    label: 'Chinese',
    flag: '🇨🇳'
  },
  {
    value: 'English',
    label: 'English',
    flag: '🇺🇸'
  },
  {
    value: 'Spanish',
    label: 'Spanish',
    flag: '🇪🇸'
  },
  {
    value: 'French',
    label: 'French',
    flag: '🇫🇷'
  },
  {
    value: 'German',
    label: 'German',
    flag: '🇩🇪'
  },
  {
    value: 'Italian',
    label: 'Italian',
    flag: '🇮🇹'
  },
  {
    value: 'Portuguese',
    label: 'Portuguese',
    flag: '🇵🇹'
  },
  {
    value: 'Russian',
    label: 'Russian',
    flag: '🇷🇺'
  },
 
  {
    value: 'Japanese',
    label: 'Japanese',
    flag: '🇯🇵'
  },
  {
    value: 'Korean',
    label: 'Korean',
    flag: '🇰🇷'
  },
  {
    value: 'Arabic',
    label: 'Arabic',
    flag: '🇸🇦'
  },
  {
    value: 'Hindi',
    label: 'Hindi',
    flag: '🇮🇳'
  },
  {
    value: 'Dutch',
    label: 'Dutch',
    flag: '🇳🇱'
  },
  {
    value: 'Swedish',
    label: 'Swedish',
    flag: '🇸🇪'
  },
  {
    value: 'Polish',
    label: 'Polish',
    flag: '🇵🇱'
  }
]
function AddFile() {
  const [targetLang, setTargetLang] = useState("");  // 设置默认值为中文
  const [pendingFile, setPendingFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const storedUser = localStorage.getItem('user');
  const { t } = useLanguage();
  if (!storedUser) {
    window.location.href = `/login`
  }
  const userId = JSON.parse(localStorage.getItem('user') || '{}').id;

  useEffect(() => {
  }, []);


 
  // 添加 MD5 计算函数
  const calculateMD5 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => {
        const md5 = SparkMD5.hash(reader.result as string);
        resolve(md5);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // 修改上传部分
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: getApiUrl('/upload'),
    data: { userId, targetLang },
    beforeUpload: async (file: File) => {
      // 获取用户信息并检查 VIP 和 tokens
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      if (Number(userData.vip) !== 1) {
        if (Number(userData.tokens) <= 0) {
          Modal.confirm({
            title: t('addFile.errors.insufficientBalance'),
            content: t('addFile.errors.insufficientBalanceDesc'),
            okText: t('addFile.recharge'),
            cancelText: t('cancel'),
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
            onOk: () => {
              // 跳转到充值页面
              window.location.href = '/recharge';
            }
          });
          return Upload.LIST_IGNORE;
        }
      }
      const isLt50M = file.size / 1024 / 1024 < 50;
      if (!isLt50M) {
        message.error(t('addFile.errors.fileTooLarge'));
        return false;
      }
      if (!targetLang || targetLang.length === 0) {
        message.error(t('addFile.errors.selectTargetLang'));
        setPendingFile(file);
        return false;
      }
      // 检查JSON文件格式
      const fileExtx = file.name.split('.').pop()?.toLowerCase();
      if (fileExtx === 'json') {
        try {
          const text = await file.text();
          JSON.parse(text); // 尝试解析JSON
        } catch (error) {
          message.error(t("addFile.error.jsonError"));
          return Upload.LIST_IGNORE; // 阻止文件被添加到上传列表
        }
      }
      
      // 计算文件 MD5
      const md5 = await calculateMD5(file);
      const fileExt = file.name.split('.').pop();
      const newFileName = `${md5}.${fileExt}`;
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      formData.append('targetLang', targetLang);
      formData.append('size', file.size.toString());
      formData.append('type', fileExt);
      formData.append('originalName', file.name);
      formData.append('md5Name', newFileName);
      
      fetch(getApiUrl('/upload'), {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(() => {
          message.success('upload successfully.');
          window.location.href = `/see?filename=${newFileName}&lang=${targetLang}`;
        })
        .catch(error => {
          message.error(`upload failed: ${error.message}`);
        });

      return false;
    },
    onChange(info: { file: UploadFile; fileList: UploadFile[] }) {
      const { status, percent } = info.file;
      if (status === 'uploading') {
        setUploadProgress(percent || 0);
      }
    },
  };


  const onChange = async (value: string) => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (Number(userData.vip) !== 1) {
      if (Number(userData.tokens) <= 0) {
        Modal.confirm({
          title: t('addFile.errors.insufficientBalance'),
          content: t('addFile.errors.insufficientBalanceDesc'),
          okText: t('addFile.recharge'),
          cancelText: t('cancel'),
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
          onOk: () => {
            // 跳转到充值页面
            window.location.href = '/recharge';
          }
        });
        return;
      }
    }
    if (pendingFile) {
      // 检查JSON文件格式
      const fileExtx = pendingFile.name.split('.').pop()?.toLowerCase();
      if (fileExtx === 'json') {
        try {
          const text = await pendingFile.text();
          JSON.parse(text); // 尝试解析JSON
        } catch (error) {
          message.error('JSON格式不正确，请检查后重新上传');
          setPendingFile(null);
          return;
        }
      }
      pendingFile.status = 'uploading';
      const formData = new FormData();
      // formData.append('files[]', pendingFile as FileType);
      const md5 = await calculateMD5(pendingFile);
      const fileExt = pendingFile.name.split('.').pop();
      const newFileName = `${md5}.${fileExt}`;
      formData.append('file', pendingFile);
      formData.append('userId', userId);
      formData.append('targetLang', value);
      formData.append('size', pendingFile.size.toString());
      formData.append('type', fileExt);
      formData.append('originalName', pendingFile.name);
      formData.append('md5Name', newFileName);
      // You can use any AJAX library you like
      fetch(getApiUrl('/upload'), {
        method: 'POST',
        body: formData,
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(() => {
          console.log(pendingFile);
          message.success(t('adddFile.success'));
          window.location.href = `/see?filename=${newFileName}&lang=${value}`;
        })
        .catch(error => {
          console.error('Error:', error);
          message.error(`upload failed: ${error.message}`);
        })
        .finally(() => {
          setPendingFile(null);
        }); 
    }
    setTargetLang(value);
  };


  return (
    <div className="min-h-screen bg-white">
       <style>
        {`
          .custom-upload-dragger:hover {
            border-color: #1D2939 !important;
          }
        `}
      </style>
      <HeaderComponent />
      <main className="max-w-7xl mx-auto px-4 py-32">  {/* 将 py-8 改为 py-16 增加上下间距 */}
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="border-b border-gray-100 pb-6 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#1D2939]">
              {t('addFile.title')}
              </h2>
              <div className="flex items-center space-x-3">
                <span className="text-[#1D2939]">{t('addFile.targetLanguage')}:</span>
               
                                <Select
                                  value={targetLang}
                                  onChange={onChange}
                                  options={languagesArr}
                                  className="w-64"
                                  placeholder="Select language"
                                  optionLabelProp="label"
                                  optionRender={(option) => (
                                    <Space>
                                      <span role="img" aria-label={option.data.label}>
                                        {option.data.flag}
                                      </span>
                                      {option.data.label}
                                    </Space>
                                  )}
                                  // 添加自定义选中值的渲染
                                  suffixIcon={null}
                                  labelRender={(labelInfo) => {
                                    const selectedOption = languagesArr.find(item => item.value === labelInfo.value);
                                    return selectedOption ? (
                                      <Space>
                                        <span role="img" aria-label={selectedOption.label}>
                                          {selectedOption.flag}
                                        </span>
                                        {selectedOption.label}
                                      </Space>
                                    ) : labelInfo.label;
                                  }}
                                />
              </div>
            </div>
          </div>
          <div className="w-full ">
            <Upload.Dragger
              accept=".doc,.docx,.pdf,.xlsx,.pptx,.txt,.json,.md"
              showUploadList={true}
              {...props}
              className="bg-[#fafafa]  rounded-xl hover:border-gray-900 transition-all duration-300"
            >
              <div className="x-6 py-12"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudUploadOutlined className="text-3xl text-gray-600" />
                </div>
                <div className="text-center max-w-md mx-auto">
                  <p className="text-[#1D2939] text-lg font-medium mb-2">
                  {t('addFile.dragText')} {t('addFile.clickText')}
                  </p>
                  <p className="text-gray-500 text-sm">
                  {t('addFile.supportedFormats')}, {t('addFile.maxSize')}
                  </p>
                </div>
              </div>
            </Upload.Dragger>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-6">
                <Progress
                  percent={uploadProgress}
                  status="active"
                  strokeColor={{
                    "0%": "#10a37f",
                    "100%": "#0e906f",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <FooterComponet />
    </div>
      
  );
}



export default AddFile;
