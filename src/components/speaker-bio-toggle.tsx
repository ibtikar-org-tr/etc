"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { speakerImageUrl } from "@/lib/speaker-images"

type SpeakerBioToggleProps = {
  name: string
  bio?: string
  imageSlug?: string
  showLabel: string
  hideLabel: string
  roleLabel?: string
  className?: string
}

export function SpeakerBioToggle({
  name,
  bio,
  imageSlug,
  showLabel,
  hideLabel,
  roleLabel,
  className,
}: SpeakerBioToggleProps) {
  const [open, setOpen] = useState(false)
  const imageUrl = imageSlug ? speakerImageUrl(imageSlug) : undefined

  return (
    <div className={className}>
      {roleLabel && <p className="mb-1.5 text-xs text-muted-foreground">{roleLabel}</p>}
      <div className="flex gap-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="size-11 shrink-0 rounded-full border border-border object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
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
      </div>
    </div>
  )
}
