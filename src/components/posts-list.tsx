import { allPosts, Post } from 'contentlayer/generated'
import { PostItem } from '@/src/components/post-item'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export function PostsList() {
  let posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  let seeMore = false

  if (posts.length > 5) {
    posts = posts.slice(0, 5)
    seeMore = true
  }

  return (
    <div className="max-w-xl my-3 space-y-3 w-full">
      {posts.map((post, idx) => (
        <PostItem key={idx} {...post} />
      ))}
      {seeMore ?
        <div className='group block w-full'>
          <Link href={`/blog/`} className='w-full flex flex-col md:items-end'>
            <h3 className="text-xs group-hover:italic group-hover:underline group-hover:decoration-wavy  decoration-cyan-700 max-w-full text-cyan-700 font-mono md:text-right">...and more</h3>
          </Link>
        </div>
        : null}

    </div>
  )
}