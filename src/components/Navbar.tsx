import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = [
    { name: 'Equipo', path: '/' },
    { name: 'Impacto', path: '/impact' },
    { name: 'Alianzas', path: '/alliances' },
    { name: 'Recursos', path: '/resources' },
    { name: 'Contacto', path: '/contact' }
  ]

  const handleMouseEnter = (itemName: string) => {
    setIsHovered(itemName)
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  // Efecto para centrar el enlace activo
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => location.pathname === item.path)
    if (activeIndex !== -1 && menuRef.current && linkRefs.current[activeIndex]) {
      const activeLink = linkRefs.current[activeIndex]
      const menuContainer = menuRef.current
      
      // Calcular la posición del enlace activo
      const linkRect = activeLink.getBoundingClientRect()
      const containerRect = menuContainer.getBoundingClientRect()
      
      // Calcular la posición de scroll para centrar el enlace
      const scrollLeft = linkRect.left + menuContainer.scrollLeft - containerRect.left - (containerRect.width - linkRect.width) / 2
      
      // Desplazar el contenedor
      menuContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }, [location.pathname])

  return (
    <nav style={{
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        
    
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)'
            }}>
              <span style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.125rem'
              }}>A2</span>
            </div>
            <span style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem'
            }}>Aztech II</span>
          </Link>

          {/* Navigation Menu - Siempre visible */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div ref={menuRef} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
     
            }}>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                 ref={el => {
    linkRefs.current[index] = el;
  }}
                  to={item.path}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    border: '1px solid transparent',
                    ...(location.pathname === item.path 
                      ? {
                          color: 'white',
                          background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)'
                        } 
                      : {
                          color: 'rgba(255, 255, 255, 0.8)'
                        }),
                    ...(isHovered === item.name && location.pathname !== item.path 
                      ? {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        } 
                      : {})
                  }}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar