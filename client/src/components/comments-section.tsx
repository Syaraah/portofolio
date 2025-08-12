import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertCommentSchema } from "@shared/schema";
import type { InsertComment, Comment } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { io, Socket } from "socket.io-client";

export default function CommentsSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const socketRef = useRef<Socket | null>(null);

  // ===== Socket.IO connection =====
  useEffect(() => {
    socketRef.current = io("http://localhost:5000");
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const form = useForm<InsertComment>({
    resolver: zodResolver(insertCommentSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { data: comments = [], isLoading } = useQuery<Comment[]>({
    queryKey: ["/api/comments"],
  });

  const commentMutation = useMutation({
    mutationFn: async (data: InsertComment) => {
      const response = await apiRequest("POST", "/api/comments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Comment posted successfully!",
        description: "Thank you for your feedback!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/comments"] });
    },
    onError: () => {
      toast({
        title: "Failed to post comment",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertComment) => {
    commentMutation.mutate(data);

    // ===== Kirim payload ke XSS detector =====
    socketRef.current?.emit("payload_from_dummy", { payload: data.message });
  };

  // ===== Kirim payload setiap ada perubahan teks di field message =====
  useEffect(() => {
    const subscription = form.watch((values) => {
      if (values.message?.trim()) {
        socketRef.current?.emit("payload_from_dummy", { payload: values.message });
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - new Date(date).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getColorClass = (index: number) => {
    const colors = ["blue", "emerald", "purple", "amber", "rose", "indigo"];
    return colors[index % colors.length];
  };

  return (
    <section id="comments" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Visitor Comments</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Share your thoughts and feedback. Your comments are valuable to me!
          </p>
        </div>

        {/* Comment Form */}
        <div className="bg-slate-50 p-8 rounded-xl mb-12">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">Leave a Comment</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your thoughts..."
                        rows={4}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={commentMutation.isPending}
                className="flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {commentMutation.isPending ? "Posting..." : "Post Comment"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Comments Display */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="text-slate-600">Loading comments...</div>
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-slate-600">No comments yet. Be the first to leave a comment!</div>
            </div>
          ) : (
            comments.map((comment, index) => (
              <div key={comment.id} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${getColorClass(index)}-100 rounded-full flex items-center justify-center`}>
                    <span className={`text-${getColorClass(index)}-600 font-medium`}>
                      {getInitials(comment.name)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-800">{comment.name}</h4>
                      <span className="text-sm text-slate-500">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">dangerouslySetInnerHTML={{ __html: comment.message }}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Like
                      </button>
                      <button className="text-slate-500 hover:text-slate-700 text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
