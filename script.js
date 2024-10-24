document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // هنا يمكنك إضافة كود لحفظ البيانات أو إرسالها إلى خادم

    alert('تم إنشاء الحساب بنجاح!');
});

// التبديل إلى صفحة تسجيل الدخول (إضافة كود إذا كانت لديك صفحة تسجيل دخول)
document.getElementById('login-link').addEventListener('click', function() {
    window.location.href = 'login.html'; // توجيه المستخدم إلى صفحة تسجيل الدخول
});
