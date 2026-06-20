"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type SpeakerBioToggleProps = {
  name: string
  bio?: string
  showLabel: string
  hideLabel: string
  roleLabel?: string
  className?: string
}

export function SpeakerBioToggle({
  name,
  bio,
  showLabel,
  hideLabel,
  roleLabel,
  className,
}: SpeakerBioToggleProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={className}>
      {roleLabel && <p className="text-xs text-muted-foreground">{roleLabel}</p>}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        {bio && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={cn(
              "text-xs font-medium text-primary underline-offset-2 transition-colors hover:text-primary/80 hover:underline",
            )}
          >
            {open ? hideLabel : showLabel}
          </button>
        )}
      </div>
      {bio && open && <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{bio}</p>}
    </div>
  )
}
