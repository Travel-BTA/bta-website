/**
 * tRPC stub — satisfies imports from merged pages (Journal, BlogPost, MediaManager).
 * These pages require a backend upgrade (web-db-user) to function fully.
 * Until then, they will render in a graceful loading/unavailable state.
 */
export const trpc = {
  blog: {
    getPosts: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: new Error("Backend not yet enabled") }),
    },
    getPost: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: new Error("Backend not yet enabled") }),
    },
  },
  // reviews namespace — used by JournalSections.tsx (TestimonialsSection)
  reviews: {
    getLatest: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: null }),
    },
  },
  // media namespace — used by MediaManager.tsx
  media: {
    list: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: null, refetch: () => {} }),
    },
    upload: {
      useMutation: () => ({ mutate: () => {}, mutateAsync: async () => ({}), isLoading: false }),
    },
    delete: {
      useMutation: () => ({ mutate: () => {}, isLoading: false }),
    },
  },
  storage: {
    listFiles: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: null }),
    },
    deleteFile: {
      useMutation: () => ({ mutate: () => {}, isLoading: false }),
    },
    getUploadUrl: {
      useMutation: () => ({ mutateAsync: async () => ({ url: "", key: "" }), isLoading: false }),
    },
  },
} as any;
