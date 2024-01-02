import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/src/components/mdx-components'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const getPost = (slug: string) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) notFound()
  return post
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug)

  return (
    <article className="w-full py-8">
      <div className="mb-8 text-left">
        <h1 className="text-5xl md:text-5xl font-light">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}

export default PostLayout