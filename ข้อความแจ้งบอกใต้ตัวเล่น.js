  // --- ชุดที่ 2 ---
  const showNotice2 = true; // true = เปิดใช้งาน, false = ปิด
  const secondsToHide2 = 80; // ใส่ 0 เพื่อแช่ค้างไว้ | ใส่ตัวเลข (เช่น 10) เพื่อให้หายไปเอง
  const noticeText2 = "หากเปลี่ยนตัวเล่น ให้ปิดตัวเล่นที่เล่นอยู่ก่อน";

  function displayVideoNotice2() {
    // คุมผ่าน ID: A1a1
    const container = document.getElementById('A1a1');
    
    if (container && showNotice2) {
      container.innerHTML = `
        <div id="notice-text-2" style="
          font-size: 17px; color: #c3d2d9; text-align: center; margin-top: 3px; font-weight: bold;
          transition: opacity 1s ease; opacity: 1;
        ">${noticeText2}</div>`;

      // --- เงื่อนไข: ถ้าตั้งเวลามากกว่า 0 ถึงจะเริ่มนับถอยหลังเพื่อซ่อนข้อความ ---
      if (secondsToHide2 > 0) {
        setTimeout(() => {
          const textElement = document.getElementById('notice-text-2');
          if (textElement) {
            textElement.style.opacity = '0'; // ค่อยๆ จางหาย
            setTimeout(() => { 
              textElement.style.display = 'none'; // ลบพื้นที่ว่างออก
            }, 1000);
          }
        }, secondsToHide2 * 1000);
      }
    }
  }
  
  // เรียกใช้งานเมื่อโหลดหน้าเว็บ
  window.addEventListener('load', displayVideoNotice2);
