import React, { useState, useEffect } from 'react'
import { ExternalLink, Play, Users, Heart, PawPrint } from 'lucide-react'

const Impact: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
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

  const projects = [
    {
      id: 1,
      title: "Inclusión con niños con discapacidad",
      description: "Programa de robótica adaptada para niños con diferentes capacidades",
      result: "50+ niños beneficiados",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      icon: <Users style={{ color: '#60a5fa' }} size={24} />
    },
    {
      id: 2,
      title: "Apoyo a refugios de animales",
      description: "Desarrollo de sistemas automatizados para mejorar el cuidado animal",
      result: "3 refugios equipados",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      icon: <PawPrint style={{ color: '#0ea5e9' }} size={24} />
    },
    {
      id: 3,
      title: "Educación STEAM comunitaria",
      description: "Talleres gratuitos de robótica en comunidades vulnerables",
      result: "200+ estudiantes alcanzados",
      image: "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg",
      icon: <Heart style={{ color: '#60a5fa' }} size={24} />
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Robot seguidor de línea básico",
      description: "Aprende a construir tu primer robot seguidor de línea",
      thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      id: 2,
      title: "Programación con Arduino",
      description: "Conceptos básicos de programación para robótica",
      thumbnail: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
      id: 3,
      title: "Sensores y actuadores",
      description: "Cómo usar sensores para hacer robots inteligentes",
      thumbnail: "https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg"
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
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',overflow: 'hidden'
          }}>
            Nuestro{' '}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #0ea5e9, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              display: 'inline-block',overflow: 'hidden'
            }}>
              Impacto
            </span>
            {' '}en la Comunidad
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300',
            overflow: 'hidden'
          }}>
            Cada proyecto que desarrollamos tiene un propósito: crear un impacto positivo 
            y duradero en nuestra comunidad a través de la tecnología y la innovación.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredProject === project.id ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredProject === project.id ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '200px'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                  }}>
                    {project.icon}
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
                  }}>{project.title}</h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    fontWeight: '300'
                  }}>{project.description}</p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)'
                    }}>
                      {project.result}
                    </span>
                    <button 
                      style={{
                        color: '#60a5fa',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        ...(hoveredProject === project.id ? {
                          backgroundColor: 'rgba(96, 165, 250, 0.2)',
                          transform: 'translateX(3px)'
                        } : {})
                      }}
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <button 
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                ...(hoveredButton === 'gallery' ? {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)'
                } : {})
              }}
              onMouseEnter={() => setHoveredButton('gallery')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>Ver galería completa</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Heart of the Community Section */}
      <section style={{
        paddingTop: '5rem',
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
            marginBottom: '4rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              Heart of the{' '}
              <span style={{
                background: 'linear-gradient(90deg, #60a5fa, #0ea5e9, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'gradient 3s ease infinite',
                display: 'inline-block'
              }}>
                Community
              </span>
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Aprende con nosotros. Videos tutoriales de robots que puedes construir en casa 
              y compartir con tu comunidad.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {videos.map((video) => (
              <div
                key={video.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredVideo === video.id ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredVideo === video.id ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div style={{
                  position: 'relative'
                }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredVideo === video.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: hoveredVideo === video.id ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                    }}>
                      <Play style={{ color: 'white', marginLeft: '2px' }} size={24} />
                    </div>
                  </div>
                </div>
                
                <div style={{
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>{video.title}</h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    fontWeight: '300'
                  }}>{video.description}</p>
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

export default Impact