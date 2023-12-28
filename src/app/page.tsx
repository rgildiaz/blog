import { PostsList } from '@/src/components/posts-list'
import { siteConfig } from '@/src/config/site'
import Link from 'next/link'
import { SiteFooter } from '../components/site-footer'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row-reverse w-screen justify-start md:justify-center my-8 h-full px-4 max-w-screen'>
      <div className='md:ml-2 flex flex-col items-center md:items-start md:max-w-xl h-full overflow-visible'>
        <div className='mb-4 w-full top-3 sticky backdrop-blur-lg bg-slate-200/50 p-3 rounded-lg'>
          <h1 className="text-start text-5xl md:text-6xl font-sans font-light float-left mb-2" >{siteConfig.name}</h1>
          <nav></nav>
        </div>
        <div className='text-md px-3'>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
          <p>This is where the about section and stuff will go. Making this line super long so I can see how it will wrap/behave.</p>
        </div>
        <SiteFooter className='hidden md:block' />
      </div>
      <nav className='sticky top-6 h-fit md:mr-2 flex flex-col items-start md:items-end md:min-w-36 md:max-w-52 mt-8 md:mt-28 px-3 md:px-0'>
        <div className='w-full flex flex-col md:items-end'>
          <Link href="/blog" className='group w-full flex md:justify-end backdrop-blur-lg bg-slate-200/50 p-3 rounded-lg'>
            <h2 className="text-2xl group-hover:italic">Blog</h2>
          </Link>
          <PostsList />
        </div>
      </nav>
      <SiteFooter className='md:hidden block my-3' />
    </div>
  )
}