import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

interface CtaButtonProps {
  className?: string
  onClick?: () => void
}

export default function CtaButton({ className, onClick }: CtaButtonProps) {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange',
        className,
      )}
    >
      Start a Project
    </Link>
  )
}
