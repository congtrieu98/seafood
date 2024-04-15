import BreadCrumb from "@/components/frontend/components/breadCrumb/breadCrumb";
import CarouselPostGeneral from "@/components/frontend/components/carouselMultiple/carouselPostGeneral";

export default async function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <div className="min-h-screen">
                <div className="bg-gray-200">
                    <BreadCrumb />
                </div>
                <main className="">
                    {children}
                </main>
                <CarouselPostGeneral />
            </div>
        </main>
    )
}