import { Link } from './Link/Link.jsx'
export function Header() {
    return (
        <header>
            <Link href="/" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline></svg>
                <h1 style={{color: 'var(--text-primary)',}}>
                    DevJobs
                </h1>
            </Link>

            <div>
                <Link href="/search">Jobs</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    )
}