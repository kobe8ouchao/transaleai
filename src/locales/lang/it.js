export default {
  appName: 'TranAll', // (保留品牌名称)
  startTranslate: 'Start Translate',
  tryItFree: 'Try it Free',
  logout: 'Confirm Logout',
  logoutConfirm: 'Are you sure you want to log out?',
  ok: 'OK',
  cancel: 'Cancel',
  premium: 'Premium',
  basic: 'Basic',
  credits: 'credits',
  creditsDescription: 'Credits are units used to measure document translation volume:',
  creditsChinese: 'Each Chinese character counts as 1 credit',
  creditsEnglish: 'Each English word counts as 1 credit',
  creditsPunctuation: 'Each punctuation mark counts as 1 credit',
  documents: 'Documents',
  noDocuments: 'No Documents',
  hero: {
    title: 'Fast and Accurate Document Translation',
    subtitle: 'Professional multi-language document translation service powered by advanced AI technology',
    watchDemo: 'Watch Demo' // 原"观看演示"翻译
  },
  features: {
    title: 'Powerful Features for All Needs', // "强大的功能满足所有需求"
    subtitle: 'Advanced Tools to Streamline Your Translation Workflow', // "先进的工具让您的翻译工作流程更轻松"
    realtime: {
      title: 'Real-time Translation',
      description: 'Instant translations using our advanced AI technology'
    },
    format: {
      title: 'Format Preservation',
      description: 'Maintain document layout, styles, and formatting during translation'
    },
    accuracy: {
      title: 'AI-Powered Accuracy',
      description: 'Context-aware translations with industry-leading accuracy'
    },
    security: {
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption'
    },
    memory: {
      title: 'Translation Memory',
      description: 'Save and reuse previous translations for consistency'
    },
    languages: {
      title: '100+ Languages',
      description: 'Support for all major languages and regional variants'
    }
  },
  solutions: {
    title: 'Industry-Specific Solutions', // "适合各行业的解决方案"
    subtitle: 'Customized Translation Solutions for Your Needs', // "为您的特定需求定制翻译解决方案"
    business: {
      title: 'Business & Enterprise',
      description: 'Global communication solutions for enterprises'
    },
    academic: {
      title: 'Academic & Research',
      description: 'Translation for scholarly works and papers'
    },
    legal: {
      title: 'Legal & Finance',
      description: 'Precise translation for legal documents'
    },
    creative: {
      title: 'Creative & Marketing',
      description: 'Localization for global campaigns'
    }
  },

  pricing: {
    title: 'Simple & Transparent Pricing',  // "简单透明的定价"
    subtitle: 'Choose the Plan That Best Fits Your Needs',  // "选择最适合您需求的方案"
    getStarted: 'Get Started Now',  // "立即开始"
    alreadySubscribed: 'Already Subscribed',
    basic: {
      name: 'Basic',  // "基础版"
      features: [
        '5,000 words/month',
        'Basic file formats',
        'Email support',
        'Standard translation'
      ]
    },
    professional: {
      name: 'Professional',  // "Professional" (保留原名称)
      features: [
        '50,000 words per month',
        'All file formats',
        'Priority support',
        'Advanced translation'
      ]
    },
    enterprise: {
      name: 'Enterprise',  // "Enterprise" (保留原名称)
      features: [
        'Unlimited words',
        'Custom API access',
        'Primary support',
        'Custom solutions'
      ]
    },
    custom: 'Custom',  // "Customer"修正为正确拼写
    month: '/Month'
  },
  footer: {
    about: 'About Us',
    contact: 'Contact Us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: 'Copyright',
    allRightsReserved: 'All Rights Reserved',
    product: 'Products',
    title: 'Fast and Accurate Document Translation',
    subtitle: 'Professional multilingual document translation service powered by advanced AI technology',
    legal: 'Legal Compliance',
    security: 'Security',
    featrue: 'Features',  // 修正拼写错误 (原"featrue")
    solution: 'Solutions',
    price: 'Pricing',
    update: 'Website Updates',  // "网站更细"修正为"Website Updates"
    company: 'Company',
  },
  login: {
    title: 'Sign in to Your Account',
    subtitle: 'Access your translation workspace',
    email: {
      label: 'Email Address',
      placeholder: 'Enter your email'
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password'
    },
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signIn: 'Sign In',
    orContinueWith: 'Or continue with',
    noAccount: 'Don\'t have an account?',
    signUp: 'Sign up now',
    errors: {
      emailPassword: 'Please enter email and password',
      googleLoginFailed: 'Google sign-in failed',
      loginFailed: 'Invalid credentials, please check and try again',
      popupBlocked: 'Popup blocked. Please allow popups',
      wechatUrlFailed: 'Failed to get WeChat login URL',
      wechatLoginFailed: 'WeChat login failed. Please retry'
    },
    success: 'Sign-in successful!',
    welcome: {
      title: 'Welcome to MultiDoc TranAll',
      subtitle: 'Convert documents across languages with professional precision'
    }
  },
  register: {
    title: 'Create Your Account',
    subtitle: 'Start using our translation services',
    username: {
      label: 'Username',
      placeholder: 'Choose a username'
    },
    email: {
      label: 'Email Address',
      placeholder: 'your@email.com'
    },
    password: {
      label: 'Password',
      placeholder: 'Create a password'
    },
    confirmPassword: {
      label: 'Confirm Password',
      placeholder: 'Re-enter password'
    },
    createAccount: 'Create Account',
    orContinueWith: 'Or continue with',
    haveAccount: 'Already have an account?',
    signIn: 'Sign In',
    errors: {
      emptyFields: 'Please fill all required fields',
      passwordMismatch: 'Passwords do not match',
      registerFailed: 'Registration failed'
    },
    success: 'Account created successfully!',
    welcome: {
      title: 'Join MultiDoc TranAll',
      subtitle: 'Begin your document translation journey'
    }
  },
  addFile: {
    title: 'Start Translating Your Documents',
    subtitle: 'Multiple formats supported, fast and accurate translation',
    dragText: 'Drag and drop files here, or',
    clickText: 'click to upload',
    supportedFormats: 'Supported formats: PDF, Word, Excel, PPT, TXT',
    maxSize: 'Max file size: 50MB',
    sourceLanguage: 'Source Language',
    targetLanguage: 'Target Language',
    autoDetect: 'Auto Detect',
    startTranslation: 'Start Translation',
    errors: {
      fileRequired: 'Please select a file to translate',
      languageRequired: 'Please select target language',
      invalidFormat: 'Unsupported file format',
      fileTooLarge: 'File size exceeds limit',
      uploadFailed: 'File upload failed'
    },
    success: 'File uploaded successfully!'
  },
  fileReader: {
    documents: 'Document List',
    noDocuments: 'No Documents',
    startTranslate: 'Start Translation',
    mdsourceView: 'View Source',
    mdhtmlView: 'View Rendered',
    download: 'Download',
    original: 'Original Text',
    translation: 'Translated Text',
    noFileView: 'No File Available',
    translatingNow: 'Translating Now...',
    invalidFormat: 'Invalid File Format',
    invalidFormatDesc: 'Translation unavailable. Please check the file format.',
    leaveConfirm: {
      title: 'Translation in Progress',
      content: 'The document is being translated. Are you sure you want to leave?',
      ok: 'Confirm',
      cancel: 'Cancel'
    },
    insufficientBalance: {
      title: 'Insufficient Balance',
      content: 'Your credits balance is insufficient. Please recharge to continue.',
      recharge: 'Recharge Now',
      cancel: 'Cancel'
    },
    errors: {
      fetchListFailed: 'Failed to fetch file list',
      fetchFileFailed: 'Failed to fetch file',
      jsonViewFailed: 'Failed to load JSON file',
      downloadFailed: 'Download failed',
      translationFailed: 'Translation failed'
    },
    success: {
      translationStarted: 'Translation started',
      translationExists: 'Translation already exists'
    }
  },
  daysRemaining: "giorni",
  payment: {
    title: "Completa pagamento",
    subtitle: "Scegli il tuo metodo di pagamento preferito",
    orderSummary: "Riepilogo ordine",
    changePlan: "Cambia piano",
    plan: "Piano",
    price: "Prezzo",
    total: "Totale",
    selectMethod: "Seleziona metodo di pagamento",
    alipay: "Alipay",
    creditCard: "Carta di credito",
    wechat: "WeChat Pay",
    payNow: "Paga ora",
    processing: "Elaborazione del pagamento in corso",
    pleaseWait: "Attendere prego, non chiudere questa pagina",
    success: "Pagamento riuscito!",
    thankYou: "Grazie per il tuo acquisto",
    goToAccount: "Vai al mio account",
    scanQrCode: "Scansiona il codice QR per completare il pagamento",
    paymentFailed: "Pagamento fallito",
    tryAgain: "Per favore riprova",
    contactSupport: "Contatta l'assistenza",
    confirmPayment: "Conferma di pagamento",
    confirmPaymentTip: "Completa il pagamento nella finestra appena aperta. Clicca su \"Pagamento completato\" al termine",
    completed: "Pagamento completato",
    notYet: "Non ancora pagato",
    waitingPayment: "Per favore clicca conferma dopo aver completato il pagamento",
    checkFailed: "Verifica dello stato del pagamento fallita",
    createOrderFailed: "Creazione dell'ordine fallita",
    failed: "Pagamento fallito",
    stripeNotLoaded: "Sistema di pagamento non completamente caricato, aggiorna la pagina e riprova",
    enterCardholderName: "Inserisci il nome del titolare della carta",
    enterCardDetail: "Inserisci i dettagli della carta di credito",
    serverError: "Errore del server, riprova più tardi",
    pendingStatus: "Il pagamento è in fase di elaborazione, controlla lo stato dell'ordine più tardi",
    processingError: "Si è verificato un errore durante l'elaborazione del pagamento",
    cardholderNamePlaceholder: "Inserisci il nome come appare sulla carta",
    securePayment: "Tutte le informazioni di pagamento vengono trasmesse tramite crittografia SSL, garantendo la sicurezza del tuo pagamento",
    fetchUserInfoFailed: "Recupero delle informazioni utente fallito, aggiorna la pagina e riprova",
    recharge: "Ricarica",
    alipayTitle: "Pagamento Alipay",
    qrCodeExpire: "Il codice QR scade in 30 minuti",
    waitingForPayment: "In attesa di pagamento...",
    paymentTimeout: "Timeout pagamento, aggiorna la pagina",
    orderId: "ID ordine",
    startUsing: "Inizia a usare",
    vipRestriction: "Gli utenti VIP non possono acquistare il piano base",
    alreadySubscribed: "Sei già membro VIP",
    vipExpires: "Scadenza VIP",
    unlimited: "Illimitato",
    goToHome: "Torna alla home",
    returnToOrder: "Si prega di tornare alla pagina dell'ordine per completare l'acquisto",
    returnToOrderDesc: "Si prega di fare clic sul pulsante qui sotto per tornare alla pagina dell'ordine, quindi fare clic sul pulsante di acquisto per completare il processo di pagamento",
    backToOrder: "Torna alla pagina dell'ordine"
  }
}