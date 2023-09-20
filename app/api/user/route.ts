import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from '@prisma/client';

export async function PUT (req: Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await req.json();
    data.age = Number(data.age);

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
    }).then((user: User | null ) => user?.id!)

    return NextResponse.json(user);
}