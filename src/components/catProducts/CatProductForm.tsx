import { z } from "zod";

import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useValidatedForm } from "@/lib/hooks/useValidatedForm";

import { type Action, cn } from "@/lib/utils";
import { type TAddOptimistic } from "@/app/(app)/cat-products/useOptimisticCatProducts";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useBackPath } from "@/components/shared/BackButton";



import { type CatProduct, insertCatProductParams } from "@/lib/db/schema/catProducts";
import {
  createCatProductAction,
  deleteCatProductAction,
  updateCatProductAction,
} from "@/lib/actions/catProducts";


const CatProductForm = ({
  catProduct,
  openModal,
  closeModal,
  addOptimistic,
  postSuccess,
}: {
  catProduct?: CatProduct | null;

  openModal?: (catProduct?: CatProduct) => void;
  closeModal?: () => void;
  addOptimistic?: TAddOptimistic;
  postSuccess?: () => void;
}) => {
  const { errors, hasErrors, setErrors, handleChange } =
    useValidatedForm<CatProduct>(insertCatProductParams);
  const editing = !!catProduct?.id;

  const [isDeleting, setIsDeleting] = useState(false);
  const [pending, startMutation] = useTransition();

  const router = useRouter();
  const backpath = useBackPath("cat-products");


  const onSuccess = (
    action: Action,
    data?: { error: string; values: CatProduct },
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
      toast.success(`CatProduct ${action}d!`);
      if (action === "delete") router.push(backpath);
    }
  };

  const handleSubmit = async (data: FormData) => {
    setErrors(null);

    const payload = Object.fromEntries(data.entries());
    const catProductParsed = await insertCatProductParams.safeParseAsync({ ...payload });
    if (!catProductParsed.success) {
      setErrors(catProductParsed?.error.flatten().fieldErrors);
      return;
    }

    closeModal && closeModal();
    const values = catProductParsed.data;
    const pendingCatProduct: CatProduct = {
      updatedAt: catProduct?.updatedAt ?? new Date(),
      createdAt: catProduct?.createdAt ?? new Date(),
      id: catProduct?.id ?? "",
      userId: catProduct?.userId ?? "",
      ...values,
    };
    try {
      startMutation(async () => {
        addOptimistic && addOptimistic({
          data: pendingCatProduct,
          action: editing ? "update" : "create",
        });

        const error = editing
          ? await updateCatProductAction({ ...values, id: catProduct.id })
          : await createCatProductAction(values);

        const errorFormatted = {
          error: error ?? "Error",
          values: pendingCatProduct
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
    <form action={handleSubmit} onChange={handleChange}>
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
          defaultValue={catProduct?.name ?? ""}
        />
        {errors?.name ? (
          <p className="text-xs text-destructive mt-2">{errors.name[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
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
              addOptimistic && addOptimistic({ action: "delete", data: catProduct });
              const error = await deleteCatProductAction(catProduct.id);
              setIsDeleting(false);
              const errorFormatted = {
                error: error ?? "Error",
                values: catProduct,
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

export default CatProductForm;

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
