// 声明一个全局接口，扩展了 Window 对象
declare global {
  interface Window {
    // 声明 gtag 是一个函数，接受任意数量的参数，并且没有返回值 (void)
    gtag: (...args: any[]) => void;
  }
}

// 确保这是一个模块文件，防止 TS 报错
export {};
