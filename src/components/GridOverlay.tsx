const GridOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 hidden xl:grid grid-cols-12 gap-4 px-20 opacity-20">
    {[...Array(13)].map((_, i) => (
      <div key={i} className="grid-line" />
    ))}
  </div>
);

export default GridOverlay;
