"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
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

function SpeakerAvatar({ name, imageUrl }: { name: string; imageUrl?: string }) {
  if (!imageUrl) return null

  return (
    <img
      src={imageUrl}
      alt={name}
      width={56}
      height={56}
      loading="lazy"
      decoding="async"
      className="size-14 shrink-0 rounded-lg border border-border object-cover"
    />
  )
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
  const toggleLabel = open ? hideLabel : showLabel

  return (
    <div className={className}>
      {roleLabel && <p className="mb-1.5 text-xs text-muted-foreground">{roleLabel}</p>}
      {bio ? (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={cn(
              "flex w-full items-start gap-3 rounded-xl border border-transparent p-2 text-start transition-colors",
              "hover:border-border/60 hover:bg-secondary/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            )}
          >
            <SpeakerAvatar name={name} imageUrl={imageUrl} />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
                  {tagline && (
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
                  )}
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 pt-0.5 text-xs font-medium text-primary sm:text-sm">
                  {toggleLabel}
                  <ChevronDown
                    className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </button>
          {open && (
            <p
              className={cn(
                "mt-1 text-sm leading-relaxed text-muted-foreground",
                imageUrl ? "ms-[4.75rem]" : "px-2",
              )}
            >
              {bio}
            </p>
          )}
        </>
      ) : (
        <div className="flex items-start gap-3 p-2">
          <SpeakerAvatar name={name} imageUrl={imageUrl} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
            {tagline && (
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{tagline}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
