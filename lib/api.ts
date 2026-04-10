import axios from "axios";
import type { Note } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

export async function fetchNotes(
  page: number,
  perPage: number,
  search: string,
  tag?: string,
): Promise<FetchNotesResponse> {
  const params: {
    page: number;
    perPage: number;
    search: string;
    tag?: string;
  } = {
    page,
    perPage,
    search,
  };

  if (tag) {
    params.tag = tag;
  }

  const res = await axios.get<FetchNotesResponse>(BASE_URL, {
    params,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return res.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const res = await axios.get<Note>(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return res.data;
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const res = await axios.post<Note>(BASE_URL, payload, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return res.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await axios.delete<Note>(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return res.data;
}
