"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes(1, 12, "", tag),
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error loading notes</p>;

  return (
    <div>
      <h1>Notes List</h1>

      {data?.notes?.length ? (
        <NoteList notes={data.notes} />
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}
