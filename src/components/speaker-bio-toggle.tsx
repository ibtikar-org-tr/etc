"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { speakerImageUrl } from "@/lib/speaker-images"

type SpeakerBioToggleProps = {
  name: string
  tagline?: string
  bio?: string
  imageSlug?: string
  showLabel: string
  hideLabel: string
  roleLabel?: string
  className?: string
}

export function SpeakerBioToggle({
  name,
  tagline,
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
      <div className="flex items-start gap-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="size-14 shrink-0 rounded-lg border border-border object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
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
          {tagline && (
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
          )}
          {bio && open && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bio}</p>
          )}
        </div>
      </div>
    </div>
  )
}
