import { SiteFooter } from "@/src/components/site-footer"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="max-w-5xl w-full h-full mx-2 mt-3">
        {children}
        <SiteFooter />
      </div>
    </div>
  )
}