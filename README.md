# TranslateAI - Format-Preserving Document Translation

[](https://translateai.vercel.app/)
[](https://nextjs.org/)
[](LICENSE)

TranslateAI is a web application that translates documents while preserving their original formatting structure. Perfect for translating technical documentation, reports, and formatted content without losing layout integrity.

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

### Installation
```bash
  Clone the repository

  git clone https://github.com/your-username/translateai.git

  cd translateai

#Install dependencies
  npm install
- Set up environment variables
- cp .env.example .env.local
- Add your OpenAI API key to .env.local

### Development
```bash
Start development server
npm run dev

Open http://localhost:3000 in your browser

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

## ⚙️ Configuration

### Environment Variables
