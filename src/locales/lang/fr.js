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
    tokens: 'tokens',
    tokensDescription: 'Tokens are units used to measure document translation volume:',
    tokensChinese: 'Each Chinese character counts as 1 token',
    tokensEnglish: 'Each English word counts as 1 token',
    tokensPunctuation: 'Each punctuation mark counts as 1 token',
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
        product:'Products',
        title: 'Fast and Accurate Document Translation',
        subtitle: 'Professional multilingual document translation service powered by advanced AI technology',
        legal:'Legal Compliance',
        security:'Security',
        featrue:'Features',  // 修正拼写错误 (原"featrue")
        solution:'Solutions',
        price:'Pricing',
        update:'Website Updates',  // "网站更细"修正为"Website Updates"
        company:'Company',
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
          content: 'Your tokens balance is insufficient. Please recharge to continue.',
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
      daysRemaining: "jours",
payment: {
  title: "Finaliser le paiement",
  subtitle: "Choisissez votre mode de paiement préféré",
  orderSummary: "Récapitulatif de la commande",
  changePlan: "Modifier le forfait",
  plan: "Forfait",
  price: "Prix",
  total: "Total",
  selectMethod: "Sélectionner un mode de paiement",
  alipay: "Alipay",
  creditCard: "Carte de crédit",
  wechat: "WeChat Pay",
  payNow: "Payer maintenant",
  processing: "Traitement de votre paiement",
  pleaseWait: "Veuillez patienter, ne fermez pas cette page",
  success: "Paiement réussi !",
  thankYou: "Merci pour votre achat",
  goToAccount: "Accéder à mon compte",
  scanQrCode: "Scannez le code QR pour finaliser le paiement",
  paymentFailed: "Échec du paiement",
  tryAgain: "Veuillez réessayer",
  contactSupport: "Contacter le support",
  confirmPayment: "Confirmation de paiement",
  confirmPaymentTip: "Veuillez compléter le paiement dans la fenêtre nouvellement ouverte. Cliquez sur \"Paiement effectué\" après avoir terminé",
  completed: "Paiement effectué",
  notYet: "Pas encore payé",
  waitingPayment: "Veuillez cliquer sur confirmer après avoir effectué le paiement",
  checkFailed: "Échec de la vérification du statut de paiement",
  createOrderFailed: "Échec de la création de la commande",
  failed: "Échec du paiement",
  stripeNotLoaded: "Le système de paiement n'est pas entièrement chargé, veuillez rafraîchir la page et réessayer",
  enterCardholderName: "Veuillez saisir le nom du titulaire de la carte",
  enterCardDetail: "Veuillez saisir les informations de carte de crédit",
  serverError: "Erreur serveur, veuillez réessayer plus tard",
  pendingStatus: "Le paiement est en cours de traitement, veuillez vérifier l'état de la commande ultérieurement",
  processingError: "Une erreur s'est produite lors du traitement du paiement",
  cardholderNamePlaceholder: "Saisissez le nom tel qu'il apparaît sur la carte",
  securePayment: "Toutes les informations de paiement sont transmises via un cryptage SSL, garantissant la sécurité de votre paiement",
  fetchUserInfoFailed: "Échec de la récupération des informations utilisateur, veuillez rafraîchir la page et réessayer",
  recharge: "Recharger",
}
    }