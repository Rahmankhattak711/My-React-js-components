import React from 'react'

function Buttonss({label, icon, checked, value, onChange,width }) {
  const iconColorClass = checked ? "text-sBlack" : "text-sBlue";
  const borderColorClass = checked ? "border-sBlack" : "border-sBlue";
  const backgroundcolor = checked ? "bg-slate-100" : "";
  return (
    <div>
          <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          className="opacity-0"
          onChange={onChange}
          value={value}
          checked={checked}
        />
        <div
          className={`flex items-center justify-center gap-2 w-28 w border h-12 rounded-[24px] ${borderColorClass} ${backgroundcolor} ${width}`}
        >
          <div className={`w-5 h-5 color-black mt-2 ${iconColorClass}`}>{icon}</div>
          <div className={`text-black ${iconColorClass}`}>{label}</div>
        </div>
      </label>
    </div>
  )
}

export default Buttonss
