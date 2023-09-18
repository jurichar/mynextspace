import { prisma } from "@/lib/prisma"
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const blogs = await prisma.user.findMany();
  console.log("blogs");

  return NextResponse.json(blogs);
}