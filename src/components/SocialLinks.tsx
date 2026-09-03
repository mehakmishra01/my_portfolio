import { socialIconMap } from './Icons'
import { contact, socialLinks } from '../data/portfolio'

type SocialLinksProps = {
  size?: number
  showHandle?: boolean
}

export default function SocialLinks({ size = 16, showHandle = true }: SocialLinksProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {showHandle && (
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-dashed"
        >
          {contact.handle}
        </a>
      )}
      <div className="social-links-row">
        {socialLinks.map((link) => {
          const Icon = socialIconMap[link.icon]
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="social-icon-btn"
            >
              <Icon size={size} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
