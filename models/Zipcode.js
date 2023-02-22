const oracledb = require('./Oracle');

let zipcodesql = {
    sidosql: 'select distinct sido from zipcode2013 order by sido',
    gugunsql: 'select distinct gugun from zipcode2013 where sido = :1 order by gugun',
    dongsql: 'select distinct dong from zipcode2013 where sido = :1 guguns = :2 order by dong',
    zipsql: 'select * from zipcode2013 where sido = :1 guguns = :2 dong = :3 order by zicode',
}

class Zipcode {
    constructor() {
    }

    async getSido() {
        let conn = null;
        let params = [];
        let sidos = [];

        try {
            conn = await oracledb.makeConn();
            let result = await conn.execute(
                zipcodesql.sidosql, params, oracledb.options);
            let rs = result.resultSet;

            let row = null;
            while ((row = await rs.getRow())) {
                let sido = {'sido': row.SIDO};
                sidos.push(sido);
            }
        } catch (e) {
            console.log(e);
        } finally {
            await oracledb.closeConn(conn);
        }

        return sidos;
    } // getSido

    async getGugun(sido) {
        let conn = null;
        let params = [sido];
        let guguns = [];

        try {
            conn = await oracledb.makeConn();
            let result = await conn.execute(
                zipcodesql.gugunsql, params, oracledb.options);
            let rs = result.resultSet;

            let row = null;
            while ((row = await rs.getRow())) {
                let gugun = {'gugun': row.GUGUN};
                guguns.push(gugun);
            }

        } catch (e) {
            console.log(e);
        } finally {
            await oracledb.closeConn(conn);
        }

        return guguns
    }

    async getDong(sido, gugun) {
        let conn = null;
        let params = [sido, gugun];
        let dongs = [];

        try {
            conn = await oracledb.makeConn();
            let result = await conn.execute(
                zipcodesql.dongsql, params, oracledb.options);
            let rs = result.resultSet;

            let row = null;
            while ((row = await rs.getRow())) {
                let dong = {'dong': row.DONG};
                dongs.push(dong);
            }

        } catch (e) {
            console.log(e);
        } finally {
            await oracledb.closeConn(conn);
        }

        return dongs
    }

    async getZipcode(sido, gugun, dong) {
        let conn = null;
        let params = [sido, gugun, dong];
        let zips = [];

        try {
            conn = await oracledb.makeConn();

        } catch (e) {
            console.log(e);
        } finally {
            await oracledb.closeConn(conn);
        }

        return zips
    }

};

module.exports = Zipcode;