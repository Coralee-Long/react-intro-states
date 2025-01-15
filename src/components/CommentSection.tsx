import { useState } from "react";
import { Comment } from "../types";

interface CommentSectionProps {
    characterId: number;
    comments: Comment[];
    addComment: (id: number, comment: Comment) => void;
    styledButton: string;
}

export const CommentSection = ({ characterId, comments, addComment, styledButton }: CommentSectionProps) => {
    const [newComment, setNewComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!newComment.trim()) return;

        const comment: Comment = {
            text: newComment,
            createdAt: new Date().toISOString(),
        };

        addComment(characterId, comment);
        setNewComment("");
    };

    return (
        <div className="mt-8 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Comments</h3>

            {comments.length > 0 ? (
                <ul className="space-y-2">
                    {comments.map((comment, index) => (
                        <li key={index} className="p-3 bg-gray-100 rounded-md shadow">
                            {comment.text} <span className="text-sm text-gray-500">({comment.createdAt})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                />
                <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-white"
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};
