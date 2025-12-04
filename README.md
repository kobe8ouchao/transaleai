<div align="center">
  <a href="https://translates.cc/" target="_blank"><img width="460" height="460" alt="t_logo" src="https://github.com/user-attachments/assets/7b34c9c2-e92b-4867-a742-7d43166cbef2" /></a>
</div>

# TranslateAI - Format-Preserving Document Translation

[](https://translates.cc/)
[](https://nextjs.org/)
[](LICENSE)

TranslateAI is a web application that translates documents while preserving their original formatting structure. Perfect for translating technical documentation, reports, and formatted content without losing layout integrity.

## 🚀 Try It Now!

<a href="https://translates.cc/" target="_blank">**[👉 Live Demo: https://translates.cc](https://translates.cc/)**</a>

Experience the power of AI-powered document translation with full formatting preservation!
## ✨ Core Features

### 🎯 Format Preservation
- **Maintains original structure**: Headings, lists, tables, and styling remain intact
- **Multi-format support**: Processes `.docx`, `.txt`, `.md`, and other common formats
- **Layout integrity**: Preserves visual formatting and document structure

### 🤖 AI-Powered Translation
- **Advanced AI models**: Leverages OpenAI GPT-4 for context-aware translations
- **Automatic language detection**: Smart source language identification
- **Translation quality**: High-quality output with contextual understanding

### ⚡ Performance & UX
- **Fast processing**: Optimized translation pipeline for quick results
- **Responsive design**: Works seamlessly across desktop and mobile devices
- **Drag-and-drop interface**: Easy file upload with real-time preview

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenAI API key

## 🛠️ Technology Stack

### Frontend Architecture
- **Framework**: Next.js 13 (App Router) with React 18
- **Styling**: Tailwind CSS + Shadcn UI components
- **UI Toolkit**: Radix UI primitives

### Backend & Processing
- **Translation Engine**: OpenAI GPT-4 API
- **Document Processing**: Unified.js ecosystem with Remark/Rehype
- **Format Handling**: Mammoth.js (for DOCX), Remark (for Markdown)

### Deployment & Infrastructure
- **Hosting**: Vercel Edge Functions
- **Performance**: Vercel Edge Network for fast global access
- **API Routes**: Next.js API endpoints for serverless functions

## 📖 Usage Guide

### Basic Translation Workflow
1. **Upload Document**: Drag and drop or click to upload your file
2. **Select Languages**: Choose source (auto-detect available) and target languages
3. **Translate**: Click translate and watch the AI process your document
4. **Download**: Get your perfectly formatted translated document

### Supported Formats
| Format | Features | Best For |
|--------|----------|----------|
| **DOCX** | Full formatting preservation | Technical docs, reports |
| **TXT** | Plain text translation | Simple documents |
| **MD** | Markdown syntax preservation | Documentation, blogs |

### Advanced Features
- **Formatting options**: Toggle between strict preservation and relaxed mode
- **Batch processing**: Handle multiple documents efficiently
- **Quality settings**: Balance between speed and translation quality

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/your-username/translateai.git
```
```bash
cd translateai
npm install
```
2. **Environment setup**
```bash
cp .env.example .env.local
echo "OPENAI_API_KEY=your_api_key_here" >> .env.local 
```
open http://localhost:3000# 

3. **Server setup**
**[Check this respo:https://github.com/kobe8ouchao/translateai_server](https://github.com/kobe8ouchao/translateai_server))**

### Reporting Issues
Use GitHub Issues to report bugs or request features. Please include:
- Detailed description of the issue
- Steps to reproduce
- Browser/OS information
- Error messages or screenshots

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ❓ FAQ

### 🤔 How does format preservation work?
The system analyzes document structure and applies translation while maintaining original layout, including headings, lists, tables, and styling through advanced parsing algorithms.

### 💰 Is there a cost to use TranslateAI?
The application is free to use, but you'll need your own OpenAI API key for translation services. The demo uses limited credits for testing.

### 📱 Is the application mobile-friendly?
Yes! The interface is fully responsive and optimized for mobile devices with touch-friendly controls and adaptive layout.

### 🔒 What about privacy and data security?
All document processing happens securely - files are processed in memory and not stored on servers. For maximum privacy, you can self-host the application.

## 🆕 Changelog

### Latest Updates
- **v1.2.0**: Added advanced formatting options and batch processing
- **v1.1.0**: Enhanced mobile responsiveness and performance optimizations
- **v1.0.0**: Initial release with core translation functionality

**Keywords**: document translation, format-preserving translation, AI translation tool, DOCX translator, Markdown translation, formatting preservation, multilingual document processing, Next.js translation app, OpenAI translation, document processing

**Tech Stack**: nextjs, react, tailwindcss, openai, vercel, document-translation, ai-translation, formatting-preservation

*Built with ❤️ using Next.js and OpenAI*
