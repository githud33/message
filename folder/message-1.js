// 1. สร้างข้อความดิบขึ้นมา
var textNode = document.createTextNode("**** ดูไม่ได้ แจ้งได้ในกลุ่มนะครับ หรือติดต่อทาง inbox Messenger ทักแจ้งมา ตรงปุ่มติดต่อแอดมิน จะทำการแก้ไขให้ทันที เมื่อรับทราบ ****");

// 2. ค้นหาแท็ก <script> ตัวล่าสุดที่กำลังทำงานอยู่ ณ จุดนั้นบนหน้าเว็บ
var scripts = document.getElementsByTagName('script');
var currentScript = scripts[scripts.length - 1];

// 3. เอาข้อความไปวางลงตรงจุดนั้นทันที (แปะตรงไหน อยู่ตรงนั้นเลย)
if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(textNode, currentScript);
}
