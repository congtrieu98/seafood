import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import {
  createCatProduct,
  deleteCatProduct,
  updateCatProduct,
} from "@/lib/api/catProducts/mutations";
import { 
  catProductIdSchema,
  insertCatProductParams,
  updateCatProductParams 
} from "@/lib/db/schema/catProducts";

export async function POST(req: Request) {
  try {
    const validatedData = insertCatProductParams.parse(await req.json());
    const { catProduct } = await createCatProduct(validatedData);

    revalidatePath("/catProducts"); // optional - assumes you will have named route same as entity

    return NextResponse.json(catProduct, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  }
}


export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const validatedData = updateCatProductParams.parse(await req.json());
    const validatedParams = catProductIdSchema.parse({ id });

    const { catProduct } = await updateCatProduct(validatedParams.id, validatedData);

    return NextResponse.json(catProduct, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json(err, { status: 500 });
    }
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const validatedParams = catProductIdSchema.parse({ id });
    const { catProduct } = await deleteCatProduct(validatedParams.id);

    return NextResponse.json(catProduct, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json(err, { status: 500 });
    }
  }
}
