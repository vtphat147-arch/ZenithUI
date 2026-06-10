# ZenithUI

Thư viện chia sẻ UI/UX components miễn phí với giao diện tối giản, hiện đại phong cách Glassmorphism kết hợp các tính năng tương tác 3D sinh động.

## 🚀 Công nghệ sử dụng

### Core Stack
- **React 18** - Thư viện xây dựng giao diện người dùng
- **TypeScript** - Giúp tối ưu hóa code và phát triển an toàn
- **Vite** - Công cụ đóng gói (build tool) tốc độ cao
- **React Router DOM v6** - Điều hướng trang (client-side routing)

### Hiệu ứng & Thiết kế
- **Tailwind CSS** - Framework CSS thiết kế giao diện nhanh chóng
- **Framer Motion** - Thư viện chuyển động và hoạt ảnh mượt mà
- **Three.js & React Three Fiber & @react-three/drei** - Hiển thị hoạt cảnh 3D tương tác trực quan
- **Lenis** - Trải nghiệm cuộn trang mượt mà (smooth scrolling)
- **Lucide React** - Bộ icon hiện đại dạng SVG

---

## 🎯 Tính năng chính

### 1. Thư viện Component đa dạng
- Hỗ trợ xem danh sách các component được thiết kế sẵn (Buttons, Cards, Loaders, Navbars, Footers, Animations, Layouts,...).
- Tìm kiếm nhanh chóng theo từ khóa, tag hoặc tính năng của component.
- Bộ lọc nâng cao: Lọc theo danh mục (category), framework (HTML/CSS thuần, React, Tailwind CSS) và sắp xếp linh hoạt (Phổ biến nhất, mới nhất, được thích nhất, tên A-Z).

### 2. Trình duyệt xem thử và quản lý code trực quan (Live Inspector)
- **Live Preview:** Trình chiếu trực tiếp hoạt động của component trong cửa sổ cát (sandbox iframe) cách ly hoàn toàn, đảm bảo không ảnh hưởng tới styles hệ thống.
- **Chế độ toàn màn hình (Fullscreen Mode):** Cho phép xem trước component ở kích thước toàn màn hình.
- **Source Code Viewer:** Tab xem chi tiết mã nguồn bao gồm **HTML**, **CSS**, và **Javascript** tương ứng.
- **Copy & Tải code nhanh chóng:** Sao chép code nhanh bằng 1 click hoặc tải trực tiếp các tệp code đơn lẻ / file HTML/CSS trọn gói về máy tính.

### 3. Tương tác & Phản hồi local
- **Thích & Thả tim:** Nút yêu thích với hiệu ứng tim bay đẹp mắt, lưu lại trạng thái đã thích của người dùng qua `localStorage`.
- **Hệ thống bình luận (Comments):** Cho phép người dùng để lại bình luận và đánh giá trực tiếp dưới mỗi component, dữ liệu được đồng bộ hóa nội bộ qua `localStorage`.

### 4. Giao diện 3D tương tác
- Trang chủ tích hợp background 3D chuyển động với các khối hình học tương tác và hệ thống hạt (particle systems) thay đổi theo thao tác chuột.

---

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── 3d/             # Xử lý hình ảnh 3D (GeometricShapes, ParticleSystem, Loading3D)
│   ├── layout/         # Layout chính của website (Header, Footer)
│   ├── sections/       # Các section của trang landing (Hero, Features, Showcase, Testimonials, CTA)
│   ├── ui/             # Các component UI cơ bản (Button, Card,...)
│   ├── ComponentPreview.tsx # Wrapper iframe chạy thử component
│   └── Toast.tsx       # Thông báo nhanh (Toast alert)
├── data/
│   └── components.ts   # Danh sách và mã nguồn của các UI components mẫu
├── hooks/
│   └── useScrollProgress.ts # Hook theo dõi tiến trình cuộn trang
├── pages/              # Trang điều hướng (Pages)
│   ├── Homepage3D.tsx  # Trang chủ với giao diện 3D
│   ├── Components.tsx  # Trang danh mục tìm kiếm components
│   └── ComponentDetail.tsx # Trang xem chi tiết, live preview và copy code
├── utils/
│   └── animations.ts   # Cấu hình chuyển động Framer Motion
├── App.tsx             # Cấu hình Routes chính của ứng dụng
├── main.tsx            # Điểm khởi đầu ứng dụng (Entrypoint)
└── index.css           # Cấu hình styles toàn cục và hiệu ứng custom
```

---

## 📦 Hướng dẫn cài đặt và chạy chạy thử

### 1. Tải dependencies về máy
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
# Mở trình duyệt truy cập: http://localhost:5173
```

### 3. Đóng gói mã nguồn cho Production
```bash
npm run build
# Bản build thành phẩm sẽ nằm trong thư mục /dist
```

### 4. Kiểm tra code bằng Linter
```bash
npm run lint
```
