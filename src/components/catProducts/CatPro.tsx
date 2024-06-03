'use client'
import {
    File,
    ListFilter,
    PlusCircle,
} from "lucide-react"
import moment from "moment";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CompleteCatProduct } from "@/lib/db/schema/catProducts"
import { formatDateSlash } from "@/lib/utils";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

function CatPro({ dataCatPro }: { dataCatPro: CompleteCatProduct[] }) {
    const dataCatProCustom = dataCatPro.map((item) => {
        return {
            id: item.id,
            name: item.name,
            creator: item.user.name,
            created_at: moment(item.createdAt).format(formatDateSlash),
            updated_at: moment(item.updatedAt).format(formatDateSlash)
        }
    })
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                        <TabsTrigger value="archived" className="hidden sm:flex">
                            Archived
                        </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Active
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-7 gap-1">
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button>
                        <Button size="sm" className="h-7 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Product
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                            <CardTitle>Products</CardTitle>
                            <CardDescription>
                                Manage your products and view their sales performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DataTable
                                columns={columns}
                                //@ts-ignore
                                data={dataCatProCustom}
                            />
                        </CardContent>
                        <CardFooter>
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                products
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}

export default CatPro;