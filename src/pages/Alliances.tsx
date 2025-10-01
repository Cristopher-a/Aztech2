import React, { useState, useEffect } from 'react'
import { Globe, Users, Handshake, Video } from 'lucide-react'

const Alliances: React.FC = () => {
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null)
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null)
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

  const teams = [
    { name: "Team Alpha", country: "México", flag: "🇲🇽" },
    { name: "Beta Robotics", country: "Colombia", flag: "🇨🇴" },
    { name: "Gamma Tech", country: "Argentina", flag: "🇦🇷" },
    { name: "Delta Innovation", country: "Chile", flag: "🇨🇱" },
    { name: "Epsilon Labs", country: "Perú", flag: "🇵🇪" },
    { name: "Zeta Systems", country: "Ecuador", flag: "🇪🇨" }
  ]

  const activities = [
    {
      title: "Reunión Virtual Mensual",
      description: "Encuentros regulares para compartir experiencias y planificar proyectos",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
    },
    {
      title: "Intercambio de Conocimientos",
      description: "Talleres colaborativos donde cada equipo comparte sus especialidades",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
      title: "Proyectos Conjuntos",
      description: "Desarrollo de soluciones tecnológicas que beneficien a múltiples comunidades",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    }
  ]

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
        paddingTop: '6rem',
        paddingBottom: '4rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            overflow: 'hidden'
          }}>
            Nuestras{' '}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #0ea5e9, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              display: 'inline-block',
              overflow: 'hidden'
            }}>
              Alianzas
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Juntos somos más fuertes. Conoce las alianzas estratégicas que nos permiten 
            amplificar nuestro impacto en toda Latinoamérica.
          </p>
        </div>
      </section>

      {/* Heart to the Community Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)'
                  }}>
                    <Handshake style={{ color: 'white' }} size={32} />
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    color: 'white',
                    letterSpacing: '-0.02em'
                  }}>
                    Heart to the Community
                  </h2>
                </div>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontWeight: '300'
                }}>
                  Heart to the Community nació de la necesidad de conectar equipos de robótica 
                  de toda Latinoamérica para crear un impacto social más grande y duradero.
                </p>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontWeight: '300'
                }}>
                  Esta alianza surgió cuando nos dimos cuenta de que los desafíos que enfrentamos 
                  son similares en toda la región. Al unir fuerzas, podemos compartir recursos, 
                  conocimientos y experiencias para maximizar nuestro impacto en las comunidades.
                </p>

                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#60a5fa',
                      marginBottom: '0.5rem'
                    }}>6+</div>
                    <div style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem'
                    }}>Equipos</div>
                  </div>
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#0ea5e9',
                      marginBottom: '0.5rem'
                    }}>5</div>
                    <div style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem'
                    }}>Países</div>
                  </div>
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#60a5fa',
                      marginBottom: '0.5rem'
                    }}>500+</div>
                    <div style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem'
                    }}>Beneficiarios</div>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative'
              }}>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Heart to the Community"
                  style={{
                    width: '100%',
                    borderRadius: '1rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(30, 58, 138, 0.7), transparent)',
                  borderRadius: '1rem'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '4rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Equipos Participantes
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.125rem',
              fontWeight: '300'
            }}>
              Conoce a los increíbles equipos que forman parte de nuestra alianza
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {teams.map((team, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredTeam === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredTeam === index ? '0 10px 20px rgba(59, 130, 246, 0.3)' : '0 5px 15px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={() => setHoveredTeam(index)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}>{team.flag}</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '0.25rem',
                      transition: 'color 0.3s ease'
                    }}>
                      {team.name}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.95rem'
                    }}>{team.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '6rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Actividades Colaborativas
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.125rem',
              fontWeight: '300'
            }}>
              Así trabajamos juntos para crear un impacto mayor
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {activities.map((activity, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredActivity === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredActivity === index ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={() => setHoveredActivity(index)}
                onMouseLeave={() => setHoveredActivity(null)}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '200px'
                }}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredActivity === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }}>
                      {index === 0 && <Video style={{ color: '#60a5fa' }} size={20} />}
                      {index === 1 && <Users style={{ color: '#0ea5e9' }} size={20} />}
                      {index === 2 && <Globe style={{ color: '#60a5fa' }} size={20} />}
                    </div>
                  </div>
                </div>
                
                <div style={{
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '0.75rem'
                  }}>{activity.title}</h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    fontWeight: '300'
                  }}>{activity.description}</p>
                </div>
              </div>
            ))}
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

export default Alliances