const oracledb = require("../models/Oracle");

class Member {
    insertsql = 'insert into member ' +
        '(mno,userid,passwd,name,emil)' +
        'values (mno.nextval, :1,:2,:3,:4)';
}

class member {
    // 생성자 정의 - 변수 초기화
    // 즉, 매개변수로 전달된 값을 크랠스 멤버변수에 대입함
    constructor(mno,userid,passwd,name,email,) {
        this.userid = userid;
        this.passwd = passwd;
        this.name = name;
        this.email = email;
    }

    // 회원정보 저장
    async insert() {
        let conn = null;
        let params = [this.userid , this.passwd, this.name, this.email];

        try{
            conn = await oracledb.makeConn();
            let result = await conn.execute(this.insert, params);
            await conn.commit();
            if (result.rowsAffected > 0) console.log('회원정보 저장 성공!');
        } catch (ex) {
            console.log(ex);
        } finally {
            await oracledb.closeConn(conn);
        }
    }

    // 성적 전체조회
    select() {}

    // 성적 상세조회
    selectOne(mno) {}

}

module.exports = Member;