export function LoadingSkeletonCard() {
  return (
    <div className="glass-premium rounded-2xl p-8 space-y-4">
      <div className="h-4 w-24 rounded bg-dark-card/50 animate-pulse"></div>
      <div className="h-10 w-40 rounded bg-dark-card/50 animate-pulse"></div>
      <div className="h-4 w-32 rounded bg-dark-card/50 animate-pulse"></div>
    </div>
  )
}

export function LoadingSkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <LoadingSkeletonCard key={i} />
      ))}
    </div>
  )
}

export function LoadingSkeletonChart() {
  return (
    <div className="glass-premium rounded-2xl p-8 space-y-4">
      <div className="h-6 w-32 rounded bg-dark-card/50 animate-pulse mb-4"></div>
      <div className="h-64 w-full rounded bg-dark-card/50 animate-pulse"></div>
    </div>
  )
}
