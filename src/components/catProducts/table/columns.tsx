"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type CatProductColumns = {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    creator: string;
    // user: {
    //     id: string;
    //     name: string | null;
    //     email: string | null;
    //     emailVerified: Date | null;
    //     image: string | null;
    // };
}

export const columns: ColumnDef<CatProductColumns>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => {
            return (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            );
        },
    },
    {
        header: "Tên danh muc",
        accessorKey: "name",
    },
    // {
    //     header: "Trạng Thái",
    //     accessorKey: "status",
    // },
    {
        header: "Người tạo",
        accessorKey: "creator",
    },
    {
        header: "Ngày tạo",
        accessorKey: "created_at",
    },
    {
        header: "Ngày cập nhật",
        accessorKey: "updated_at",
    },
    {
        accessorKey: "Action",
        cell: ({ row }) => {
            const consultant = row.original;
            //   return <Consultant consultant={consultant} />;
        },
    },
]

// const Consultant = ({
//     consultant,
//   }: // openModal,
//   {
//     consultant: CompleteConsultant;
//     // openModal: TOpenModal;
//   }) => {
//     // const optimistic = consultant.id === "optimistic";
//     // const deleting = consultant.id === "delete";
//     // const mutating = optimistic || deleting;
//     const pathname = usePathname();
//     const basePath = pathname.includes("consultants")
//       ? pathname
//       : pathname + "/consultants/";
  
//     return (
//       <Button variant={"link"} asChild>
//         <Link href={basePath + "/" + consultant.id}>Details</Link>
//       </Button>
//     );
//   };