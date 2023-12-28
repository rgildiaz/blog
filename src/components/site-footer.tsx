import { Separator } from "@/src/components/ui/separator"
import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { cn } from "../lib/utils"


export function SiteFooter(props: { className?: string }) {
  return (
    <footer className={
      cn(
        "w-full h-16 flex flex-row justify-center font-mono mt-10",
        props.className
      )
    }>
      <div className="backdrop-blur-lg bg-slate-200/50 p-3 rounded-lg flex flex-col md:flex-row items-center justify-center rounded-t-md text-xs px-2 text-slate-800 w-full space-y-2 md:space-y-0">
        <div className="flex flex-row px-2">
          <span className="font-sans mr-1">©</span>
          2023 Rafi Gil Diaz
        </div>
        <Separator orientation="vertical" className="h-7 bg-slate-300 mx-2 hidden md:block" />
        <div className="flex flex-row justify-around px-2 space-x-2">
          <Link href={siteConfig.links["twitter"]} className="hover:italic hover:underline hover:decoration-wavy decoration-slate-500">{"[twitter]"}</Link>
          <Link href={siteConfig.links["github"]} className="hover:italic hover:underline hover:decoration-wavy decoration-slate-500">{"[github]"}</Link>
        </div>
      </div>
    </footer>
  )
}