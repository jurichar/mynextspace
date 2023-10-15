"use client";
import { useRouter } from "next/navigation";
import styles from "./NewBlogForm.module.css";

export function NewBlogForm({ user }: any) {
    const router = useRouter();

    const createBlog = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            title: formData.get("title"),
            content: formData.get("content"),
            authorId: user.id,
        };

        const res = await fetch("/api/blogs", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });

        await res.json();

        if (res.status === 200) {
            router.push("/");
        }
    };

    return (
        <div className={styles.form}>
            <h2>Create New Blog</h2>
            <form onSubmit={createBlog}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
                <label htmlFor="content">Content</label>
                <textarea name="content" cols={30} rows={10}></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
