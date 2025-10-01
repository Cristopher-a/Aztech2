import React, { useState, useEffect } from 'react'
import { Download, Play, BookOpen, Code, Cog, Zap } from 'lucide-react'

const Resources: React.FC = () => {
  const [hoveredGuide, setHoveredGuide] = useState<number | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [hoveredBlog, setHoveredBlog] = useState<number | null>(null)
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

  const guides = [
    {
      title: "Programación Básica con Arduino",
      description: "Guía completa para comenzar con Arduino desde cero",
      icon: <Code style={{ color: '#60a5fa' }} size={24} />,
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Introducción al CAD",
      description: "Aprende diseño asistido por computadora para robótica",
      icon: <Cog style={{ color: '#0ea5e9' }} size={24} />,
      type: "PDF",
      size: "3.1 MB"
    },
    {
      title: "Energía Mecánica en Robótica",
      description: "Conceptos fundamentales de física aplicada",
      icon: <Zap style={{ color: '#60a5fa' }} size={24} />,
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Sensores y Actuadores",
      description: "Todo sobre los componentes básicos de un robot",
      icon: <BookOpen style={{ color: '#0ea5e9' }} size={24} />,
      type: "PDF",
      size: "2.2 MB"
    }
  ]

  const videos = [
    {
      title: "Primeros pasos en robótica",
      description: "Video introductorio para principiantes",
      duration: "15:30",
      thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      title: "Programación de motores",
      description: "Cómo controlar motores con Arduino",
      duration: "12:45",
      thumbnail: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
      title: "Diseño 3D para robótica",
      description: "Herramientas de CAD para roboticistas",
      duration: "20:15",
      thumbnail: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
    },
    {
      title: "Principios de mecánica",
      description: "Física aplicada en sistemas robóticos",
      duration: "18:20",
      thumbnail: "https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg"
    },
    {
      title: "Electrónica básica",
      description: "Circuitos fundamentales para robots",
      duration: "14:10",
      thumbnail: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg"
    },
    {
      title: "Algoritmos de navegación",
      description: "Programación de robots autónomos",
      duration: "22:35",
      thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    }
  ]

  const blogPosts = [
    {
      title: "5 experimentos STEAM que puedes hacer en casa",
      excerpt: "Descubre experimentos divertidos y educativos usando materiales caseros",
      date: "15 Dic 2024",
      readTime: "5 min"
    },
    {
      title: "Cómo construir tu primer robot con materiales reciclados",
      excerpt: "Guía paso a paso para crear un robot básico promoviendo la sustentabilidad",
      date: "10 Dic 2024",
      readTime: "8 min"
    },
    {
      title: "La importancia de la educación STEAM en el siglo XXI",
      excerpt: "Reflexiones sobre el impacto de la educación científica y tecnológica",
      date: "5 Dic 2024",
      readTime: "6 min"
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
            Aprende con{' '}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #0ea5e9, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              display: 'inline-block',overflow: 'hidden'
            }}>
              Aztech II
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
            Recursos educativos gratuitos para que toda la comunidad pueda aprender 
            robótica, programación y conceptos STEAM desde casa.
          </p>
        </div>
      </section>

      {/* Guides Section */}
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
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Guías PDF Descargables
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              fontWeight: '300'
            }}>
              Material educativo completo para aprender a tu ritmo
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {guides.map((guide, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredGuide === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredGuide === index ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={() => setHoveredGuide(index)}
                onMouseLeave={() => setHoveredGuide(null)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(14, 165, 233, 0.2))',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)'
                  }}>
                    {guide.icon}
                  </div>
                  
                  <div style={{
                    flex: 1
                  }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '0.5rem',
                      transition: 'color 0.3s ease'
                    }}>
                      {guide.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.95rem',
                      marginBottom: '1rem',
                      lineHeight: '1.5',
                      fontWeight: '300'
                    }}>{guide.description}</p>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.875rem'
                      }}>
                        <span style={{
                          backgroundColor: 'rgba(96, 165, 250, 0.2)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem'
                        }}>{guide.type}</span>
                        <span>{guide.size}</span>
                      </div>
                      
                      <button 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#60a5fa',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          ...(hoveredGuide === index ? {
                            backgroundColor: 'rgba(96, 165, 250, 0.2)',
                            transform: 'translateX(3px)'
                          } : {})
                        }}
                      >
                        <Download size={18} />
                        <span style={{ fontSize: '0.875rem' }}>Descargar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
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
              Videos Educativos
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              fontWeight: '300'
            }}>
              Tutoriales en video para aprender conceptos clave de robótica
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {videos.map((video, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredVideo === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredVideo === index ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredVideo(index)}
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
                      height: '180px',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredVideo === index ? 'scale(1.05)' : 'scale(1)'
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
                    opacity: hoveredVideo === index ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                    }}>
                      <Play style={{ color: 'white', marginLeft: '2px' }} size={20} />
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem'
                  }}>
                    {video.duration}
                  </div>
                </div>
                
                <div style={{
                  padding: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '0.5rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {video.title}
                  </h3>
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

      {/* Blog Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '6rem',
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
              Blog Educativo
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              fontWeight: '300'
            }}>
              Artículos y experimentos para profundizar en la educación STEAM
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {blogPosts.map((post, index) => (
              <article
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: hoveredBlog === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredBlog === index ? '0 15px 30px rgba(59, 130, 246, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredBlog(index)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s ease'
                }}>
                  {post.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  fontWeight: '300'
                }}>{post.excerpt}</p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.875rem'
                }}>
                  <span>{post.date}</span>
                  <span>{post.readTime} lectura</span>
                </div>
              </article>
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
                ...(hoveredButton === 'blog' ? {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)'
                } : {})
              }}
              onMouseEnter={() => setHoveredButton('blog')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>Ver todos los artículos</span>
              <BookOpen size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Global styles for animations */}
      <style>{`
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

export default Resources