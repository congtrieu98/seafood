/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import SidebarCat from "@/components/frontend/components/sidebar/sidebarCat";
import HomeSliderBanner from "@/components/frontend/components/sliderBaner/homeSliderBanner";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* section banner */}
      <section className="w-full flex max-w-screen-xl mx-auto">
        <div className="category">
          <SidebarCat />
        </div>
        <div className="slider w-full">
          <HomeSliderBanner />
          <div className="flex space-x-2 px-4">
            <div>
              <img src="https://theme.hstatic.net/1000182631/1000966139/14/a_top_1.jpg?v=1086" className="rounded-lg" />
            </div>
            <div>
              <img src="https://theme.hstatic.net/1000182631/1000966139/14/a_top_2.jpg?v=1086" className="rounded-lg" />
            </div>
          </div>
        </div>

      </section>



      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Faster iteration. More innovation.
              </h2>
              <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                The platform for rapid progress. Let your team focus on
                shipping features instead of managing infrastructure with
                automated CI/CD.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
            <div className="mx-auto aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-xl object-cover object-center sm:w-full lg:order-last" />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Collaboration</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      Make collaboration seamless with built-in code review
                      tools.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Automation</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      Automate your workflow with continuous integration.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Scale</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      Deploy to the cloud with a single click and scale with
                      ease.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Sign Up for Updates
              </h2>
              <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                Stay updated with the latest product news and updates.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

