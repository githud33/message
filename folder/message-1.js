// 1. สร้างข้อความดิบขึ้นมา (ไม่มีการแต่งสีหรือขนาดใดๆ ทั้งสิ้น)
var textNode = document.createTextNode("**** ดูไม่ได้ แจ้งได้ในกลุ่มนะครับ หรือติดต่อทาง inbox Messenger ทักแจ้งมา ตรงปุ่มติดต่อแอดมิน จะทำการแก้ไขให้ทันที เมื่อรับทราบ ****");

// 2. สั่งให้ระบบค้นหาพิกัดกล่องใน Blogger ที่เราแปะสคริปต์นี้ไว้
var currentScript = document.currentScript;

// 3. เอาข้อความไปวางลงตรงจุดนั้นทันที
currentScript.parentNode.insertBefore(textNode, currentScript);
