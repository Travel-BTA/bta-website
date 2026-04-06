import PageSEO from "@/components/PageSEO";
import { useState, useRef, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Link } from "wouter";

type UploadingFile = {
  name: string;
  progress: number;
  status: "uploading" | "done" | "error";
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MediaManager() {
  const [uploading, setUploading] = useState<UploadingFile[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [labelFilter, setLabelFilter] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files, refetch, isLoading } = trpc.media.list.useQuery();
  const uploadMutation = trpc.media.upload.useMutation({
    onSuccess: () => refetch(),
  });
  const deleteMutation = trpc.media.delete.useMutation({
    onSuccess: () => {
      refetch();
      setDeletingId(null);
    },
  });

  const processFiles = useCallback(
    async (fileList: FileList) => {
      const newUploads: UploadingFile[] = Array.from(fileList).map((f) => ({
        name: f.name,
        progress: 0,
        status: "uploading" as const,
      }));
      setUploading((prev) => [...prev, ...newUploads]);

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i]!;
        try {
          const reader = new FileReader();
          const base64 = await new Promise<string>((resolve, reject) => {
            reader.onload = () => {
              const result = reader.result as string;
              resolve(result.split(",")[1]!);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });

          await uploadMutation.mutateAsync({
            filename: file.name,
            mimeType: file.type || "application/octet-stream",
            size: file.size,
            data: base64,
          });

          setUploading((prev) =>
            prev.map((u) =>
              u.name === file.name ? { ...u, status: "done", progress: 100 } : u
            )
          );
          toast.success(`${file.name} uploaded successfully`);
        } catch (err) {
          setUploading((prev) =>
            prev.map((u) =>
              u.name === file.name ? { ...u, status: "error" } : u
            )
          );
          toast.error(`Failed to upload ${file.name}`);
        }
      }

      setTimeout(() => setUploading([]), 2000);
    },
    [uploadMutation]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) processFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files);
  };

  const copyUrl = (url: string, id: number) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("URL copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this file?")) return;
    setDeletingId(id);
    await deleteMutation.mutateAsync({ id });
    toast.success("File deleted");
  };

  const filteredFiles = files?.filter((f: any) =>
    labelFilter ? f.label?.toLowerCase().includes(labelFilter.toLowerCase()) || f.filename.toLowerCase().includes(labelFilter.toLowerCase()) : true
  );

  return (
    <div
className="min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <header className="bg-white border-b border-[#edeae4] sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-[#384959] hover:text-[#bfaf8a] transition-colors text-sm font-medium cursor-pointer">
                ← Back to Site
              </span>
            </Link>
            <div className="w-px h-5 bg-[#edeae4]" />
            <h1 className="text-xl font-semibold text-[#2f2f2f] tracking-wide">
              Media Manager
            </h1>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#384959] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#2f2f2f] transition-colors"
    >
      <PageSEO
        title="Media Manager | BTA"
        description="Internal media management for Boutique Travel Advisors."
        path="/admin/media"
        noIndex={true}
      />
            + Upload Files
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Upload Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all mb-8 ${
            dragOver
              ? "border-[#bfaf8a] bg-[#bfaf8a]/10"
              : "border-[#edeae4] bg-white hover:border-[#bfaf8a] hover:bg-[#bfaf8a]/5"
          }`}
        >
          <div className="text-4xl mb-3">📁</div>
          <p className="text-[#2f2f2f] font-medium mb-1">
            Drag & drop files here, or click to browse
          </p>
          <p className="text-[#384959]/60 text-sm">
            Supports images, PDFs, and other files
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,application/pdf,.svg,.gif,.webp"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Upload Progress */}
        {uploading.length > 0 && (
          <div className="bg-white rounded-xl border border-[#edeae4] p-4 mb-8 space-y-2">
            <p className="text-sm font-medium text-[#2f2f2f] mb-3">Uploading...</p>
            {uploading.map((u, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs text-[#384959]/70 mb-1">
                    <span className="truncate max-w-xs">{u.name}</span>
                    <span>{u.status === "done" ? "✓ Done" : u.status === "error" ? "✗ Error" : "Uploading..."}</span>
                  </div>
                  <div className="h-1.5 bg-[#edeae4] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        u.status === "done" ? "bg-green-500 w-full" :
                        u.status === "error" ? "bg-red-400 w-full" :
                        "bg-[#bfaf8a] w-1/2 animate-pulse"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filter */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by filename or label..."
            value={labelFilter}
            onChange={(e) => setLabelFilter(e.target.value)}
            className="border border-[#edeae4] rounded-lg px-4 py-2 text-sm w-72 focus:outline-none focus:border-[#bfaf8a] bg-white"
          />
          <span className="text-sm text-[#384959]/60">
            {filteredFiles?.length ?? 0} file{(filteredFiles?.length ?? 0) !== 1 ? "s" : ""}
          </span>
        </div>

        {/* File Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#edeae4] aspect-square animate-pulse" />
            ))}
          </div>
        ) : filteredFiles?.length === 0 ? (
          <div className="text-center py-20 text-[#384959]/50">
            <div className="text-5xl mb-4">🖼️</div>
            <p className="text-lg font-medium">No files yet</p>
            <p className="text-sm mt-1">Upload your first file using the button above</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredFiles?.map((file: any) => (
              <div
                key={file.id}
                className="bg-white rounded-xl border border-[#edeae4] overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Preview */}
                <div className="aspect-square bg-[#faf9f6] relative overflow-hidden">
                  {file.mimeType.startsWith("image/") ? (
                    <img
                      src={file.url}
                      alt={file.filename}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl">
                        {file.mimeType === "application/pdf" ? "📄" : "📎"}
                      </span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => copyUrl(file.url, file.id)}
                      className="bg-white text-[#2f2f2f] text-xs px-3 py-1.5 rounded font-medium hover:bg-[#bfaf8a] hover:text-white transition-colors"
                    >
                      {copiedId === file.id ? "Copied!" : "Copy URL"}
                    </button>
                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={deletingId === file.id}
                      className="bg-red-500 text-white text-xs px-3 py-1.5 rounded font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      {deletingId === file.id ? "..." : "Delete"}
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <p className="text-xs font-medium text-[#2f2f2f] truncate" title={file.filename}>
                    {file.filename}
                  </p>
                  <p className="text-xs text-[#384959]/50 mt-0.5">
                    {formatBytes(file.size)}
                  </p>
                  <p className="text-xs text-[#384959]/40 mt-0.5">
                    {formatDate(file.uploadedAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
