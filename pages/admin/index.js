import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './index.module.css'
import { useRouter } from 'next/router';

export default function Home() {
    const submit = async (event) => {
        event.preventDefault();
        console.log("event value : ", event.target.title.value);
        axios.post('/api/blog', {
            title: event.target.title.value,
            content: event.target.content.value,
            readTime: event.target.readTime.value,
            writer: 'leejunyoung228',
        })
    }
    return (
        <div>
            <div>관리자 페이지입니다.</div>
            <form onSubmit={submit}>
                <div>
                    <div>
                        제목 : <input name='title' />
                    </div>
                    <div>
                        글 내용
                    </div>
                    <div>
                        <textarea name='content' />
                    </div>
                    <div>
                        읽는 시간 : <input type='number' name='readTime' max='100' min='1' />
                    </div>
                    <input type='submit' value='제출' />
                </div>
            </form>
        </div>
    )
}

