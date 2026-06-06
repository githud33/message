// สร้างกล่องข้อความขึ้นมาใหม่ แล้วนำไปแปะไว้ที่ด้านบนสุดของร่างกายหน้าเว็บ (body)
var msgDiv = document.createElement('div');

msgDiv.innerText = "**** ดูไม่ได้ แจ้งได้ในกลุ่มนะครับ หรือติดต่อทาง inbox Messenger ทักแจ้งมา ตรงปุ่มติดต่อแอดมิน จะทำการแก้ไขให้ทันที เมื่อรับทราบ ****";

// สั่งฝังกล่องข้อความนี้ลงในหน้าเว็บทันทีที่สคริปต์โหลดเสร็จ
document.body.insertBefore(msgDiv, document.body.firstChild);
