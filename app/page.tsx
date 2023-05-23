import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { CardDemo } from "@/components/card-demo"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 border pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      <section className="container flex flex-wrap items-center gap-6 border pb-8 pt-6 md:py-10">
        <Button>Button</Button>
        <Button variant="default">Button 2</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </section>
      <section className="container border pb-8 pt-6 md:py-10">
        <h2 className="mb-3 text-xl font-semibold">Card Demo</h2>
        <CardDemo />
      </section>
    </>
  )
}
