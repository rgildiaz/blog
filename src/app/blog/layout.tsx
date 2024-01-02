import { PostsList } from '@/src/components/posts-list'
import { SiteHeader } from '@/src/components/site-header'
import { SiteFooter } from '@/src/components/site-footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:flex-row-reverse w-screen justify-start md:justify-center my-8 h-full px-2 max-w-screen'>
      <div className='md:ml-2 flex flex-col items-center md:items-start md:max-w-xl md:w-full h-full overflow-visible'>
        <SiteHeader />
        <div className='text-md px-1 md:px-3'>
          {children}
        </div>
        <SiteFooter className='hidden md:block' />
      </div>
      <nav className='sticky top-6 h-fit md:mr-2 flex flex-col items-start md:items-end md:min-w-36 md:max-w-52 mt-8 md:mt-28 px-1 md:px-0'>
        <div className='w-full flex flex-col md:items-end'>
          <div className='w-full flex md:justify-end'>
            <h2 className="text-xl font-mono">more articles</h2>
          </div>
          <PostsList />
        </div>
      </nav>
      <SiteFooter className='md:hidden block my-3' />
    </div>
  )
}