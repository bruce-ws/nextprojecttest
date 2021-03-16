import React from 'react'
import Link from 'next/link'
export default function index() {
    return (
        <div>
            首页 <br/>
            <Link href="/list">列表</Link>
            <br/>
            <a href="http://www.baidu.com">连接</a>
        </div>
    )
}
