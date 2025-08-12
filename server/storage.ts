import { type User, type InsertUser, type Comment, type InsertComment, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getComments(): Promise<Comment[]>;
  getApprovedComments(): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private comments: Map<string, Comment>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.comments = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getComments(): Promise<Comment[]> {
    return Array.from(this.comments.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getApprovedComments(): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.isApproved)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = randomUUID();
    const comment: Comment = {
      ...insertComment,
      id,
      isApproved: true,
      createdAt: new Date(),
    };
    this.comments.set(id, comment);
    return comment;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
