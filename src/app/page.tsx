/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import MenuDropdownHeader from "@/components/frontend/components/menuDropdown/menu-dopdowwn";
import ResultSearch from "@/components/frontend/components/search/resultSearch";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* chead */}
      <div className="px-4 lg:px-6 h-14 bg-yellow-400">
        <div className="flex max-w-5xl mx-auto mt-2 justify-between leading-5 items-center">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6" />
          </Link>
          <div className="flex justify-center items-center">
            Mua hàng online liên hệ ngay hotline: 090.998.3514
          </div>
          <div className="flex justify-end items-end">
            <MenuDropdownHeader />
          </div>
          <nav className=" flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/sign-in"
            >
              Sig In
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/sign-up"
            >
              Sign Up
            </Link>
            {/* <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link> */}
          </nav>
        </div>
      </div>

      {/* header */}
      <div className="py-5 leading-5 bg-[#051c69]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between leading-5">
          <Link className=" flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6" />
          </Link>
          <div className="flex justify-center text-lg leading-10 items-center text-[#f0ea1f]">
            TƯƠI NGON TỪ NGUỒN
          </div>
          <div className="flex justify-center text-sm items-center">
            <form action="/search" method="get" className="flex relative">
              <input type="text" name="search" placeholder="Tìm kiếm" className="w-full rounded-lg border-transparent shadow-sm focus:border-blue-500 focus:outline-none px-5 py-2 text-md flex items-center" />
              <button type="submit" className="absolute top-3 right-4 border-l-2">
                <ResultSearch />
              </button>
            </form>
          </div>
          <div className="flex justify-center text-sm items-center text-white hover:text-[#f0ea1f] cursor-pointer">
            <div className="cart-icon relative">
              <ShoppingCart size={30} />
              <span className="bg-red-500 text-white px-2 py-1 rounded-full absolute -top-4 -right-4 ">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* menu service */}
      <div className="py-5 leading-5 bg-[#051c69] border-t-2 border-t-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 leading-5 gap-4">
          <div className="flex text-left text-white font-medium text-xs uppercase">
            Danh mục
          </div>
          <div className="flex text-left self-stretch text-white font-medium text-xs uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
            <Image
              src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
              height={20}
              width={20}
              alt="like"
              className="mr-2"
            />
            <span>
              Cam kết chất lượng <br /> an toàn xuất xứ
            </span>
          </div>
          <div className="flex text-left self-stretch text-white font-medium text-xs uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
            <Image
              src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
              height={20}
              width={20}
              alt="like"
              className="mr-2"
            />
            <span>
              1 đổi 1 trong 2h <br /> nhanh chóng, tận nhà
            </span>
          </div>
          <div className="flex text-left self-stretch text-white font-medium text-xs uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
            <Image
              src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
              height={20}
              width={20}
              alt="like"
              className="mr-2"
            />
            <span>
              Chuẩn đóng gói <br /> sạch sẽ, tiện lợi
            </span>
          </div>
          <div className="flex text-left text-white font-medium text-xs uppercase hover:bg-[#f0ea1f] p-2 rounded-sm">
            <Image
              src="https://theme.hstatic.net/1000182631/1000966139/14/icon_1_pc.png?v=1086"
              height={20}
              width={20}
              alt="like"
              className="mr-2"
            />
            <span>
              Giao hàng nhanh <br /> free ship
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="bg-neutral-100 dark:bg-neutral-800 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The complete platform <br />
                    for building the Web
                  </h1>
                  <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                    Give your team the toolkit to stop configuring and start
                    innovating. Securely build, deploy, and scale the best web
                    experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
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
      </main>
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

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
