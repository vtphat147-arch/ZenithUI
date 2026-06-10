# ZenithUI

Nền tảng học trực tuyến và chia sẻ UI/UX components miễn phí với giao diện hiện đại, tích hợp thanh toán VIP và các tính năng tương tác 3D.

## 🚀 Công nghệ sử dụng

### Core Framework
- **React 18** - UI Framework hiện đại
- **TypeScript** - Type safety và developer experience
- **Vite** - Build tool nhanh chóng
- **React Router DOM v6** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer cho Three.js
- **@react-three/drei** - Useful helpers cho R3F

### HTTP & State
- **Axios** - HTTP client
- **React Context API** - State management

### Utilities
- **date-fns** - Date formatting utilities
- **jszip** - File compression
- **Lenis** - Smooth scrolling

## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server (localhost:5173)
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## ⚙️ Environment Variables

Tạo file `.env.local` trong thư mục root:

```env
VITE_API_URL=https://e-education-be.onrender.com/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

### Environment Variables

| Variable | Mô tả | Required |
|----------|-------|----------|
| `VITE_API_URL` | Backend API base URL | ✅ Yes |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Client ID | ❌ No |

## 📁 Cấu trúc thư mục

```
src/
├── components/          # React components
│   ├── 3d/             # 3D components (Three.js)
│   │   ├── CosmicBackground.tsx
│   │   ├── FluidBackground.tsx
│   │   ├── GeometricShapes.tsx
│   │   └── ...
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── ...
│   ├── ui/             # UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── ComponentEditor.tsx
│   ├── ComponentPreview.tsx
│   ├── Comments.tsx
│   ├── ExportComponent.tsx
│   └── ...
├── contexts/           # React Context providers
│   └── AuthContext.tsx
├── hooks/              # Custom React hooks
│   ├── use3DScene.ts
│   ├── useScrollProgress.ts
│   └── useVipStatus.ts
├── pages/              # Page components
│   ├── Homepage.tsx
│   ├── Homepage3D.tsx
│   ├── Components.tsx
│   ├── ComponentDetail.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Profile.tsx
│   ├── PaymentSuccess.tsx
│   └── ...
├── services/           # API services
│   ├── api.ts          # Axios instance & base config
│   ├── authService.ts
│   ├── userService.ts
│   ├── vipService.ts
│   └── commentService.ts
├── utils/              # Utility functions
│   └── animations.ts
├── App.tsx             # Root component & routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Tính năng chính

### 🔐 Authentication
- ✅ Đăng ký/Đăng nhập với email và password
- ✅ Xác thực email qua OTP
- ✅ Đăng nhập với Google OAuth
- ✅ JWT token authentication
- ✅ Protected routes

### 🎨 UI/UX Components
- ✅ Browse và tìm kiếm UI components
- ✅ Xem preview components (2D và 3D)
- ✅ Export components (HTML, CSS, React, Vue)
- ✅ Download components dạng ZIP
- ✅ Fullscreen preview
- ✅ Share components

### 💎 VIP System
- ✅ Hiển thị VIP plans
- ✅ Thanh toán qua PayOS
- ✅ Tích hợp webhook xử lý thanh toán
- ✅ Theo dõi VIP status và expiration
- ✅ Restrict access cho VIP-only features

### 💬 Tương tác
- ✅ Comments trên components
- ✅ Like/Unlike components
- ✅ View history tracking
- ✅ Favorites management

### 🎭 3D Experience
- ✅ 3D homepage với animations
- ✅ Interactive 3D backgrounds
- ✅ Particle systems
- ✅ Smooth scrolling với Lenis

### 👤 User Profile
- ✅ Xem và chỉnh sửa profile
- ✅ Payment history
- ✅ VIP status và expiration
- ✅ Favorite components

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Homepage3D` | 3D homepage |
| `/classic` | `Homepage` | Classic homepage |
| `/components` | `Components` | Browse components |
| `/components/:id` | `ComponentDetail` | Component detail page |
| `/login` | `Login` | Login page |
| `/register` | `Register` | Register page |
| `/verify-email` | `VerifyEmail` | Email verification |
| `/profile` | `Profile` | User profile |
| `/editor` | `ComponentEditorPage` | Component editor |
| `/payment-success` | `PaymentSuccess` | Payment success callback |
| `/payment-cancel` | `PaymentCancel` | Payment cancel callback |

## 🔌 API Integration

Frontend kết nối với Backend API qua Axios:

```typescript
// Base URL: VITE_API_URL
// Example: https://e-education-be.onrender.com/api
```

### Main API Endpoints

- **Auth**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Payments**: `/api/payments/*`
- **Components**: `/api/design-components/*`
- **Comments**: `/api/comments/*`
- **Favorites**: `/api/favorites/*`

## 💳 PayOS Payment Integration

### Flow thanh toán:
1. User chọn VIP plan → Click "Mua ngay"
2. Frontend gọi `POST /api/payments/create-order`
3. Backend trả về `checkoutUrl` từ PayOS
4. Redirect user đến PayOS checkout page
5. User thanh toán → PayOS redirect về `/payment-success`
6. Frontend poll `GET /api/payments/verify/:orderCode`
7. Webhook từ PayOS → Backend update payment status
8. User VIP status được activate tự động

### Environment Setup:
- Backend cần config PayOS credentials (ClientId, ApiKey, ChecksumKey)
- Frontend chỉ cần API URL

## 🚢 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào Vercel
3. Set environment variables:
   - `VITE_API_URL`
   - `VITE_GOOGLE_CLIENT_ID` (optional)
4. Deploy!

### Manual Build

```bash
npm run build
# Output: dist/
```

## 📝 Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Styling Guide

- **Tailwind CSS** cho utility classes
- **CSS Modules** cho component-specific styles (nếu cần)
- **Framer Motion** cho animations
- Custom CSS trong `index.css` cho global styles

## 🔒 Security

- JWT tokens stored in localStorage
- API requests include Authorization headers
- CORS configured on backend
- Environment variables không commit vào git

## 🐛 Debugging

### Development
```bash
npm run dev
# Open browser DevTools → Network tab để xem API calls
# React DevTools để inspect components
```

### Production
- Check Vercel logs
- Check browser console
- Verify environment variables

## 📚 Dependencies chính

Xem `package.json` để biết đầy đủ dependencies và versions.

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

Private project - All rights reserved

## 🔗 Links

- **Backend API**: https://e-education-be.onrender.com/api
- **Frontend (Production)**: [Your Vercel URL]
- **GitHub**: [Repository URL]

---

Built with ❤️ using React + TypeScript + Vite

