type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconParabrisas({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 13c1-4 4-7 9-7s8 3 9 7" />
      <path d="M3 13h18" />
      <path d="M3 13v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
      <path d="M8 8.5 6 13m10-4.5 2 4.5" />
    </svg>
  )
}

export function IconLuneta({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 15c.5-4.5 4-8 8-8s7.5 3.5 8 8" />
      <path d="M4 15h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M9 8.2 7.5 15M15 8.2 16.5 15" />
    </svg>
  )
}

export function IconAleta({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 19V9c0-2 2-4 5-5l7 3-6 3 6 2-6 2 6 2-8 3H5Z" />
    </svg>
  )
}

export function IconPuerta({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <path d="M8 4v7h8V4" />
    </svg>
  )
}

export function IconLateral({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 16 4 9c.3-2 2-3.5 4-3.5h7c1.6 0 3 1 3.5 2.5L20 12v4" />
      <path d="M3 16h18" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M8.5 6.5v5.5h8l-2-5.5" />
    </svg>
  )
}

export function IconHome({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  )
}

export function IconPaint({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 4h11l3 3-9 9-5-5 3-3" />
      <path d="M6 14 4 20l6-2" />
      <path d="m15.5 6.5 2 2" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-6.8 7-12a7 7 0 1 0-14 0c0 5.2 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function IconCamera({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  )
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconX({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2A20 20 0 0 0 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.5H8v3h2.3V21h3.2Z" />
    </svg>
  )
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.6 6.3A8.4 8.4 0 0 0 4 16.9L3 21l4.2-1a8.4 8.4 0 0 0 12.4-7.4 8.3 8.3 0 0 0-2-6.3ZM12 19.4a7 7 0 0 1-3.6-1l-.3-.1-2.5.6.6-2.4-.2-.3A7 7 0 1 1 12 19.4Zm3.9-5.2c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.8.9-.3.2-.5.1a5.7 5.7 0 0 1-1.7-1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4c-.1-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2 4.7 4.7 0 0 0 1 2.5 10.6 10.6 0 0 0 4.1 3.6c.6.2 1 .4 1.4.5a3.3 3.3 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  )
}
