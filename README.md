# 🌟 Media Hub (Search Engine)

A sophisticated, high-performance media discovery platform built with **React 19**, **Redux Toolkit**, and **Tailwind CSS**. Search across multiple providers (Unsplash, Pexels, Giphy) for high-quality photos, videos, and GIFs in a single, unified interface.

![Project Preview](https://github.com/VishalFulkar/Media-Search-Application/raw/main/public/preview.png) *(Note: Replace with your actual screenshot link)*

## 🚀 Features

- **Multi-Source Search**: Seamlessly search across three major media platforms:
  - 📸 **Unsplash** for high-resolution photography.
  - 🎥 **Pexels** for stunning stock videos.
  - 🎭 **Giphy** for trending GIFs and animations.
- **Unified Experience**: Switch between Photos, Videos, and GIFs with a smooth tabbed navigation.
- **Personal Collections**: Save your favorite media items to a local collection for quick access.
- **Dynamic Grid Layout**: Responsive masonry-style grid that adapts to all screen sizes.
- **State Persistence**: Powered by Redux Toolkit for efficient global state management.
- **Instant Notifications**: Real-time feedback for actions like saving or removing items using React Toastify.
- **Modern UI/UX**: Premium aesthetic with glassmorphism touches and smooth transitions.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **API Communication**: [Axios](https://axios-http.com/)
- **Navigation**: [React Router DOM 7](https://reactrouter.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VishalFulkar/Media-Search-Application.git
   cd Media-Search-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_UNSPLASH_KEY=your_unsplash_access_key
   VITE_PEXELS_KEY=your_pexels_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```bash
src/
├── api/          # API services for Unsplash, Pexels, and Giphy
├── components/   # Reusable UI components (Navbar, SearchBar, Cards)
├── Pages/        # Main application views (Home, Collections)
├── redux/        # Store configuration and slices (Collection slice)
├── App.jsx       # Main application entry point
└── main.jsx      # Rendering logic
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
Developed with ❤️ by [Vishal Fulkar](https://github.com/VishalFulkar)

