import BreadCrumb from "@/components/frontend/components/breadCrumb/breadCrumb";
import CarouselPostGeneral from "@/components/frontend/components/carouselMultiple/carouselPostGeneral";

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <div className="min-h-screen">
                <main className="">
                    <div className="bg-gray-200">
                        <BreadCrumb />
                    </div>
                    {children}
                </main>
                <CarouselPostGeneral />
            </div>
        </main>
    )
}