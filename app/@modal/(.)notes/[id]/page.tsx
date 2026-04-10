import NotePreview from "./NotePreview.client";

const NotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  return <NotePreview params={params} />;
};

export default NotePage;
