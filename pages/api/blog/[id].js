import { blogList } from "../../../database/blog";

export default function handler(req, res) {
    const id = Number(req.query.id);

    const result = blogList.find((blog) => blog.id === id);

    if (result) {
        res.json({ id: id, test: 'test' });
    }
    else {
        res.send('no data');
    }
}