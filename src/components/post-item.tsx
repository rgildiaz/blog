import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

export function PostItem(post: Post) {
  return (
    <div className='group block w-full rounded-lg'>
      <Link href={`/blog/${post._raw.flattenedPath}`} className='w-full flex flex-col md:items-end'>
        <h3 className="text-sm group-hover:italic group-hover:underline group-hover:decoration-wavy  decoration-slate-500 max-w-full font-mono md:text-right">{post.title}</h3>
        <p className="text-xs text-slate-500">
          {format(parseISO(post.date), 'yyyy.MM.dd')}
        </p>
      </Link>
    </div>
  )
}