'use client'

import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";

function BreadCrumb() {
    const pathName = usePathname()
    const partsPathname = pathName.split("/")
    let getCat = ''
    let title = ''
    if (partsPathname[1] === 'danh-muc') {
        getCat = 'product/all'
    } else if (partsPathname[1] === 'blog') {
        title = 'Bài viết - góc ẩm thực'
    }
    console.log(partsPathname[1])
    console.log("pathName:", pathName)
    return (
        <div className="max-w-screen-xl mx-auto py-4 px-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {
                        partsPathname[1] !== 'page' && (
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                        <Link href={`/${getCat}`}>{title !== '' ? title : 'Products'}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </>
                        )
                    }
                    {
                        (pathName !== '/product/all') && (
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{partsPathname[2]}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        )
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

export default BreadCrumb;