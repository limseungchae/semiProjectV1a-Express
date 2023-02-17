
const processJoin = () => {
    let frm = document.join;
    if (frm.uid.value === '') alert('아이디는?');
    if (frm.pwd.value === '') alert('비밀번호는?');
    if (frm.repwd.value === '') alert('비밀번호 확인은?');
    if (frm.name.value === '') alert('이름은?');
    if (frm.email.value === '') alert('이메일?');
    else {
        frm.method = 'post';
        frm.submit();
    }
};

let joinbtn = document.querySelector('#joinbtn');
joinbtn.addEventListener('click', processJoin);