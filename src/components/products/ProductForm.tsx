import { z } from "zod";

import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useValidatedForm } from "@/lib/hooks/useValidatedForm";

import { type Action, cn } from "@/lib/utils";
import { type TAddOptimistic } from "@/app/(app)/products/useOptimisticProducts";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useBackPath } from "@/components/shared/BackButton";



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { type Product, insertProductParams } from "@/lib/db/schema/products";
import {
  createProductAction,
  deleteProductAction,
  updateProductAction,
} from "@/lib/actions/products";
import { type CatProduct, type CatProductId } from "@/lib/db/schema/catProducts";

const ProductForm = ({
  catProducts,
  catProductId,
  product,
  openModal,
  closeModal,
  addOptimistic,
  postSuccess,
}: {
  product?: Product | null;
  catProducts: CatProduct[];
  catProductId?: CatProductId
  openModal?: (product?: Product) => void;
  closeModal?: () => void;
  addOptimistic?: TAddOptimistic;
  postSuccess?: () => void;
}) => {
  const { errors, hasErrors, setErrors, handleChange } =
    useValidatedForm<Product>(insertProductParams);
  const editing = !!product?.id;
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [pending, startMutation] = useTransition();

  const router = useRouter();
  const backpath = useBackPath("products");


  const onSuccess = (
    action: Action,
    data?: { error: string; values: Product },
  ) => {
    const failed = Boolean(data?.error);
    if (failed) {
      openModal && openModal(data?.values);
      toast.error(`Failed to ${action}`, {
        description: data?.error ?? "Error",
      });
    } else {
      router.refresh();
      postSuccess && postSuccess();
      toast.success(`Product ${action}d!`);
      if (action === "delete") router.push(backpath);
    }
  };

  const handleSubmit = async (data: FormData) => {
    setErrors(null);

    const payload = Object.fromEntries(data.entries());
    const productParsed = await insertProductParams.safeParseAsync({ catProductId, ...payload });
    if (!productParsed.success) {
      setErrors(productParsed?.error.flatten().fieldErrors);
      return;
    }

    closeModal && closeModal();
    const values = productParsed.data;
    const pendingProduct: Product = {
      updatedAt: product?.updatedAt ?? new Date(),
      createdAt: product?.createdAt ?? new Date(),
      id: product?.id ?? "",
      userId: product?.userId ?? "",
      ...values,
    };
    try {
      startMutation(async () => {
        addOptimistic && addOptimistic({
          data: pendingProduct,
          action: editing ? "update" : "create",
        });

        const error = editing
          ? await updateProductAction({ ...values, id: product.id })
          : await createProductAction(values);

        const errorFormatted = {
          error: error ?? "Error",
          values: pendingProduct 
        };
        onSuccess(
          editing ? "update" : "create",
          error ? errorFormatted : undefined,
        );
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrors(e.flatten().fieldErrors);
      }
    }
  };

  return (
    <form action={handleSubmit} onChange={handleChange} className={"space-y-8"}>
      {/* Schema fields start */}
              <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.name ? "text-destructive" : "",
          )}
        >
          Name
        </Label>
        <Input
          type="text"
          name="name"
          className={cn(errors?.name ? "ring ring-destructive" : "")}
          defaultValue={product?.name ?? ""}
        />
        {errors?.name ? (
          <p className="text-xs text-destructive mt-2">{errors.name[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.catProductId ? "text-destructive" : "",
          )}
        >
          Cat Product Id
        </Label>
        <Input
          type="text"
          name="catProductId"
          className={cn(errors?.catProductId ? "ring ring-destructive" : "")}
          defaultValue={product?.catProductId ?? ""}
        />
        {errors?.catProductId ? (
          <p className="text-xs text-destructive mt-2">{errors.catProductId[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.introduce ? "text-destructive" : "",
          )}
        >
          Introduce
        </Label>
        <Input
          type="text"
          name="introduce"
          className={cn(errors?.introduce ? "ring ring-destructive" : "")}
          defaultValue={product?.introduce ?? ""}
        />
        {errors?.introduce ? (
          <p className="text-xs text-destructive mt-2">{errors.introduce[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.price ? "text-destructive" : "",
          )}
        >
          Price
        </Label>
        <Input
          type="text"
          name="price"
          className={cn(errors?.price ? "ring ring-destructive" : "")}
          defaultValue={product?.price ?? ""}
        />
        {errors?.price ? (
          <p className="text-xs text-destructive mt-2">{errors.price[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.oldPrice ? "text-destructive" : "",
          )}
        >
          Old Price
        </Label>
        <Input
          type="text"
          name="oldPrice"
          className={cn(errors?.oldPrice ? "ring ring-destructive" : "")}
          defaultValue={product?.oldPrice ?? ""}
        />
        {errors?.oldPrice ? (
          <p className="text-xs text-destructive mt-2">{errors.oldPrice[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.discount ? "text-destructive" : "",
          )}
        >
          Discount
        </Label>
        <Input
          type="text"
          name="discount"
          className={cn(errors?.discount ? "ring ring-destructive" : "")}
          defaultValue={product?.discount ?? ""}
        />
        {errors?.discount ? (
          <p className="text-xs text-destructive mt-2">{errors.discount[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.quantity ? "text-destructive" : "",
          )}
        >
          Quantity
        </Label>
        <Input
          type="text"
          name="quantity"
          className={cn(errors?.quantity ? "ring ring-destructive" : "")}
          defaultValue={product?.quantity ?? ""}
        />
        {errors?.quantity ? (
          <p className="text-xs text-destructive mt-2">{errors.quantity[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.weight ? "text-destructive" : "",
          )}
        >
          Weight
        </Label>
        <Input
          type="text"
          name="weight"
          className={cn(errors?.weight ? "ring ring-destructive" : "")}
          defaultValue={product?.weight ?? ""}
        />
        {errors?.weight ? (
          <p className="text-xs text-destructive mt-2">{errors.weight[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.country ? "text-destructive" : "",
          )}
        >
          Country
        </Label>
        <Input
          type="text"
          name="country"
          className={cn(errors?.country ? "ring ring-destructive" : "")}
          defaultValue={product?.country ?? ""}
        />
        {errors?.country ? (
          <p className="text-xs text-destructive mt-2">{errors.country[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.unit ? "text-destructive" : "",
          )}
        >
          Unit
        </Label>
        <Input
          type="text"
          name="unit"
          className={cn(errors?.unit ? "ring ring-destructive" : "")}
          defaultValue={product?.unit ?? ""}
        />
        {errors?.unit ? (
          <p className="text-xs text-destructive mt-2">{errors.unit[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.property ? "text-destructive" : "",
          )}
        >
          Property
        </Label>
        <Input
          type="text"
          name="property"
          className={cn(errors?.property ? "ring ring-destructive" : "")}
          defaultValue={product?.property ?? ""}
        />
        {errors?.property ? (
          <p className="text-xs text-destructive mt-2">{errors.property[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.size ? "text-destructive" : "",
          )}
        >
          Size
        </Label>
        <Input
          type="text"
          name="size"
          className={cn(errors?.size ? "ring ring-destructive" : "")}
          defaultValue={product?.size ?? ""}
        />
        {errors?.size ? (
          <p className="text-xs text-destructive mt-2">{errors.size[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.status ? "text-destructive" : "",
          )}
        >
          Status
        </Label>
        <Input
          type="text"
          name="status"
          className={cn(errors?.status ? "ring ring-destructive" : "")}
          defaultValue={product?.status ?? ""}
        />
        {errors?.status ? (
          <p className="text-xs text-destructive mt-2">{errors.status[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
        <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.note ? "text-destructive" : "",
          )}
        >
          Note
        </Label>
        <Input
          type="text"
          name="note"
          className={cn(errors?.note ? "ring ring-destructive" : "")}
          defaultValue={product?.note ?? ""}
        />
        {errors?.note ? (
          <p className="text-xs text-destructive mt-2">{errors.note[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>

      {catProductId ? null : <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.catProductId ? "text-destructive" : "",
          )}
        >
          CatProduct
        </Label>
        <Select defaultValue={product?.catProductId} name="catProductId">
          <SelectTrigger
            className={cn(errors?.catProductId ? "ring ring-destructive" : "")}
          >
            <SelectValue placeholder="Select a catProduct" />
          </SelectTrigger>
          <SelectContent>
          {catProducts?.map((catProduct) => (
            <SelectItem key={catProduct.id} value={catProduct.id.toString()}>
              {catProduct.id}{/* TODO: Replace with a field from the catProduct model */}
            </SelectItem>
           ))}
          </SelectContent>
        </Select>
        {errors?.catProductId ? (
          <p className="text-xs text-destructive mt-2">{errors.catProductId[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div> }
      {/* Schema fields end */}

      {/* Save Button */}
      <SaveButton errors={hasErrors} editing={editing} />

      {/* Delete Button */}
      {editing ? (
        <Button
          type="button"
          disabled={isDeleting || pending || hasErrors}
          variant={"destructive"}
          onClick={() => {
            setIsDeleting(true);
            closeModal && closeModal();
            startMutation(async () => {
              addOptimistic && addOptimistic({ action: "delete", data: product });
              const error = await deleteProductAction(product.id);
              setIsDeleting(false);
              const errorFormatted = {
                error: error ?? "Error",
                values: product,
              };

              onSuccess("delete", error ? errorFormatted : undefined);
            });
          }}
        >
          Delet{isDeleting ? "ing..." : "e"}
        </Button>
      ) : null}
    </form>
  );
};

export default ProductForm;

const SaveButton = ({
  editing,
  errors,
}: {
  editing: Boolean;
  errors: boolean;
}) => {
  const { pending } = useFormStatus();
  const isCreating = pending && editing === false;
  const isUpdating = pending && editing === true;
  return (
    <Button
      type="submit"
      className="mr-2"
      disabled={isCreating || isUpdating || errors}
      aria-disabled={isCreating || isUpdating || errors}
    >
      {editing
        ? `Sav${isUpdating ? "ing..." : "e"}`
        : `Creat${isCreating ? "ing..." : "e"}`}
    </Button>
  );
};
