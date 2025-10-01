import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Heart } from 'lucide-react'

const Home: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([])

  // Generar partículas aleatorias
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 20 + 5
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #0c4a6e 50%, #1e3a8a 100%)',
      color: 'white',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Partículas en movimiento */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '0',
        pointerEvents: 'none'
      }}>
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '50%',
              animation: `float ${particle.speed}s infinite linear`,
              opacity: '0.8'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Team Photo with enhanced styling */}
          <div style={{
            marginBottom: '3rem',
            position: 'relative'
          }}>
            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(14, 165, 233, 0.3))',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.5s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}>
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                alt="Equipo Aztech II"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 255, 255, 0.3)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: '0',
                borderRadius: '50%',
                border: '2px solid transparent',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #3b82f6, #0ea5e9) border-box',
                opacity: '0',
                transition: 'opacity 0.3s ease'
              }}></div>
            </div>
          </div>

          {/* Main Title with enhanced gradient */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            overflow: 'hidden',
          }}>
            Somos{' '}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #0ea5e9, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              display: 'inline-block',
              overflow: 'hidden',
            }}>
              Aztech II
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Un equipo de robótica comprometido con transformar vidas a través de la innovación, 
            la inclusión y la educación STEAM.
          </p>

          {/* Enhanced Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/impact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.5)',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '1'
              }}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>Descubre nuestros proyectos</span>
              <ArrowRight 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredButton === 'primary' ? 'translateX(5px)' : 'translateX(0)'
                }} 
                size={20} 
              />
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                transform: hoveredButton === 'primary' ? 'scale(1)' : 'scale(0)',
                transition: 'transform 0.3s ease',
                zIndex: '-1'
              }}></div>
            </Link>
            
            <Link
              to="/alliances"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '1'
              }}
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>Conoce nuestras alianzas</span>
              <ArrowRight 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredButton === 'secondary' ? 'translateX(5px)' : 'translateX(0)'
                }} 
                size={20} 
              />
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                transform: hoveredButton === 'secondary' ? 'scale(1)' : 'scale(0)',
                transition: 'transform 0.3s ease',
                zIndex: '-1'
              }}></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Info Section with enhanced styling */}
      <section style={{
        padding: '5rem 1rem',
        background: 'linear-gradient(180deg, rgba(30, 58, 138, 0) 0%, rgba(30, 58, 138, 0.8) 100%)',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            paddingTop: '2rem',
          }}>
            {/* Quiénes Somos Card */}
            <div 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === 'quienes' ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'quienes' ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={() => setHoveredCard('quienes')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)'
              }}>
                <Users style={{ color: 'white' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}>Quiénes Somos</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Somos un equipo apasionado de jóvenes innovadores dedicados a la robótica y la tecnología. 
                Creemos en el poder de la educación STEAM para transformar comunidades y crear un futuro mejor.
              </p>
            </div>

            {/* Misión y Visión Card */}
            <div 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === 'mision' ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'mision' ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={() => setHoveredCard('mision')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)'
              }}>
                <Target style={{ color: 'white' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}>Misión y Visión</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Nuestra misión es democratizar el acceso a la educación tecnológica y crear impacto social positivo. 
                Visualizamos un mundo donde la tecnología sea una herramienta de inclusión y transformación.
              </p>
            </div>

            {/* Compromiso Card */}
            <div 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === 'compromiso' ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'compromiso' ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={() => setHoveredCard('compromiso')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)'
              }}>
                <Heart style={{ color: 'white' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}>Nuestro Compromiso</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Estamos comprometidos con la comunidad y la educación STEAM. Trabajamos por la inclusión, 
                apoyamos causas sociales y compartimos conocimiento para inspirar a las próximas generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global styles for animations */}
      <style >{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Home