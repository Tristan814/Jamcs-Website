export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-ja-red text-lg font-extrabold text-white">
        JA
      </div>
      <div className={`leading-tight ${light ? "text-white" : "text-ja-dark"}`}>
        <div className="text-[15px] font800 font-extrabold">JA Management</div>
        <div className="text-[10px] font-medium opacity-80">Consultancy Services</div>
      </div>
    </div>
  );
}
