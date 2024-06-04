"use client"

import Modal from "@/components/shared/Modal";
import { Checkbox } from "@/components/ui/checkbox";
import { CatProduct, CompleteCatProduct } from "@/lib/db/schema/catProducts";
import { ColumnDef } from "@tanstack/react-table";
import CatProductForm from "../CatProductForm";
import { useOptimistic, useState } from "react";
import { TAddOptimistic } from "@/app/(app)/cat-products/useOptimisticCatProducts";
import { Button } from "@/components/ui/button";

export type CatProductColumns = {
    id: string;
    name: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
    };
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
            const catProduct = row.original;
            return <CatProduct catProduct={catProduct} />;
        },
    },
]

const CatProduct = ({
    catProduct,
}: {
    catProduct: CompleteCatProduct;
}) => {

    const [open, setOpen] = useState(false);
    const openModal = (_?: CatProduct) => {
        setOpen(true)
    };
    const closeModal = () => setOpen(false);
    const [optimisticCatProduct, setOptimisticCatProduct] = useOptimistic(catProduct);
    const updateCatProduct: TAddOptimistic = (input) =>
        // @ts-ignore
        setOptimisticCatProduct({ ...input.data });


    return (
        <div className="m-4">
            <Modal open={open} setOpen={setOpen}>
                <CatProductForm
                    catProduct={optimisticCatProduct}
                    closeModal={closeModal}
                    openModal={openModal}
                    addOptimistic={updateCatProduct}
                />
            </Modal>
            <Button variant={"link"} onClick={() => setOpen(true)}>
                Edit
            </Button>
        </div>
    );
};