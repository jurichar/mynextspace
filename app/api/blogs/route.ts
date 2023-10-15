import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const blogs = await prisma.blogPost.findMany({
    include: {
      author: true
    }
  });
  console.log("blogs", blogs);
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const { title, content, authorId } = await request.json();

  try {
    const newBlogPost = await prisma.blogPost.create({
      data: {
        title,
        content,
        author: { connect: { id: authorId } }
      }
    });

    return NextResponse.json(newBlogPost);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
