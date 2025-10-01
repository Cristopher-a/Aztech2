import React, { useState } from 'react'
import { Instagram, Mail, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const handleMouseEnter = (socialName: string) => {
    setHoveredSocial(socialName)
  }

  const handleMouseLeave = () => {
    setHoveredSocial(null)
  }

  return (
    <footer style={{
      background: '#0f172a',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '3rem',
      paddingBottom: '1.5rem'
    }}>
      {/* Elemento decorativo */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Columna 1: Logo y descripción */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>A2</span>
              </div>
              <span style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                letterSpacing: '-0.02em'
              }}>Aztech II</span>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              marginBottom: '1.5rem'
            }}>
              Innovación tecnológica con propósito. Creamos soluciones que transforman ideas en realidad.
            </p>
            
            {/* Redes sociales */}
            <div style={{
              display: 'flex',
              gap: '0.75rem'
            }}>
              <a
                href="https://www.instagram.com/aztech_2_17626?igsh=eDBwaGxvemFhNjlq"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  ...(hoveredSocial === 'instagram' ? {
                    backgroundColor: '#e1306c',
                    transform: 'translateY(-3px)'
                  } : {})
                }}
                aria-label="Instagram"
                onMouseEnter={() => handleMouseEnter('instagram')}
                onMouseLeave={handleMouseLeave}
              >
                <Instagram size={18} />
              </a>
             
    
            
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
        
          
          {/* Columna 3: Contacto */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              position: 'relative',
              paddingBottom: '0.5rem'
            }}>
              Contacto
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)'
              }}></span>
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
             
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Phone size={18} style={{ marginRight: '0.75rem', color: '#3b82f6' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                  +52 56 2722 4553
                </span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Mail size={18} style={{ marginRight: '0.75rem', color: '#3b82f6' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                  17626.aztech2@gmail.com
                </span>
              </li>
            </ul>
          </div>
          
          {/* Columna 4: Patrocinadores */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              position: 'relative',
              paddingBottom: '0.5rem'
            }}>
              Patrocinadores
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)'
              }}></span>
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} style={{
                  width: '80px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Logo {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
          margin: '1.5rem 0'
        }}></div>
        
        {/* Copyright y eslogan */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '0.5rem'
          }}>
            Aztech II – Innovando con propósito, impactando con corazón.
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem'
          }}>
            © {new Date().getFullYear()} Aztech II. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer