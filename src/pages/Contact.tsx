import React, { useState, useEffect } from 'react'
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser';
const Contact: React.FC = () => {

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([])

  const [Name, setName ]= useState("")
  const [Message, setMessage ]= useState("")
  const [Email, setEmail]=useState("")
   const sendEmail = (e:any) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    emailjs.send(
      'service_qf5wwod',      // ID de su servicio de EmailJS
      'template_6k3srct',     // ID de su plantilla de EmailJS
      {
title: "Queremos colaborar",
name: Name,
time: new Date(),
message: Message,
email: "ssss",
},// Referencia al formulario
      '2WcytQmofcRLC_Mwq'      // Su clave pública de EmailJS
    )
    .then((result) => {
      console.log('Success:', result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.error('Error:', error.text);
      alert('Failed to send email.');
    });
  };
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
      background: 'linear-gradient(135deg, #4c1d95 0%, #7e22ce 50%, #ec4899 100%)',
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
            ¡Conectemos{' '}
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa, #ec4899, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient 3s ease infinite',
              display: 'inline-block',
              overflow: 'hidden'
            }}>
              Juntos!
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            ¿Quieres colaborar, invitar a Aztech II a tu institución o apoyar nuestros proyectos? 
            Escríbenos aquí.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Aztech II siempre busca nuevos aliados para inspirar, enseñar y transformar comunidades.
          </p>
        </div>
      </section>

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
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}>
            {/* Contact Form */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                marginBottom: '2rem'
              }}>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.2rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}>Envíanos un mensaje</h2>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  fontWeight: '300'
                }}>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              <form onSubmit={sendEmail} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    color: 'white',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={Name}
                     onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.75rem',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                      ...(focusedField === 'name' ? {
                        borderColor: '#a78bfa',
                        boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.2)'
                      } : {})
                    }}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    color: 'white',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={Email}
                     onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.75rem',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                      ...(focusedField === 'email' ? {
                        borderColor: '#a78bfa',
                        boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.2)'
                      } : {})
                    }}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    color: 'white',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={Message}
                     onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.75rem',
                      color: 'white',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                      resize: 'vertical',
                      ...(focusedField === 'message' ? {
                        borderColor: '#a78bfa',
                        boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.2)'
                      } : {})
                    }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Cuéntanos sobre tu proyecto, institución o cómo te gustaría colaborar con nosotros..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '0.5rem',
                    ...(hoveredButton === 'submit' ? {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(139, 92, 246, 0.4)'
                    } : {})
                  }}
                  onMouseEnter={() => setHoveredButton('submit')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <Send size={20} />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {/* Direct Contact */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em'
                }}>Contacto directo</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(139, 92, 246, 0.4)'
                    }}>
                      <Mail style={{ color: 'white' }} size={24} />
                    </div>
                    <div>
                      <p style={{
                        color: 'white',
                        fontWeight: '500',
                        marginBottom: '0.25rem',
                        fontSize: '1rem'
                      }}>Correo oficial</p>
                      <a 
                        href="mailto:17626.aztech2@gmail.com" 
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          fontSize: '1rem',
                          ...(hoveredLink === 'email' ? {
                            color: '#f5d0fe'
                          } : {})
                        }}
                        onMouseEnter={() => setHoveredLink('email')}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        17626.aztech2@gmail.com

                      </a>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(139, 92, 246, 0.4)'
                    }}>
                      <MessageCircle style={{ color: 'white' }} size={24} />
                    </div>
                    <div>
                      <p style={{
                        color: 'white',
                        fontWeight: '500',
                        marginBottom: '0.25rem',
                        fontSize: '1rem'
                      }}>WhatsApp</p>
                      <a 
                        href="https://wa.me/1234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          fontSize: '1rem',
                          ...(hoveredLink === 'whatsapp' ? {
                            color: '#f5d0fe'
                          } : {})
                        }}
                        onMouseEnter={() => setHoveredLink('whatsapp')}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        +52 56 2722 4553
                      </a>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(139, 92, 246, 0.4)'
                    }}>
                      <MapPin style={{ color: 'white' }} size={24} />
                    </div>
                    <div>
                      <p style={{
                        color: 'white',
                        fontWeight: '500',
                        marginBottom: '0.25rem',
                        fontSize: '1rem'
                      }}>Ubicación</p>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '1rem'
                      }}>Ciudad de México, México</p>
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem',
                    ...(hoveredButton === 'whatsapp' ? {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(139, 92, 246, 0.4)'
                    } : {})
                  }}
                  onMouseEnter={() => setHoveredButton('whatsapp')}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={()=>{
                        window.open("https://wa.me/525627224553")
                  }}    
                >
                  <MessageCircle size={20} />
                  <span>Escribir por WhatsApp</span>
                </button>
              </div>

              {/* Collaboration Types */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em'
                }}>¿Cómo podemos colaborar?</h3>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      backgroundColor: '#a78bfa'
                    }}></div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}>
                      <span style={{
                        color: 'white',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>Instituciones educativas:</span> Talleres y demostraciones
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      backgroundColor: '#ec4899'
                    }}></div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}>
                      <span style={{
                        color: 'white',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>Organizaciones sociales:</span> Proyectos de impacto comunitario
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      backgroundColor: '#a78bfa'
                    }}></div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}>
                      <span style={{
                        color: 'white',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>Empresas:</span> Patrocinios y alianzas estratégicas
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: 0,
                      backgroundColor: '#ec4899'
                    }}></div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}>
                      <span style={{
                        color: 'white',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>Equipos de robótica:</span> Intercambios y colaboraciones
                    </p>
                  </div>
                </div>
              </div>
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

export default Contact