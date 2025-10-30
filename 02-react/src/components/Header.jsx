export function Header() {
  return (
      <header>
          <div>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline></svg>
              <h1>DevJobs</h1>
          </div>
          <nav>
              <a href="./index.html">Inicio</a>
              <a href="./carrers.html" style={{ color: 'var(--primary-light)' }}>Empleos</a>
          </nav>

          <div>
              <a href="">Upload your CV</a>
              <avatar-profile service="github" username="AlexanderEstebanZapata1994" size="32"></avatar-profile>
          </div>
      </header>
  )
}