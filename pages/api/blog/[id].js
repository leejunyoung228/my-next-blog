import { promisePool } from '../../../database/connection';

export default async function handler(req, res) {
    const id = Number(req.query.id);

    const [rows] = await promisePool.query(`SELECT * FROM Blog WHERE id=?`, [id]);
    if (rows.length > 0) {
        res.json(rows[0]);
    } else {
        res.send('no data');
    }
}