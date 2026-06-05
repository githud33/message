var script = document.createElement('script');
// ชี้ทางไปหาไฟล์ตัวจริงในโฟลเดอร์ core
script.src = 'https://githud33.github.io/message/folder/ข้อความข้างบน.js?t=' + new Date().getTime();
script.defer = true;
document.head.appendChild(script);